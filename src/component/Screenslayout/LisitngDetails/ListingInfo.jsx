import { Heart, MapPin, Share2 } from 'lucide-react'
import React from 'react'

const ListingInfo = () => {
  return (
    <>
    <div className='bg-[#f6f4f4be] rounded-xl px-6 py-4 w-full'>

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
    </>
  )
}

export default ListingInfo