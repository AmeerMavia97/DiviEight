import React from 'react'
import { useForm } from 'react-hook-form';
import AuthScreenLayout from '@/layouts/AuthScreenLayout/AuthScreenLayout'
import { Input } from '@/component/ui/Input';

// IMAGE 
import Auth_03 from '@/assets/Banners/Auth-03.png'
import { Link } from 'react-router-dom';
import OtpInput from '@/component/ui/OtpInput';


const VerifyOtp = () => {

    const { control, handleSubmit, watch } = useForm({
        defaultValues: {
            otp: ["", "", "", "", "", ""],
        },
    });

    const onSubmit = (data) => {
        const otp = data.otp.join("");
        console.log("OTP:", otp);
    };


    return (
        <>
            <AuthScreenLayout BannerImage={Auth_03}>
                <div className="flex flex-col w-[100%]">
                    <h1 className="text-[42px] leading-[48px] font-bold font-head">
                        Verify code
                    </h1>
                    <p className=" mt-2 mb-5 text-[15.5px] font-para">
                        An authentication code has been sent to your email.
                    </p>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="w-full space-y-4 "
                    >



                        <OtpInput name="otp" control={control} />


                        <div className='mt-2 text-start'>
                            <Link to={"/forget-password"}><h5 className='font-para underline text-brandDark text-[15px] font-[500]'>Resend Code  </h5></Link>
                        </div>


                        <button
                            type="submit"
                            className="mt-3 w-full bg-brandGreen font-para cursor-pointer transition duration-[0.3s] text-white h-12 rounded-lg font-semibold hover:bg-brandDark2"
                        >
                            Verify
                        </button>
                    </form>



                </div>
            </AuthScreenLayout>
        </>
    )
}

export default VerifyOtp