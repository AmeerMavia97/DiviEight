import PropertyCard from "@/component/Cards/PropertyCard";
import IntroBlock from "@/component/layout/IntroBlock/IntroBlock";
import { MapPin, Users, Bed, Bath, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const properties = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
        title: "Modern Townhouse",
        location: "Austin, TX",
        price: "$425,000",
        beds: 3,
        baths: 2,
        coOwners: 2,
        spotsLeft: 1,
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
        title: "Luxury Condo",
        location: "Miami, FL",
        price: "$890,000",
        beds: 2,
        baths: 2,
        coOwners: 3,
        spotsLeft: 1,
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
        title: "Family Home",
        location: "Denver, CO",
        price: "$550,000",
        beds: 4,
        baths: 3,
        coOwners: 2,
        spotsLeft: 2,
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
        title: "Beach Villa",
        location: "San Diego, CA",
        price: "$1,200,000",
        beds: 5,
        baths: 4,
        coOwners: 4,
        spotsLeft: 2,
    },
];

const PropertyListings = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    return (
        <section id="properties" className="py-32 relative bg-[#fff]  dark:bg-brandDark">
            <div className="container mx-auto px-6 lg:px-11">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 ">

                    <IntroBlock
                        badge="Properties"
                        title={<>
                            Explore Properties Ideal <br /> for
                        </>}
                        highlight="Co-Ownership"
                        description="Browse co-ownership listings ready for joint purchase opportunities."
                        align="left"
                    />

                    <div className="flex items-center gap-3 ">
                        <button
                            className="w-12 h-12 rounded-full border-[1.5px] border-brandGreen flex items-center justify-center hover:bg-secondary transition-colors"
                            onClick={() => setScrollPosition(Math.max(0, scrollPosition - 1))}
                        >
                            <ChevronLeft className="w-5 h-5 text-[#000] dark:text-brandLight" />
                        </button>
                        <button
                            className="w-12 h-12 rounded-full border-[1.5px] border-brandGreen flex items-center justify-center hover:bg-secondary transition-colors"
                            onClick={() => setScrollPosition(Math.min(properties.length - 1, scrollPosition + 1))}
                        >
                            <ChevronRight className="w-5 h-5 text-[#000] dark:text-brandLight" />
                        </button>
                    </div>
                </div>

                {/* Property Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                    {properties.map((property, index) => (

                        <div
                            key={property.id}

                        >
                            <PropertyCard
                                image={property.image}
                                title={property.title}
                                location={property.location}
                                sharesLeft={5}
                                pricePerShare="$562,500"
                                beds={5}
                                baths={4.5}
                                sqft={4200}
                                sharesAvailable={5}
                                totalShares={8}
                                wholePrice="$4,500,000"
                            />
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center flex justify-center mt-12">

                    <button className="px-2 rounded-full gap-4 pl-5 flex py-2.5 text-[15px] font-[450] items-center bg-brandGreen w-max text-brandLight font-para">Browse All Properties <span className="bg-brandLight rounded-full px-1.5 py-1.5 text-brandDark"><ArrowRight className="size-5" /></span></button>
                </div>
            </div>
        </section>
    );
};

export default PropertyListings;
