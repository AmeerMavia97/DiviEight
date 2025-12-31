export default function FeaturesAmenities({ register }) {
  return (
    <div className="space-y-4">
      <input {...register("bedrooms")} placeholder="Bedrooms" className="input" />
      <input {...register("bathrooms")} placeholder="Bathrooms" className="input" />
      <input {...register("amenities")} placeholder="Amenities (comma separated)" className="input" />
    </div>
  );
}
