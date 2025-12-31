import { Eye, DollarSign, MessageSquare, FileText } from "lucide-react";

export default function StatsCard({
    title,
    value,
    subText,
    icon: Icon,
    accent = "bg-teal-500",
    positive = true,
}) {
    return (
        <div className={`relative rounded-2xl group px-4 py-6.5  border border-[#e5e5e5] cursor-pointer  overflow-hidden ${positive ? "bg-brandLight" : "bg-brandGreen"}`}>

            {/* Background circle */}
            <div className={`absolute -top-8  -right-10 w-28 h-28 group-hover:w-36 group-hover:h-36 transition-all  rounded-full ${positive ? "bg-teal-50 " : "bg-[#efefef8e] "}`} />

            {/* Content */}
            <div className="relative z-10 flex justify-between items-start">
                <div className="flex flex-col justify-between">
                    <p className={`${positive ? "text-brandDark2" : "text-brandLight"} font-[500] text-[13.5px] font-para`}>{title}</p>
                    <h2 className={`${positive ? "text-brandDark2" : "text-brandLight"} text-[35px] tracking-[-1.1px] font-semibold mt-2.5 font-head `}>
                        {value}
                    </h2>
                    <p
                        className={`mt-2 text-[13.5px] font-para ${positive ? "text-brandGreen" : "text-brandLight"
                            }`}
                    >
                        {subText}
                    </p>
                </div>

                {/* Icon */}
                <div
                    className={` px-3.5 py-[14px] flex items-center justify-center rounded-xl bg-[#e3f2f3]   group-hover:bg-brandGreen`}
                >
                    <DollarSign className="text-brandGreen  group-hover:text-brandLight" size={24} />
                </div>
            </div>
        </div>
    );
}
