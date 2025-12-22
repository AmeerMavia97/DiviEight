import { ArrowUpRight, Bath, Bed, Heart, MapPin, Ruler, Users } from "lucide-react";


const PropertyCard = ({
    image,
    title,
    location,
    sharesLeft,
    pricePerShare,
    beds,
    baths,
    sqft,
    sharesAvailable,
    totalShares,
    wholePrice,
}) => {
    const progress = (sharesAvailable / totalShares) * 100;

    return (
        <div className=" overflow-hidden bg-brandLight dark:bg-[#fffcfc] rounded-[10px] border border-gray-200 dark:border-brandDark  shadow-md">
            {/* Image Section */}
            <div className="relative w-full h-64">
                <div className="relative rounded-[2px] h-[100%] before:absolute before:inset-0 before:bg-[#0000003e] before:rounded-[7px]">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h- h-[100%] object-cover"
                    />
                </div>

                {/* Shares Left Badge */}
                <div className="absolute font-para top-5 left-5 bg-brandGreen text-brandLight text-[13px] font-[500] px-4 py-1 rounded-full">
                    <p> {sharesLeft} shares left</p>
                </div>


                {/* Price Overlay */}
                <div className="absolute bottom-0 font-head w-full p-4 bg-gradient-to-t from-brandDark/60 to-transparent text-brandLight">
                    <h1 className="text-[33px] font-semibold">{pricePerShare}<span className="text-lg">/share</span></h1>
                </div>
            </div>

            {/* Card Content */}
            <div className="py-6 px-4 bg-brandLight dark:bg-[#292929]">
                {/* Title */}
                <h2 className="text-[27px] font-head font-semibold text-gray-900 dark:text-brandLight">{title}</h2>

                {/* Location */}
                <div className="text-gray-800 font-para dark:text-brandLight text-sm flex items-center gap-1 mt-2 ">
                    <MapPin className="w-4 h-4" /> {location}
                </div>

                {/* Property Details */}
                <div className="flex items-center gap-6 dark:text-brandLight text-gray-700 text-sm mb-1 mt-4">
                    <span className="flex items-center font-para gap-1"><Bed className="w-4 h-4" /> {beds}</span>
                    <span className="flex items-center font-para gap-1"><Bath className="w-4 h-4" /> {baths}</span>
                    <span className="flex items-center font-para gap-1"><Ruler className="w-4 h-4" /> {sqft} sqft</span>
                </div>

                {/* Shares Available */}
                <div className="mt-3.5">
                    <div className="flex font-para justify-between text-sm mb-1 dark:text-brandLight text-gray-800 font-[500]">
                        <span>Shares Available</span>
                        <span>{sharesAvailable}/{totalShares}</span>
                    </div>

                    <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-brandGreen rounded-full"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>

                {/* Whole Property Price */}
                <div className="flex justify-between items-center dark:text-brandLight  pt-3 text-gray-800 font-medium">
                    <span className="text-[15.5px] font-para font-semibold">Whole Property</span>
                    <span className="text-[18px] font-para font-semibold">{wholePrice}</span>
                </div>

                {/* Button */}
                 <button className="px-2 mt-4 font-para text-brandLight text-center justify-center rounded-full gap-2.5 pl-5 flex py-1.5 text-[15px] font-[450] items-center bg-brandGreen">View More <span className=" rounded-full px-1.5 py-1.5 text-brandLight"><ArrowUpRight className="size-5" /></span></button>
            </div>
        </div>
    );
};

export default PropertyCard;
