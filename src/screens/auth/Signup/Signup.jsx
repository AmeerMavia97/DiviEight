import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

// TOOLS
import { Input } from '@/component/ui/Input';
import { registerUser } from '@/services/authService';
import AuthScreenLayout from '@/layouts/AuthScreenLayout/AuthScreenLayout';

// IMAGE
import Reg_01 from '@/assets/Banners/Reg-01.png';
import Select from '@/component/ui/Select';

const Message = (
    <h4 className="text-center font-para font-[500] text-[15px] pt-8">
        Already have an account?{" "}
        <Link to="/login" className="text-brandGreen">
            Login
        </Link>
    </h4>
);

const Signup = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [apiError, setApiError] = useState("");

    const {
        register,
        handleSubmit,
        watch,
        setError,
        formState: { errors },
    } = useForm({
        mode: "onSubmit",
    });

    const password = watch("password");

    const onSubmit = async (data) => {


        try {
            setLoading(true);
            setApiError("");

            const payload = {
                name: `${data.firstName} ${data.lastName}`,
                email: data.email,
                phone: data.phoneNumber,
                password: data.password,
                role: Number(data.role),
            };

            const res = await registerUser(payload);

            console.log(res)

            navigate("/verify-otp", {
                state: { type: "register", email: data.email },
            });

        } catch (err) {
            if (err?.errors) {
                Object.keys(err.errors).forEach((field) => {
                    setError(field, {
                        type: "server",
                        message: err.errors[field],
                    });
                });
            } else {
                setApiError(
                    err?.message ||
                    err?.error ||
                    "Registration failed. Please try again."
                );
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthScreenLayout
            BannerImage={Reg_01}
            SocialLoginRen={true}
            Message={Message}
        >
            <div className="flex flex-col w-full">
                <h1 className="text-[42px] leading-[48px] font-bold font-head">
                    Join DiviEight Today!
                </h1>

                <p className="mt-2 mb-5 text-[15.5px] font-para">
                    Join our community! Create an account to discover, save, and schedule
                    visits to your dream properties.
                </p>

                {/* API ERROR */}
                {apiError && (
                    <div className="mb-4 text-red-600 font-para text-[15px]">
                        {apiError}
                    </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
                    {/* First & Last Name */}
                    <div className="grid grid-cols-2 gap-5">
                        <Input
                            label="First Name"
                            name="firstName"
                            placeholder="Enter First Name"
                            register={register}
                            validation={{ required: "First name is required" }}
                            errors={errors}
                        />

                        <Input
                            label="Last Name"
                            name="lastName"
                            placeholder="Enter Last Name"
                            register={register}
                            validation={{ required: "Last name is required" }}
                            errors={errors}
                        />
                    </div>

                    {/* Email */}
                    <Input
                        label="Email"
                        name="email"
                        placeholder="info@gmail.com"
                        type="email"
                        register={register}
                        validation={{
                            required: "Email is required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Invalid email address",
                            },
                        }}
                        errors={errors}
                    />
                    {/* Phone */}
                    <Input
                        label="Phone Number"
                        name="phoneNumber"
                        placeholder="+1 123456789"
                        type="tel"
                        register={register}
                        validation={{
                            required: "Phone number is required",
                            minLength: {
                                value: 10,
                                message: "Enter a valid phone number",
                            },
                        }}
                        errors={errors}
                    />

                    <Select
                        label="Role"
                        name="role"
                        register={register}
                        validation={{ required: "Role is required" }}
                        errors={errors}
                        options={[
                            { label: "Buyer", value: "2" },
                            { label: "Seller", value: "3" },
                            { label: "Agent", value: "4" },
                        ]}
                    />

                    {/* Password */}
                    <Input
                        label="Password"
                        name="password"
                        placeholder="Enter Password"
                        isPassword
                        register={register}
                        validation={{
                            required: "Password is required",
                            minLength: {
                                value: 8,
                                message: "Password must be at least 8 characters",
                            },
                            validate: {
                                hasUppercase: (v) =>
                                    /[A-Z]/.test(v) ||
                                    "Password must have at least 1 uppercase letter",
                                hasNumber: (v) =>
                                    /[0-9]/.test(v) ||
                                    "Password must have at least 1 number",
                                hasSpecial: (v) =>
                                    /[!@#$%^&*()<>,."]/.test(v) ||
                                    "Password must have at least 1 special character",
                            },
                        }}
                        errors={errors}
                    />

                    {/* Confirm Password */}
                    <Input
                        label="Confirm Password"
                        name="confirmPassword"
                        placeholder="Re-enter Password"
                        isPassword
                        register={register}
                        validation={{
                            required: "Confirm password is required",
                            validate: (v) => v === password || "Passwords do not match",
                        }}
                        errors={errors}
                    />

                    {/* SUBMIT */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="mt-6 w-full h-12 rounded-lg font-para font-semibold transition
              bg-brandGreen text-white hover:bg-brandDark2
              disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                        {loading ? "Registering..." : "Register"}
                    </button>
                </form>
            </div>
        </AuthScreenLayout>
    );
};

export default Signup;
