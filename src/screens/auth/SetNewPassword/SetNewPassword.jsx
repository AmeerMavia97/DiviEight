import React from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import AuthScreenLayout from '@/layouts/AuthScreenLayout/AuthScreenLayout'
import { Input } from '@/component/ui/Input';
// IMAGE 
import Forget_01 from '@/assets/Banners/Auth-02.avif'

const SetNewPassword = () => {

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
                            Set a password
                        </h1>
                        <p className=" mt-2 mb-5 text-[15.5px] font-para">
                            Your previous password has been reset. Please set a new password.
                        </p>

                        <Input
                            label="Password"
                            name="password"
                            placeholder="Enter Password"
                            isPassword={true}
                            register={register}
                            errors={errors}
                        />
                        <div className='mt-4'>
                            <Input
                            label="Confirm Password"
                            name="confirmPassword"
                            placeholder="ReEnter Password"
                            isPassword={true}
                            register={register}
                            errors={errors}
                        />
                        </div>


                        <button
                            type="submit"
                            className="mt-6 w-full bg-brandGreen font-para cursor-pointer transition duration-[0.3s] text-white h-12 rounded-lg font-semibold hover:bg-brandDark2"
                        >
                            Save new password
                        </button>
                    </form>

                </div>
            </AuthScreenLayout>
        </>
    )
}

export default SetNewPassword