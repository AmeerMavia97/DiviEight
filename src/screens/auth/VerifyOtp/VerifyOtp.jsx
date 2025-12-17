import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import AuthScreenLayout from "@/layouts/AuthScreenLayout/AuthScreenLayout";
import OtpInput from "@/component/ui/OtpInput";

// API
import {
  verifyEmailOtp,
  resendEmailOtp,
  resendResetOtp,
  verifyResetPassOtp,
} from "@/services/authService";

// IMAGE
import Auth_03 from "@/assets/Banners/Auth-03.png";

const VerifyOtp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { email, type } = location.state || {};

  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const [resendSuccess, setResendSuccess] = useState("");
  const [resendCooldown, setResendCooldown] = useState(30)
  const [canResend, setCanResend] = useState(false)

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: { otp: "" }
  });

  useEffect(() => {
    if (!email || !type) {
      navigate("/login");
    }
  }, [email, type, navigate]);

  useEffect(() => {
    let interval;

    if (!canResend) {
      interval = setInterval(() => {
        setResendCooldown((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setCanResend(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [canResend]);





  const onSubmit = async (data) => {

    const otp = data.otp.toString();
    try {
      setLoading(true);
      setApiError("");
      if (type === "register") {
        await verifyEmailOtp({ email, otp });
        navigate("/");
      } else if (type === "resetpass") {
        await verifyResetPassOtp({ email, otp });
        navigate("/set-new-password", { state: { email } });
      }
    } catch (err) {
      setApiError(err?.message || "Invalid or expired OTP");
    } finally {
      setLoading(false);
    }
  };



  const handleResendOtp = async () => {
    if (!canResend) return;

    try {
      setResendLoading(true);
      setApiError("");
      setResendSuccess("");

      if (type === "register") {
        await resendEmailOtp({ email });
      } else if (type === "resetpass") {
        await resendResetOtp({ email });
      }

      setResendSuccess("OTP has been resent to your email.");
      setCanResend(false);
      setResendCooldown(30);
    } catch (err) {
      setApiError(err?.message || "Failed to resend OTP");
    } finally {
      setResendLoading(false);
    }
  };



  return (
    <AuthScreenLayout BannerImage={Auth_03}>
      <div className="flex flex-col w-full">
        <h1 className="text-[42px] leading-[48px] font-bold font-head">
          Verify Code
        </h1>

        <p className="mt-2 mb-5 text-[15.5px] font-para">
          An authentication code has been sent to <b>{email}</b>
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
          <Controller
            name="otp"
            control={control}
            rules={{
              required: "OTP is required",
              minLength: {
                value: 6,
                message: "OTP must be 6 digits",
              },
            }}
            render={({ field }) => (
              <OtpInput
                length={6}
                value={field.value || ""}
                onChange={(value) => {
                  if (apiError) setApiError("");
                  if (resendSuccess) setResendSuccess("");
                  field.onChange(value);
                }}
                error={errors.otp}
              />
            )}
          />

          {/* Validation error */}
          {errors.otp && (
            <p className="text-brandError text-sm font-para">{errors.otp.message}</p>
          )}

          {/* API error */}
          {apiError && (
            <p className="text-brandError text-sm font-para">{apiError}</p>
          )}

          {/* Resend Success */}
          {resendSuccess && (
            <p className="text-green-600 text-sm font-para">{resendSuccess}</p>
          )}

          {/* Resend OTP */}
          <button
            type="button"
            onClick={handleResendOtp}
            disabled={   resendLoading ||  !canResend }
            className="font-para underline hover:text-brandGreen cursor-pointer text-brandDark text-[15px] font-[500]"
          >
            {resendLoading
              ? "Resending..."
              : canResend
                ? "Resend Code"
                : `Resend in ${resendCooldown}s`}
          </button>


          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="mt-3 w-full bg-brandGreen cursor-pointer text-brandLight h-12 rounded-lg font-semibold transition hover:bg-brandDark2 disabled:opacity-60"
          >
            {loading ? "Verifying..." : "Verify"}
          </button>
        </form>
      </div>
    </AuthScreenLayout>
  );
};

export default VerifyOtp;
