import React from 'react'
import Logo from '@/assets/HeaderLogo.png'


const AuthScreenLayout = ({ children , BannerImage}) => {

    const BannerBackground = {
        backgroundImage: `url(${BannerImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#00000026",
        backgroundBlendMode: "color",
    };


  return (
    <>
    <div className='grid grid-cols-2 gap-14'>

        <div style={BannerBackground} className=' w-full'>

            
            <div>
                <h1 className='text-brandLight font-display'>Find Your Sweet Home</h1>
                <p className='text-brandLight'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, similique!</p>
            </div>
        </div>

        <div className='min-h-screen'>
            {children}
        </div>
        
    </div>
    </>
  )
}

export default AuthScreenLayout