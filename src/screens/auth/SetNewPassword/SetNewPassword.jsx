import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { setNewPassword } from "@/services/authService";
// COMPONENTS 
import { Input } from "@/component/ui/Input";
import RuleItem from "@/component/ui/RuleItem";
import AuthScreenLayout from "@/layouts/AuthScreenLayout/AuthScreenLayout";
// IMAGES
import Forget_01 from "@/assets/Banners/Auth-02.avif";

const passwordRegex =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/;

const SetNewPassword = () => {
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");   // ✅ NEW
  const { email } = location.state || {};

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const password = watch("password", "");
  const confirmPassword = watch("confirmPassword", "");

  /* ======= CLEAR API ERROR ON INPUT CHANGE ======= */
  useEffect(() => {
    if (apiError) setApiError("");
  }, [password, confirmPassword]);

  /* ======= RULE CHECKS ======= */
  const hasMinLength = password.length >= 8;
  const hasStrongChars = passwordRegex.test(password);
  const passwordsMatch =
    password && confirmPassword && password === confirmPassword;

  const allRulesPassed = hasMinLength && hasStrongChars && passwordsMatch;

  /* ======= SUBMIT ======= */
  const onSubmit = async (data) => {
    if (!allRulesPassed) return;

    try {
      setLoading(true);
      setApiError("");

      await setNewPassword({
        email,
        password: data.confirmPassword,
      });

      console.log("Password updated successfully");
    } catch (err) {
      // ✅ SAFE BACKEND ERROR EXTRACTION
      setApiError(
        err?.message ||
        err?.error ||
        "Unable to update password. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthScreenLayout BannerImage={Forget_01}>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">

        <h1 className="text-[42px] font-bold font-head">
          Create Password
        </h1>

        <p className="mt-2 mb-5 text-[15.5px] font-para">
          Your previous password has been reset. Please set a new password.
        </p>

        {/* PASSWORD */}
        <Input
          label="Password"
          name="password"
          placeholder="Enter Password"
          isPassword
          register={register}
          errors={errors}
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
            pattern: {
              value: passwordRegex,
              message:
                "Must include letters, numbers & special characters",
            },
          }}
        />

        {/* CONFIRM PASSWORD */}
        <div className="mt-4">
          <Input
            label="Confirm Password"
            name="confirmPassword"
            placeholder="Re-enter Password"
            isPassword
            register={register}
            errors={errors}
            rules={{
              required: "Confirm password is required",
              validate: (value) =>
                value === password || "Passwords do not match",
            }}
          />
        </div>

        {/* RULES UI */}
        <div className="mt-4">
          <p className="font-semibold text-[15.5px] font-para">
            Password must have :
          </p>

          <RuleItem valid={hasMinLength} text="Minimum 8 characters" />
          <RuleItem
            valid={hasStrongChars}
            text="Letters, numbers & special characters"
          />
          <RuleItem
            valid={passwordsMatch}
            text="Password & confirm password match"
          />
        </div>

        {/* 🔴 API ERROR UI */}
        {apiError && (
          <p className="mt-3 text-sm text-red-500 font-para">
            {apiError}
          </p>
        )}

        {/* BUTTON */}
        <button
          type="submit"
          disabled={!allRulesPassed || loading}
          className={`mt-6 w-full h-12 rounded-lg  font-para font-semibold transition
            ${
              allRulesPassed
                ? "bg-brandGreen text-white cursor-pointer hover:bg-brandDark2"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
        >
          {loading ? "Saving..." : "Save New Password"}
        </button>
      </form>
    </AuthScreenLayout>
  );
};

export default SetNewPassword;
