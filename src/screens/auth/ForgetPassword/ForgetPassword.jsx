import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import AuthScreenLayout from '@/layouts/AuthScreenLayout/AuthScreenLayout';
import { Input } from '@/component/ui/Input';
import { forgotPassword } from '@/services/authService';

// IMAGE 
import Forget_01 from '@/assets/Banners/Forget-01.png';
import { ChevronLeft } from 'lucide-react';

const ForgetPassword = () => {
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
  });

  const onSubmit = async (data) => {


    try {
      setLoading(true);
      setApiError("");
      setSuccess("");

      const response = await forgotPassword(data);
      navigate("/verify-otp", {
      state: {
        type: "resetpass",
        email: data.email,
      },
    });
    console.log(response);
    
    } catch (error) {
      setApiError(error?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthScreenLayout BannerImage={Forget_01}>
      <div className="flex w-full">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">

            {/* BACK TO LOGIN */}
          <div className="-mt-4 mb-2 text-start">
            <Link to="/login" className="text-brandDark flex gap-1 items-center font-semibold font-para text-[15px]">
              <ChevronLeft className='size-5' /> Back to Login
            </Link>
          </div>
          <h1 className="text-[42px] leading-[48px] font-bold font-head">
            Forget your password?
          </h1>

          <p className="mt-2 mb-5 text-[15.5px] font-para">
            Don’t worry, happens to all of us. Enter your email below to recover your password
          </p>

          
          

          {/* Email */}
          <Input
            label="Your Email"
            name="email"
            placeholder="info@gmail.com"
            register={register}
            validation={{
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
            }}
            errors={errors}
          />

          {/* API ERROR */}
          {apiError && (
            <div className="mt-2 text-red-600 text-[15px] font-para">
              {apiError}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`mt-6 w-full h-12 rounded-lg cursor-pointer font-para font-semibold transition
              ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-brandGreen text-white hover:bg-brandDark2"
              }
            `}
          >
            {loading ? "Sending Code..." : "Send Code"}
          </button>

          
        </form>
      </div>
    </AuthScreenLayout>
  );
};

export default ForgetPassword;
