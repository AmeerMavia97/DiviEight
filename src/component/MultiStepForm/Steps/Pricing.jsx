import { Input } from "@/component/ui/Input";
import Select from "@/component/ui/Select";
import { Textarea } from "@/component/ui/TextArea";


function Pricing({ register, errors }) {
  return (
    <>

      <section className="mt-5">
        <h1 className="text-brandDark font-head text-3xl font-semibold mb-4">Pricing</h1>
        <div className="flex flex-col gap-5">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Whole Property Value"
              name="property_title"
              placeholder="Enter Whole Property Value"
              register={register}
              validation={{ required: "Whole Property Value is required" }}
              errors={errors}
              accent="!bg-[#dbe5e540]"
            />

            <Select
              label="Number of Shares"
              name="property_type"
              register={register}
              accent="!bg-[#dbe5e540]"
              validation={{ required: "Number of Shares is required" }}
              errors={errors}
              options={[
                { label: "8 Shares (1/8 each)", value: "2" },
                { label: "4 Shares (1/4 each)", value: "3" },
              ]}
            />

              <Input
              label="Price per 1/8 Share"
              name="property_title"
              placeholder="$50,000"
              register={register}
              validation={{ required: "Street Address is required" }}
              errors={errors}
              accent="!bg-[#dbe5e540]"
            />

            <Input
              label="Est. Monthly Fee"
              name="property_title"
              placeholder="$5,000"
              register={register}
              validation={{ required: "Est. Monthly Fee is required" }}
              errors={errors}
              accent="!bg-[#dbe5e540]"
            />



          </div>
        </div>
      </section>

    </>
  );
}

export default Pricing
