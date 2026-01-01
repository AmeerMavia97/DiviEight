import Image from '@/assets/Banners/InfoBannerImage.webp'
import { Input } from '@/component/ui/Input';
import Select from '@/component/ui/Select';
import { MapPin } from 'lucide-react';
export default function AccountInfoSection({ form }) {
  const { register } = form;

  return (
    <>

      <div className=" space-y-4 mt-10">

        <div className='grid grid-cols-2 gap-5 '>
          <Input
            label="First Name"
            name="firstName"
            placeholder="Enter First Name"
            register={register}
            validation={{ required: "First name is required" }}
            // errors={errors}
            accent={"!bg-[#f3f4f6]"}
          />

          <Input
            label="Last Name"
            name="lastName"
            placeholder="Enter Last Name"
            register={register}
            validation={{ required: "Last name is required" }}
            // errors={errors}
            accent={"!bg-[#f3f4f6]"}

          />
        </div>

        <div>
          <Input
            label="Email"
            name="firstName"
            placeholder="Enter Email"
            register={register}
            validation={{ required: "Email is required" }}
            // errors={errors}
            accent={"!bg-[#f3f4f6]"}
          />
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <Input
              label="Street Address"
              name="property_title"
              placeholder="Enter Street Address"
              register={register}
              validation={{ required: "Street Address is required" }}
              // errors={errors}
             accent={"!bg-[#f3f4f6]"}
            />

            <Input
              label="City"
              name="property_title"
              placeholder="Enter City"
              register={register}
              validation={{ required: "City is required" }}
              // errors={errors}
              accent={"!bg-[#f3f4f6]"}
            />


            <Select
              label="State"
              name="property_type"
              register={register}
              validation={{ required: "State is required" }}
              // errors={errors}
              accent={"!bg-[#f3f4f6]"}
              options={[
                { label: "California", value: "2" },
                { label: "Colorado", value: "3" },
                { label: "Florida", value: "4" },
                { label: "Montana", value: "4" },
              ]}
            />

            <Input
              label="Zip Code"
              name="property_title"
              placeholder="Enter Zip Code"
              register={register}
              type="number"
              validation={{ required: "zip code is required" }}
              // errors={errors}
              accent={"!bg-[#f3f4f6]"}
            />
          </div>
      </div>
    </>
  );
}
