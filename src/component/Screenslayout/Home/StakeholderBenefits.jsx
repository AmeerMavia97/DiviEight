import { Users, Building2, Briefcase, Check, ArrowRight } from "lucide-react";
import ForBuyers from '@/assets/Banners/ForBuyer.jpg'
import ForSeller from '@/assets/Banners/ForSeller.jpg'
import ForAgent from '@/assets/Banners/ForAgent.jpg'
import IntroBlock from "@/component/layout/IntroBlock/IntroBlock";

const benefits = [
    {
        icon: Users,
        title: "For Buyers",
        description: "Own property sooner and smarter — match with financially verified co-buyers, stay anonymous until ready, and purchase through digital closing.",
        features: [
            "Match with verified co-buyers",
            "Stay anonymous until ready",
            "Digital closing process",
            "Lower entry barrier",
        ],
        cta: "Start as Buyer",
        highlighted: false,
        img: ForBuyers
    },
    {
        icon: Building2,
        title: "For Sellers",
        description: "Receive offers from pre-qualified buyer groups, reduce cancellations, and get full payout backed by ledger-verified closing.",
        features: [
            "Pre-qualified buyer groups",
            "Reduced cancellation risk",
            "Full verified payouts",
            "Faster closing times",
        ],
        cta: "List Your Property",
        highlighted: true,
        img: ForSeller
    },
    {
        icon: Briefcase,
        title: "For Agents",
        description: "Get matched with warm buyer groups ready to transact — no cold leads, no commission disputes, guaranteed payouts.",
        features: [
            "Warm buyer groups",
            "No cold leads",
            "Commission guaranteed",
            "Streamlined workflow",
        ],
        cta: "Join as Agent",
        highlighted: false,
        img: ForAgent
    },
];






const StakeholderBenefits = () => {
    return (
        <section id="benefits" className="pt-20 relative bg-brandLight dark:bg-brandDark">
            {/* Background accent */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-20 relative">
                
                <IntroBlock
                    badge="Benefits"
                    title="Built to Make Real Estate Work for"
                    highlight="Every Party"
                    
                />


                {/* Benefits Grid */}
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mt-10">
                    <div className="bg-[#47aeb530] w-[450px] left-[35%] top-[40%] absolute h-[450px] rounded-2xl blur-3xl"></div>
                    {benefits.map((benefit, index) => (
                        <div
                            key={benefit.title} data-aos-offset="10"
                            data-aos="fade-down" data-aos-duration="1000" data-aos-delay="600"
                            className={`relative rounded-3xl  transition-all duration-500 hover:-translate-y-2 h-max min-h-[450px] ${benefit.highlighted
                                ? "bg-[#131313] "
                                : "bg-[#131313]"
                                }`}
                        >
                            <div className="relative rounded-[7px]  h-[10%] before:absolute before:inset-0 before:bg-[#0000004c] before:rounded-[7px]">
                                <img className="rounded-t-xl  h-[190px] w-full object-cover" src={benefit.img} alt="" />
                            </div>

                            <div className="px-6 pb-10">
                                <div className={`w-14 h-14 -translate-y-7 rounded-2xl flex items-center justify-center  mb-0 ${benefit.highlighted ? "bg-brandGreen shadow-button" : "bg-brandGreen"
                                    }`}>
                                    <benefit.icon className={`w-6 h-6 text-brandLight`} />
                                </div>

                                <h3 className="font-heading text-[28px] font-[700] mb-4 -mt-3 text-brandLight font-head">
                                    {benefit.title}
                                </h3>

                                <p className="text-[#e4e3e3] font-para text-[14px] mb-6 leading-[20px] ">
                                    {benefit.description}
                                </p>

                                <ul className="space-y-3 mb-8">
                                    {benefit.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-3 text-sm">
                                            <div className="w-5 h-5 rounded-full bg-[#00d5c031] flex items-center justify-center flex-shrink-0">
                                                <Check className="w-3 h-3 text-[#38b5be]" />
                                            </div>
                                            <span className="text-brandLight font-para">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button

                                    className="w-full group bg-brandGreen rounded-full flex gap-2 items-center py-2.5  justify-center font-[500] font-para text-brandLight text-[16px]"
                                >
                                    {benefit.cta}
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StakeholderBenefits;
