import PropertyGallery from '@/component/Screenslayout/LisitngDetails/ListingGallery'
import React from 'react'

import Image from '@/assets/Banners/AboutUsImage2.webp'
import ListingInfo from '@/component/Screenslayout/LisitngDetails/ListingInfo';
import { Dot } from 'lucide-react';
import ListingOwnerInfo from '@/component/Screenslayout/LisitngDetails/ListingOwnerInfo';
import PropertyCard from '@/component/Cards/PropertyCard';


const images = [
  Image, Image, Image, Image,
];

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



const ListingDetails = () => {
  return (
    <>
      <section className='px-12 pt-32 pb-20'>

        <div className='mb-5 pl-1 font-para font-[500] text-[15.5px]'>
          <ul className='flex'>
            <li>Home</li>
            <li><Dot /></li>
            <li>Product</li>
            <li><Dot /></li>
            <li>luxurious Villa</li>
          </ul>
        </div>


        <PropertyGallery images={images}></PropertyGallery>

        <div className='flex mt-5 gap-6 '>
          <div className='w-[62%]'>
            <ListingInfo />
          </div>
          <div className='w-[36%]'>
            <ListingOwnerInfo></ListingOwnerInfo>
          </div>
        </div>

        <div className='pt-16'>
          <h1
            data-aos="fade-up"
            data-aos-delay="500"
            className="text-[36px] sm:text-[40px] lg:text-[40px] leading-[42px] lg:leading-[48px] font-bold font-head text-brandDark dark:text-brandLight"
          >
            Other Properties you might like
          </h1>
          <div>
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
          </div>
        </div>
      </section>
    </>
  )
}

export default ListingDetails