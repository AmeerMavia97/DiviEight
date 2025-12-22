import React from 'react'
import BgImage from '@/assets/Banners/ListingBanner.png'
import PropertySearchFilter from './PropertySearchFilter';

// BACKGROUND STYLES
const LisitngBanner = {
    backgroundImage: `url(${BgImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
};


const HeroSection = () => {
    return (
        <>
            <section style={LisitngBanner} className='h-[90vh] pt-40 relative overflow-hidden' >
                {/* <img className='absolute top-0  w-full object-cover ' src={BgImage} alt="" /> */}
                <div className='text-center relative w-full flex flex-col justify-center items-center gap-3'>
                    <h1 className='font-head font-semibold text-[55px] leading-[59px] text-brandDark'>Browse Luxury Vacation <br /> <span className='text-brandGreen'>Homes</span></h1>
                    <p className='font-para font-[500] text-[15px] text-brandDark'>Discover your perfect fractional ownership opportunity</p>

                    <PropertySearchFilter></PropertySearchFilter>
                </div>
            </section>

        </>
    )
}

export default HeroSection