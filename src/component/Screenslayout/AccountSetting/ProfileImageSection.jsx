import React from 'react'
import Image from '@/assets/Banners/InfoBannerImage.webp'


const ProfileImageSection = () => {
    return (
        <div className='flex gap-6 items-center justify-between'>
            <div className='flex gap-6 items-center '>
                <img
                    src={Image}
                    alt="Default Banner"
                    className="  rounded-[10px] object-cover w-[28vh] h-[28vh] rounded-full"
                />
                <div>
                    <h2 className="text-[34px] leading-[43px] font-semibold font-head">
                        Monir UX Designer
                    </h2>
                    <p className='font-para'>info@gmail.com</p>
                    <div className='space-x-4 mt-2'>
                        <button className='px-3.5 py-2.5 text-[14px] bg-brandGreen rounded-[6px] text-brandLight font-para'>Upload New Picture</button>
                        <button className='px-4 py-2.5 text-[14px]  border-brandGreen border-[1.5px] rounded-[6px] text-brandDark font-para'>Delete</button>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}

export default ProfileImageSection