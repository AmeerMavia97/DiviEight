import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import AuthScreenLayout from '@/layouts/AuthScreenLayout/AuthScreenLayout'
import { Input } from '@/component/ui/Input';
// IMAGE 
import Log_01 from '@/assets/Banners/Auth-01.avif'

const Message = (
  <h4 className='text-center font-para font-[500] text-[15px] pt-8'>
    Don't have an account? <Link to="/register" className='text-brandGreen'>Register</Link>
  </h4>
);



const Signin = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);


  return (
    <>
      <AuthScreenLayout BannerImage={Log_01} SocialLoginRen={true} Message={Message}>
        <div className="flex w-[100%]">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full "
          >
            <h1 className="text-[42px] leading-[48px] font-bold font-head">
              Welcome Back to DiviEight!
            </h1>
            <p className=" mt-2 mb-5 text-[15.5px] font-para">
             Welcome back! Log in to explore the latest properties, manage your favorites, and stay updated with new listings
            </p>

            {/* Email */}
            <Input
              label="Your Email"
              name="email"
              placeholder="info@gmail.com"
              register={register}
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
                errors={errors}
              />
            </div>
            <div className='mt-3 text-end'>
              <Link to={"/forget-password"}><h5 className='font-para text-brandDark text-[15px] font-[500]'>Forget Passowrd?</h5></Link>
            </div>

            <button
              type="submit"
              className="mt-6 w-full bg-brandGreen font-para cursor-pointer transition duration-[0.3s] text-white h-12 rounded-lg font-semibold hover:bg-brandDark2"
            >
              Login
            </button>
          </form>

          

        </div>
      </AuthScreenLayout>
    </>
  )
}

export default Signin