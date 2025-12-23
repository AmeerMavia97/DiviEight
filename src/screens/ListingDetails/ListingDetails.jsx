import PropertyGallery from '@/component/Screenslayout/LisitngDetails/ListingGallery'
import React from 'react'

import Image from '@/assets/Banners/AboutUsImage2.webp'
import ListingInfo from '@/component/Screenslayout/LisitngDetails/ListingInfo';
import { Dot } from 'lucide-react';
import ListingOwnerInfo from '@/component/Screenslayout/LisitngDetails/ListingOwnerInfo';


const images = [
    Image, Image, Image, Image, 
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
                <ListingInfo/>
            </div>
            <div className='w-[36%]'>
              <ListingOwnerInfo></ListingOwnerInfo>
            </div>
        </div>
      </section>
    </>
  )
}

export default ListingDetails