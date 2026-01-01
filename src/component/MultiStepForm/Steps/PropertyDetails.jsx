import { Input } from "@/component/ui/Input";
import Select from "@/component/ui/Select";
import { Textarea } from "@/component/ui/TextArea";


function PropertyDetails({ register, errors }) {
  return (
    <>

      <section>

        <h1 className="text-brandDark font-head text-3xl font-semibold mb-7">Property Details</h1>
        <div className="flex flex-col gap-5">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Property Title"
              name="property_title"
              placeholder="Enter Property Title"
              register={register}
              validation={{ required: "Property title is required" }}
              errors={errors}
              accent="!bg-[#dbe5e540]"
            />

            <Select
              label="Property Type"
              name="property_type"
              register={register}
              accent="!bg-[#dbe5e540]"
              validation={{ required: "Property Type is required" }}
              errors={errors}
              options={[
                { label: "Single Family", value: "2" },
                { label: "Condo", value: "3" },
                { label: "Town Home", value: "4" },
                { label: "Others", value: "4" },
              ]}
            />



          </div>

          <Textarea
            label="Description"
            name="message"
            placeholder="Write your Description..."
            register={register}
            rows="6"
            accent="!bg-[#dbe5e540]"
          />


          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Input
              label="Street Address"
              name="property_title"
              placeholder="Enter Street Address"
              register={register}
              validation={{ required: "Street Address is required" }}
              errors={errors}
              accent="!bg-[#dbe5e540]"
            />

            <Input
              label="City"
              name="property_title"
              placeholder="Enter City"
              register={register}
              validation={{ required: "City is required" }}
              errors={errors}
              accent="!bg-[#dbe5e540]"
            />


            <Select
              label="State"
              name="property_type"
              register={register}
              validation={{ required: "State is required" }}
              errors={errors}
              accent="!bg-[#dbe5e540]"
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
              errors={errors}
              accent="!bg-[#dbe5e540]"
            />
          </div>
        </div>
      </section>

    </>
  );
}

export default PropertyDetails
