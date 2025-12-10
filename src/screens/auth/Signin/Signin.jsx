import React from 'react'
import AuthScreenLayout from '@/layouts/AuthScreenLayout/AuthScreenLayout'
// IMAGE 
import Reg_01 from '@/assets/Banners/Reg-01.webp'

const Signin = () => {
  return (
    <>
      <AuthScreenLayout BannerImage={Reg_01}>
        <h1>helllo</h1>
      </AuthScreenLayout>
    </>
  )
}

export default Signin