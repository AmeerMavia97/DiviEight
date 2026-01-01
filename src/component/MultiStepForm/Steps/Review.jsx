
import image from '@/assets/Banners/AboutUsImage1.avif'
import { Checkbox } from '@/component/ui/Checkbox';
import {  Building, BadgeCheck, Bath, Bed, FileChartPie, Heart, HousePlus, MapPin, Pickaxe, Share2, Tag } from 'lucide-react'



export default function Review({ watch, register }) {

  const details = [
    { label: "Name", value: "Proident hic qui nu" },
    { label: "Type", value: "School Building" },
    { label: "Whole Property Value", value: "$34,543.00" },
    { label: "Number of Shares", value: "8 Shares (1/8 each)" },
    { label: "Price per 1/8 Share", value: "$34,000" },
    { label: "Est. Monthly Fee", value: "$4300" },
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


  return (
    <>
      <section>
        <h1 className="text-brandDark font-head text-3xl font-semibold mb-1">Preview Property</h1>
        <p className="font-para mb-7">Review your listing before publishing</p>

        <div className='flex gap-5 '>
          <div className='w-[60%]'>
            <div>
              <img src={image} alt="" className='rounded-lg h-[340px] w-full object-cover' />
            </div>
            <div>
              <div className="mt-14 space-y-0.5">
                {details.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-start"
                  >
                    <span className="text-[18.5px] font-semibold font-head text-gray-900">
                      {item.label}:
                    </span>
                    <span className="text-[15px] font-para text-gray-800">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

            </div>

            <div className='mt-10'>
              <span className="text-[22px] font-semibold block font-head text-gray-900">
                Description
              </span>
              <span className="text-[14px] leading-[19px] font-para text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum maiores quidem, nemo accusantium eius eaque iure qui magnam nostrum consectetur. Reiciendis quae suscipit, dolorum maxime non fugiat neque iure impedit officiis nemo tempore voluptas sit cupiditate repellat molestias error, quibusdam natus, alias perspiciatis ex cumque! Doloremque molestias maxime recusandae dignissimos.
              </span>
            </div>


          </div>
          <div className='w-[40%]'>
            <div className=' grid grid-cols-2 gap-4 h-[340px]'>
              <img src={image} alt="" className='rounded-lg w-full h-full object-cover' />
              <img src={image} alt="" className='rounded-lg w-full h-full object-cover' />
              <img src={image} alt="" className='rounded-lg w-full h-full object-cover' />
              <img src={image} alt="" className='rounded-lg w-full h-full object-cover' />
            </div>

            <div className='mt-6'>
              <div className='flex gap-1.5 text-[15px] items-center mt-2 font-para mb-2'>
                <MapPin size={17} /> Austin, TX
              </div>
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46830151.11795828!2d-119.8093025!3d44.24236485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2s!4v1767015859682!5m2!1sen!2s`}
                className="w-full h-[220px] sm:h-[300px] md:h-[250px] lg:h-[185px] rounded-[8px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className='mt-8'>
              <span className="text-[22px] font-semibold block font-head text-gray-900">
                Key Features And Amenities
              </span>
              <div className="flex flex-wrap gap-3 mt-3">
                {propertyDetailss.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 font-para py-[7.5px] text-[14px] bg-[#f5f5f5] font-[500] rounded-full"
                  >
                    <span className="text-brandDark">{item.icon}</span>
                    <span className="text-brandDark">
                      {item.label}
                    </span>

                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

        <div className='bg-[#f5f5f5] px-5 py-5 rounded-[8px] mt-10'>
          <span className="text-[20px] font-semibold flex items-center gap-1 font-head text-gray-900">
            <Building /> Listing Verification
          </span>
          <div className='ml-1 mt-3 space-y-2'>
            <Checkbox
              key={"item"}
              label={"I confirm that all information provided is accurate and complete"}
              value={"item"}
              name="amenities"
              register={register}
            // errors={errors}
            />
            <Checkbox
              key={"item"}
              label={"I am authorized to list this property"}
              value={"item"}
              name="amenities"
              register={register}
            // errors={errors}
            />
          </div>
        </div>

      </section>
    </>
  );
}
