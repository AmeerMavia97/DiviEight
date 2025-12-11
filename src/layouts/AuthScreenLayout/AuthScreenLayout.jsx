import React from 'react'
import Logo from '@/assets/HeaderLogo.png'
import { Link } from 'react-router-dom';
import SocialLogin from '@/screens/auth/SocialLogin/SocialLogin';


const AuthScreenLayout = ({ children, BannerImage, SocialLoginRen , Message }) => {

    const BannerBackground = {
        backgroundImage: `url(${BannerImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#00000000",
        backgroundBlendMode: "color",
        backgroundPosition: "center"
    };


    return (
        <>
            <div className='grid grid-cols-2 '>

                <div style={BannerBackground} className=' w-[95%] px-9 pt-6 pb-9 flex flex-col justify-between overflow-hidden relative'>

                    <div className='relative'>
                        <Link to={'/'}>
                            <img src={Logo} alt="" />
                        </Link>
                    </div>

                    <div className='absolute bg-brandDark w-[70%] h-[80px] blur-3xl bottom-4 left-0'></div>

                    <div className=' flex flex-col gap-1 w-[65%] relative'>
                        <h1 className='text-brandLight font-head text-4xl font-semibold'>Find Your Sweet Home</h1>
                        <p className='text-brandLight text-para text-[15px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, similique!</p>
                    </div>
                </div>

                <div className='min-h-screen flex flex-col  justify-center items-center gap-3 py-28 '>

                    <div className='pr-10 w-[80%] pr-10'>
                        {children}
                    </div>

                    {SocialLoginRen && <div className='w-[100%] pr-10'>
                        <div className="flex items-center my-6 px-4 px-22 ">
                            <div className=" h-[0.6px] w-full bg-brandGrey2"></div>
                            <span className=" w-full text-sm text-center font-para text-brandDark2">Instant Login</span>
                            <div className=" h-[0.6px] w-full bg-brandGrey2"></div>
                        </div>

                        <SocialLogin></SocialLogin>

                        { Message && Message}

                    </div>
                    }

                </div>

            </div>
        </>
    )
}

export default AuthScreenLayout