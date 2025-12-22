import { Shield, Users, Compass, Link2, Crown } from "lucide-react";
import financial from "@/assets/Banners/financial.jpg"
import Intelligence from "@/assets/Banners/Intelligence.jpg"
import Agent from "@/assets/Banners/Agent.jpg"
import Immutable from "@/assets/Banners/Immutable.jpg"
import IntroBlock from "@/component/layout/IntroBlock/IntroBlock";
// import "@/components/landing/flip.css"


const features = [
    {
        img: financial,
        icon: Shield,
        title: "Financial Verification",
        tag: "DS-4",
        description: "Every buyer is affordability-verified before matching, ensuring serious and qualified co-buyers.",
    },
    {
        img: Intelligence,
        icon: Users,
        title: "Intelligent Co-Buyer Matching",
        tag: "CM²",
        description: "Proprietary algorithm ensures compatibility and commitment between all parties.",
    },
    {
        img: Agent,
        icon: Compass,
        title: "Agent-Guided Journey",
        tag: "CM⁷",
        description: "Vetted local agents manage touring, offers & closing with expertise and care.",
    },
    {
        img: Immutable,
        icon: Link2,
        title: "Immutable Ledger",
        tag: "CM⁹",
        description: "Every deal and payout secured on blockchain for trust and transparency.",
    },
];

const WhyUsSection = () => {



    return (
        <section className="pt-0 pb-28 relative bg-[#fff] dark:bg-brandDark overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
            </div>

            <div className="container mx-auto px-6 lg:px-16 relative">
                {/* Section Header */}

                <IntroBlock
                    badge="Why Us"
                    title="Why Thousands Are Turning to"
                    highlight="Co-Ownership"
                    description="Traditional real estate is harder than ever — but smart co-buying makes home ownership achievable, secure, and transparent."

                />
                {/* <div className="text-center max-w-3xl mx-auto mb-10">
                    <div data-aos="fade-down" data-aos-duration="1000">
                        <span className="text-brandDark dark:text-brandLight font-semibold text-sm uppercase tracking-wider"></span>
                    </div>
                    <h1 data-aos-offset="10" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300" className="font-heading text-brandDark dark:text-brandLight text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
                        {" "}
                        <span className="text-brandGreen"></span>
                    </h1>
                    <p data-aos-offset="10" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500" className="text-[15px] text-brandDark dark:text-brandLight">

                    </p>
                </div> */}


                <section className="our-porject mt-10">
                    <div className="containers px-0 pt-0">
                        <div className="!flex gap-6">
                            {features.map((feature, index) => (
                                <div key={index} className="content-inner
                                     text-brandLight relative w-[30%] !rounded-[20px] [transform-style:preserve-3d] [perspective:1000px] [backface-visibility:hidden] transition [transition-timing-function:cubic-bezier(0.68,-0. 55)]
                                    "
                                >
                                    <div className="content-front ">
                                        <div
                                            className=" [transform-style:preserve-3d] rounded-[20px] [backface-visibility:hidden] w-full  min-h-[400px] "
                                        >
                                            <div style={{ backgroundImage: `url(${feature.img})` }} className="absolute top-0 left-0 w-[100%] h-[100%] rounded-[20px]  bg-center bg-cover "></div>


                                            <div className="absolute inset-0 bg-gradient-to-t from-brandDark/80 via-brandDark/40 to-transparent rounded-[20px] " />

                                            <div className="absolute bottom-6 font-head font-[600] left-5 text-brandLight">
                                                <h1 className="text-[27px] leading-[32px] w-[80%]">{feature.title}</h1>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="content-back absolute  left-0 top-0  w-[100%] h-[100%]  z-0  [transform:rotateY(180deg)]  bg-brandGreen">
                                        <div className="cf-inner">
                                            <div className=" inner

"
                                            >
                                                <p className="bg-brandLight px-4 py-4 rounded-full w-max"><feature.icon className=" text-brandGreen w-6 h-6" /></p>
                                                <h1 className="text-[27px] font-head font-[600] leading-[32px] w-[80%]">{feature.title}</h1>
                                                <p className="text-[14px] font-para font-[400] leading-[22.7px]">{feature.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default WhyUsSection;
