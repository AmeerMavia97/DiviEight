import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

// TOOLS 
import { Input } from '@/component/ui/Input';
import { registerUser } from '@/services/authService';
import AuthScreenLayout from '@/layouts/AuthScreenLayout/AuthScreenLayout'

// IMAGE 
import Reg_01 from '@/assets/Banners/Reg-01.png'

const Message = (
    <h4 className='text-center font-para font-[500] text-[15px] pt-8'>
        Already have an account? <Link to="/login" className='text-brandGreen'>Login</Link>
    </h4>
);

const Signup = () => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const password = watch("password");

    const onSubmit = async (data) => {
        try {
            setLoading(true);
            const payload = {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                phoneNumber: data.phoneNumber,
                password: data.password,
            };
            const res = await registerUser(payload);
            // toast.success(res.message || "Registered successfully!");
            navigate("/verify-otp", { state: { type: "register", email: data.email } });
        } catch (err) {
            // toast.error(err.message || "Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthScreenLayout BannerImage={Reg_01} SocialLoginRen={true} Message={Message}>
            <div className="flex flex-col w-[100%]">
                <h1 className="text-[42px] leading-[48px] font-bold font-head">
                    Join DiviEight Today!
                </h1>
                <p className=" mt-2 mb-5 text-[15.5px] font-para">
                    Join our community! Create an account to discover, save, and schedule visits to your dream properties.
                </p>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">

                    <div className='grid grid-cols-2 gap-5'>
                        <Input
                            label="First Name"
                            name="firstName"
                            placeholder="Enter First Name"
                            type='text'
                            // register={register("firstName", { required: "First name is required" })}
                            errors={errors}
                            register={register}
                            validation={{ required: "First name is required" }}
                        />

                        <Input
                            label="Last Name"
                            name="lastName"
                            placeholder="Enter Last Name"
                            type='text'
                            // register={register("lastName", { required: "Last name is required" })}
                            errors={errors}
                            register={register}
                            validation={{ required: "Last name is required" }}

                        />
                    </div>

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

                    <Input
                        label="Phone Number"
                        name="phoneNumber"
                        placeholder="+1 123456789"
                        type="tel"
                        register={register}  // ✅ pass the function itself
                        validation={{
                            required: "Phone number is required",
                            minLength: { value: 10, message: "Enter a valid phone number" }
                        }}
                        errors={errors}
                    />


                    <Input
                        label="Password"
                        name="password"
                        placeholder="Enter Password"
                        isPassword={true}
                        register={register}
                        validation={{
                            required: "Password is required",
                            minLength: { value: 8, message: "Password must be at least 8 characters" },
                            validate: {
                                hasUppercase: (v) =>
                                    /[A-Z]/.test(v) || "Password must have at least 1 uppercase letter",
                                hasNumber: (v) =>
                                    /[0-9]/.test(v) || "Password must have at least 1 number",
                                hasSpecial: (v) =>
                                    /[!@#$%^&*()<>,."]/.test(v) ||
                                    "Password must have at least 1 special character",
                            },
                        }}
                        errors={errors}
                    />


                    <Input
                        label="Confirm Password"
                        name="confirmPassword"
                        placeholder="ReEnter Password"
                        isPassword={true}
                        register={register}
                        validation={{
                            required: "Confirm password is required",
                            validate: (v) => v === password || "Passwords do not match",
                        }}
                        errors={errors}
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="mt-6 w-full bg-brandGreen font-para cursor-pointer transition duration-[0.3s] text-white h-12 rounded-lg font-semibold hover:bg-brandDark2 disabled:opacity-60"
                    >
                        {loading ? "Registering..." : "Register"}
                    </button>

                </form>
            </div>
        </AuthScreenLayout>
    )
}

export default Signup
