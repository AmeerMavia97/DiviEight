import { CalendarDays, Clock5, HousePlus, Pickaxe, Tag } from "lucide-react";
import React from "react";

const ListingOwnerInfo = () => {
    return (
        <>
            {/* PRICE SECTION  */}
            <div className="bg-[#f6f4f4be] rounded-xl px-6 py-5 w-full space-y-3">

                <div className="flex justify-between items-center pb-2">
                    <h1 className="font-head font-semibold text-[24px] flex items-center gap-2"><Tag size={38} className="bg-[#e5e2e2] rounded-[8px] px-2 py-2" />Price</h1>

                    <h1 className="font-head font-semibold text-[28px] tracking-[-1px]">$117,500</h1>
                </div>

                <div className="border-t-[1px] border-brandGrey2 pt-3 ">
                    <p className="font-head font-semibold text-[24px] flex items-center gap-2">Price / Share</p>
                    <p className="font-head font-semibold text-[24px] tracking-[-1px]">$100</p>
                </div>

                <div>
                    <div className="border-t-[1px] flex justify-between border-brandGrey2 items-center pt-3.5">
                        <p className="font-head font-[500] text-[16px] text-brandDark2 flex items-center gap-2">Est. Monthly Fee</p>
                        <p className="font-head font-[500] text-[18px] tracking-[-1px]">$100</p>
                    </div>
                    <div className="flex justify-between items-center -mt-1">
                        <p className="font-head font-[500] text-[16px] flex items-center gap-2">Shares Available
                        </p>
                        <p className="font-head font-[500] text-[18px] tracking-[-1px]">4 / 8</p>
                    </div>
                </div>

            </div>


            {/* OWNER INFO  */}

            <div className="bg-[#f6f4f4be] rounded-xl px-6 py-6 w-full space-y-2 mt-5">

                {/* Profile */}
                <div className="flex items-center gap-3 mb-4">
                    <img
                        src="https://www.newlista.com/assets/UnknowUser-Ovi5nVIQ.png"
                        alt="Alex Ripon"
                        className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                        <h3 className="text-[16px] font-semibold font-para text-brandDark">
                            Alex Ripon
                        </h3>
                        <p className="text-[12.5px] text-brandGrey2 font-para">
                            687 3rd Ave, New York, USA
                        </p>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="border-t-[1px] border-brandGrey">
                    <div className="flex justify-between border-b-[1px] border-brandGrey pt-3.5 pb-2.5 font-para text-[15px]" >
                        <span className="text-brandGrey2 font-[500]">Phone Number:</span>
                        <span className="font-medium text-brandDark">+1 123456789</span>
                    </div>
                    <div className="flex justify-between border-b-[1px] border-brandGrey pt-3.5 pb-2.5 font-para text-[15px]" >
                        <span className="text-brandGrey2 font-[500]">Email:</span>
                        <span className="font-medium text-brandDark">info@gmail.com</span>
                    </div>
                </div>

                {/* Button */}
                <button className="mt-5 w-full bg-brandGreen text-white py-3 rounded-lg font-para font-semibold text-sm  hover:bg-brandDark cursor-pointer transition">
                    View My Property
                </button>
            </div>

            <div className="bg-[#f6f4f4be] rounded-xl px-6 py-6 w-full space-y-2 mt-5">

                <div className="flex justify-between items-center pb-2">
                    <h1 className="font-head font-semibold text-[21px] flex items-center gap-2"><Clock5 size={38} className="bg-[#e5e2e2] rounded-[8px] px-2.5 py-2.5" />Inspection </h1>

                    <h1 className="font-para font-semibold text-[16px] ">By Appointment only.</h1>
                </div>

                <div className="flex flex-col mt-2">
                    <h1 className="text-brandGrey2 font-[500] font-para">Phone Number:</h1>
                    <h1 className="font-semibold font-para text-brandDark mt-0.5">Monday – Saturday | 9:00 AM – 6:00 PM</h1>
                </div>

                {/* Button */}
                <button className="mt-3.5 w-full bg-brandGreen text-white py-3 rounded-lg font-para font-semibold text-[14.5px] flex justify-center items-center gap-2  hover:bg-brandDark cursor-pointer transition">
                    <CalendarDays size={18} /> Schedule a Visit
                </button>
            </div>
            
        </>
    );
};

export default ListingOwnerInfo;
