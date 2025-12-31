import { BadgeCheck, Bath, Bed, FileChartPie, Heart, HousePlus, MapPin, Pickaxe, Share2, Tag } from 'lucide-react'
import React from 'react'


const propertyDetails = [
    { icon: <Bed size={17} className='text-brandGreen' />, label: "Bedrooms", value: "4 Beds" },
    { icon: <Bath size={17} className='text-brandGreen' />, label: "Bathrooms", value: "3 Bath" },
    { icon: <Pickaxe size={16} className='text-brandGreen' />, label: "Land Area", value: "500 sq.m" },
    { icon: <HousePlus size={17} className='text-brandGreen' />, label: "Building Size", value: "300 sq.m" },
    { icon: <Tag size={17} className='text-brandGreen' />, label: "Status", value: "For Sale" },
    { icon: <BadgeCheck size={17} className='text-brandGreen' />, label: "Availability", value: "Ready to Move" },
];
const propertyDetailss = [
    { icon: <Bed size={17} className='text-brandGreen' />, label: "Skiing", value: "4 Beds" },
    { icon: <Bath size={17} className='text-brandGreen' />, label: "Beach", value: "3 Bath" },
    { icon: <Pickaxe size={16} className='text-brandGreen' />, label: "Golf", value: "500 sq.m" },
    { icon: <HousePlus size={17} className='text-brandGreen' />, label: "Hiking", value: "300 sq.m" },
    { icon: <Tag size={17} className='text-brandGreen' />, label: "Lake", value: "For Sale" },
    { icon: <BadgeCheck size={17} className='text-brandGreen' />, label: "Mountain", value: "Ready to Move" },
    { icon: <BadgeCheck size={17} className='text-brandGreen' />, label: "Fishing", value: "Ready to Move" },
    { icon: <BadgeCheck size={17} className='text-brandGreen' />, label: "Wine Country", value: "Ready to Move" },
];




const ListingInfo = () => {
    return (
        <>
            <div className='bg-[#f6f4f4be] rounded-xl px-6 py-4 w-full'>

                <div className='pb-6'>
                    <div className='flex justify-between items-center'>
                        <h1 className='font-head font-semibold text-[35px]'>
                            luxurious Villa
                        </h1>

                        <span className='flex gap-3'>
                            <span className='border px-2 py-2 rounded-lg border-[#d0cdcd]'>
                                <Heart size={20} />
                            </span>
                            <span className='border px-2 py-2 rounded-lg border-[#d0cdcd]'>
                                <Share2 size={20} />
                            </span>

                        </span>
                    </div>

                    <div className='flex gap-1.5 text-[16px] items-center mt-2 font-para'>
                        <MapPin size={20} /> Austin, TX
                    </div>

                    <p className='text-[14.5px] mt-4 font-para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus eos eum corrupti odit reiciendis, nobis omnis beatae a harum. Quas minima blanditiis similique quis vitae sequi magni, placeat voluptatem tempore optio in, ipsa earum fugiat expedita quia beatae inventore officia quam tempora dolore eligendi! Repellat reiciendis nisi alias provident aperiam.</p>
                </div>

                <div className='border-t-[1.5px] border-[#e5e5e5] py-6'>
                    <h1 className='font-head font-semibold text-[23px]'>
                        Property Details
                    </h1>

                    <div className="flex flex-wrap gap-3 mt-3">
                        {propertyDetails.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 px-3.5 font-para py-[8.5px] text-[14px] bg-brandLight font-[500] rounded-full"
                            >
                                <span className="text-brandDark">{item.icon}</span>
                                <span className="text-brandDark font-semibold">
                                    {item.label}:
                                </span>
                                <span className=" text-brandDark">
                                    {item.value}
                                </span>
                            </div>
                        ))}
                    </div>

                </div>

                <div className='border-t-[1.5px] border-[#e5e5e5] py-6'>
                    <h1 className='font-head font-semibold text-[23px]'>
                        Nearby Recreation
                    </h1>

                    <div className="flex flex-wrap gap-3 mt-3">
                        {propertyDetailss.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 px-4 font-para py-[8.5px] text-[14px] bg-brandLight font-[500] rounded-full"
                            >
                                <span className="text-brandDark">{item.icon}</span>
                                <span className="text-brandDark">
                                    {item.label}
                                </span>

                            </div>
                        ))}
                    </div>

                </div>

                <div>
                    <iframe
                        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46830151.11795828!2d-119.8093025!3d44.24236485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2s!4v1767015859682!5m2!1sen!2s`}
                        className="w-full h-[220px] sm:h-[300px] md:h-[250px] lg:h-[185px] rounded-[8px]"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </>
    )
}

export default ListingInfo