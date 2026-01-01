import { Checkbox } from "@/component/ui/checkbox";

const amenities = [
  "Private Pool",
  "Hot Tub",
  "Mountain Views",
  "Ocean Views",
  "Gourmet Kitchen",
  "Home Theater",
  "Wine Cellar",
  "Fitness Room",
  "Smart Home",
  "Fireplace",
  "Garage",
  "Outdoor Kitchen",
];
const recreation = [
  "Skiing",
  "Beach",
  "Golf",
  "Hiking",
  "Lake",
  "Mountain",
  "Fishing",
  "Wine Country",
  "Shopping",
  "Fine Dining",
  "National Parks",
  "Water Sports"
]

export default function FeaturesAmenities({ register, control }) {
  return (

    <>

      <h1 className="text-brandDark font-head text-3xl font-semibold mb-7">Key Features & Amenities</h1>
      <div className="mt-4">
        <h3 className="text-[20px] font-semibold tracking-[-0.3px] font-head mb-0">
          Property Amenities
        </h3>
        <p className="text-brandGrey2 text-[14px] mb-3.5 font-para">Select all that apply</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-4 gap-x-10">
          {amenities.map((item) => (
            <Checkbox
              key={item}
              label={item}
              value={item}
              name="amenities"
              register={register}
            // errors={errors}
            />
          ))}
        </div>
      </div>
      <div className="mt-10 mb-12">
        <h3 className="text-[20px] font-semibold tracking-[-0.3px] font-head ">
          Nearby Recreation
        </h3>
        <p className="text-brandGrey2 text-[14px] mb-3.5 font-para">What activities are nearby?</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-4 gap-x-10 ">
          {recreation.map((item) => (
            <Checkbox
              key={item}
              label={item}
              value={item}
              name="amenities"
              register={register}
            // errors={errors}
            />
          ))}
        </div>
      </div>
    </>
  );
}
