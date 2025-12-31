import { Bell, Search } from 'lucide-react'
import React from 'react'

const DashboardHeader = ({title , description}) => {
    return (
        <>
            <div className="w-full flex items-center justify-between">
                {/* Left */}
                <div className='mt-1'>
                    <h1 className='text-brandDark font-head text-[40px] leading-[48px] font-semibold'> {title}</h1>
                    <p className="text-[14.5px] font-para font-[500] text-brandDark">{description}</p>
                </div>


                {/* Right */}
                <div className="flex items-center gap-4">
                    {/* Search */}
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search"
                            className="pl-10 pr-8 py-[13px]  text-sm bg-[#f5f5f5] focus:outline-none focus:ring-2  focus:ring-gray-300 placeholder:text-brandDark font-para rounded-[8px]"
                        />
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-brandDark "><Search size={20} className='text-brandDark' /></span>
                    </div>


                    {/* Notification */}
                    <button className="relative p-2 flex items-center justify-center rounded-full border-[#8d878777] border-[1px]">
                        <Bell size={21} className="text-[#000000]" />

                        {/* Notification Count */}
                        <span className="absolute top-0 font-para right-0 min-w-[16px] h-4 bg-brandGreen text-white text-[12px] font-[500] rounded-full flex items-center justify-center px-[2px]">
                            3
                        </span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default DashboardHeader