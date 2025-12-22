import React from 'react'

const HeroSection = () => {
    return (
        <section className='h-[60vh] pt-36 dark:bg-brandDark relative overflow-hidden' >
            <div className='flex justify-center flex-col  items-center'>
                <div data-aos="fade-down" data-aos-duration="1000">
                    <span className="text-black dark:text-white font-para font-semibold text-sm uppercase tracking-wider">
                        Contact Us
                    </span>
                </div>

                <h1
                    className="font-heading text-black font-head dark:text-white text-3xl md:text-4xl lg:text-[55px] leading-[59px]  font-bold mt-4 mb-3"
                >
                    Get In Touch{" "}
                    <span className='text-brandGreen'>With Us</span>
                </h1>

                <p
                    className="text-[15px] w-[50%] text-center text-black font-para dark:text-white"
                >
                    Browse through a curated selection of properties tailored
                    to your needs. Find your dream home, investment, or rental today.
                </p>
            </div>
        </section>
    )
}

export default HeroSection