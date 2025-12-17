import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import AuthScreenLayout from '@/layouts/AuthScreenLayout/AuthScreenLayout';
import { Input } from '@/component/ui/Input';

// IMAGE 
import Log_01 from '@/assets/Banners/Auth-01.avif';
import { loginUser } from '@/services/authService';

const Message = (
  <h4 className="text-center font-para font-[500] text-[15px] pt-8">
    Don't have an account?{" "}
    <Link to="/register" className="text-brandGreen">
      Register
    </Link>
  </h4>
);

const Signin = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

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

      const response = await loginUser(data);

      if (response?.token) {
        localStorage.setItem("token", response.token);
      }

      navigate("/");
    } catch (error) {
      console.log(error)
      if (error?.message === "Email not verified. OTP sent to your email.") {
        navigate("/verify-otp", {
          state: { type: "register", email: data.email },
        });
      }
      setApiError(error?.message || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthScreenLayout
      BannerImage={Log_01}
      SocialLoginRen={true}
      Message={Message}
    >
      <div className="flex w-full">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <h1 className="text-[42px] leading-[48px] tracking-[-0.8px] font-bold font-head">
            Welcome Back to DiviEight!
          </h1>

          <p className="mt-2 mb-5 text-[15.5px] font-para">
            Welcome back! Log in to explore the latest properties, manage your
            favorites, and stay updated with new listings
          </p>


          {/* Email */}
          <Input
            label="Email"
            name="email"
            placeholder="info@gmail.com"
            type="email"
            register={register}
            validation={{
              required: "Email is Required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            }}
            errors={errors}
          />

          {/* Password */}
          <div className="mt-4">
            <Input
              label="Password"
              name="password"
              placeholder="Enter Password"
              isPassword={true}
              register={register}
              validation={{ required: "Password is Required" }}
              errors={errors}
            />
          </div>

          {/* API Error */}

          <div className='grid grid-cols-2 items-center justify-between mt-3'>
            <div>
              {apiError && (
                <div className=" text-[15px] text-red-600  font-para">
                  {apiError}
                </div>
              )}
            </div>

            <div className="mt-1 text-end">
              <Link to="/forget-password">
                <h5 className="font-para text-brandDark text-[15px] font-[500]">
                  Forget Password?
                </h5>
              </Link>
            </div>

          </div>



          <button
            type="submit"
            disabled={loading}
            className={`mt-6 w-full h-12 cursor-pointer rounded-lg font-para font-semibold transition
              ${loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-brandGreen text-white hover:bg-brandDark2"
              }
            `}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </AuthScreenLayout>
  );
};

export default Signin;
