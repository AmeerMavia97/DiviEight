import { ArrowUpRight } from "lucide-react";
import React from "react";
import { ChevronDown } from "lucide-react";
import Profile from '@/assets/Banners/Profile.jpg'
import BuyWithConfi from '@/assets/Banners/BuyWithConfi.jpg'
import getmatch from '@/assets/Banners/getmatch.jpg'

 const steps = [
        {
            title: "Create Your Profile",
            content:
                "Tell us what you're looking for, where you want to buy, and your ideal budget.",
            image: Profile,
        },
        {
            title: "Get Matched With Buyers",
            content:
                "Our CM² algorithm pairs you with co-buyers who share your goals, timeline, and affordability.",
            image: getmatch,
        },
        {
            title: "Buy With Confidence",
            content:
                "A vetted agent guides you through listings, tours, negotiations and closing — secured on the immutable ledger.",
            image: BuyWithConfi,
        }
    ];



const WorkflowSteps = () => {

    const [activeIndex, setActiveIndex] = React.useState(1);

    return (
        <>


            <section className="w-full bg-brandLight dark:bg-brandDark  text-brandLight py-28 flex flex-col items-center px-4">

                <h2 data-aos="fade-down" data-aos-duration="1000" className="mb-4 text-[46px] font-bold leading-[43px] font-head text-brandDark dark:text-brandLight">
                    How It Works
                </h2>


                <p data-aos="fade-down" data-aos-duration="1000" data-aos-delay="100" className=" mb-4 text-[17px]  text-brandDark font-para dark:text-brandLight">Three simple steps to co-own your dream property</p>

                <button data-aos="fade-down" data-aos-duration="1000" data-aos-delay="100" className="px-3.5  rounded-full gap-4 pl-5 flex py-2.5 text-[16.5px] font-[450] items-center bg-brandGreen font-para">Contact Us<span className="bg-brandLight rounded-full px-1.5 py-1.5 text-brandDark"><ArrowUpRight className="size-5" /></span></button>

                <div className={`grid grid-cols-1 lg:grid-cols-2  w-full max-w-6xl z-50 relative mt-10`}>
                    {/* Left Steps */}
                    <div className="flex flex-col gap-4   justify-center ">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`  bg-[#040916] bg-gradient-to-b relative from-brandDark to-[#3b8f9586] dark:from-[#1a1a1a] dark:to-[#3b8f9586] w-[90%] overflow- cursor-pointer transition-all duration-300 ${activeIndex === index
                                    ? "border-none pr-14 w-[100%]  rounded-l-md   -mr-10 z-10"
                                    : " rounded-md"
                                    }`}
                            >

                                {activeIndex === index && <div className="w-10 h-10 absolute right-0 bottom-[100%] bg-brandDark dark:bg-[#1a1a1a]">
                                    <div className="w-full h-full  bg-brandLight dark:bg-brandDark rounded-br-[10px]"></div>
                                </div>

                                }

                                {activeIndex === index && <div className="w-14 h-14 absolute right-0 z-[999999] top-[100%] bg-[#214c54]">
                                    <div className="w-full h-full  bg-brandLight dark:bg-brandDark rounded-tr-[10px]"></div>
                                </div>}



                                <div className="px-6 py-6 ">

                                    <div className="flex justify-between items-center">
                                        <h3 className="text-[22px] font-head font-medium">{step.title}</h3>
                                        <ChevronDown
                                            className={`transition-transform border-[1.4px] border-[#ececec72] px-1 size-7 rounded-full duration-300 ${activeIndex === index ? "rotate-180" : ""
                                                }`}
                                        />
                                    </div>


                                    {activeIndex === index && (
                                        <p className="text-sm text-brandLight font-para mt-3 mb-1 leading-relaxed">{step.content}</p>
                                    )}


                                </div>
                            </div>
                        ))}
                    </div>

                    <div>
                        <div className="relative bg-gradient-to-b  from-brandDark to-[#3b8f9586] border-none px-10 bg-[#040916] dark:from-[#1a1a1a] dark:to-[#3b8f9586] rounded-2xl py-10  flex items-center justify-center overflow-hidden h-[400px]">
                            <img
                                src={steps[activeIndex].image}
                                alt="Step Visual"
                                className=" inset-0 w-[100%] h-[100%] rounded-md object-cover opacity-100"
                            />
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
};

export default WorkflowSteps;
