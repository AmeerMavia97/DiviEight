import React from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import AuthScreenLayout from '@/layouts/AuthScreenLayout/AuthScreenLayout'
import { Input } from '@/component/ui/Input';
// IMAGE 
import Forget_01 from '@/assets/Banners/Forget-01.png'

const ForgetPassword = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <>
            <AuthScreenLayout BannerImage={Forget_01}>
                <div className="flex w-[100%]">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="w-full "
                    >
                        <h1 className="text-[42px] leading-[48px] font-bold font-head">
                            Forget your password?
                        </h1>
                        <p className=" mt-2 mb-5 text-[15.5px] font-para">
                           Don’t worry, happens to all of us. Enter your email below to recover your password
                        </p>

                        {/* Email */}
                        <Input
                            label="Your Email"
                            name="email"
                            placeholder="info@gmail.com"
                            register={register}
                            errors={errors}
                        />


                        <button
                            type="submit"
                            className="mt-6 w-full bg-brandGreen font-para cursor-pointer transition duration-[0.3s] text-white h-12 rounded-lg font-semibold hover:bg-brandDark2"
                        >
                            Send Otp
                        </button>
                    </form>

                </div>
            </AuthScreenLayout>
        </>
    )
}

export default ForgetPassword