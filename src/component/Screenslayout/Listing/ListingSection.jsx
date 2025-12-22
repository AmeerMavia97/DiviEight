import PropertyCard from '@/component/Cards/PropertyCard';
import React from 'react'
import CategoryFilter from './CategoryFilter';


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



const ListingSection = () => {
    return (
        <>
            <section className='px-10 pt-14 pb-28'>


                <CategoryFilter></CategoryFilter>

                
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-7">
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
            </section>
        </>
    )
}

export default ListingSection