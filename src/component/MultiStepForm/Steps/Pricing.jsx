export default function Pricing({ register }) {
  return (
    <div className="space-y-4">
      <input {...register("price")} placeholder="Price" className="input" />
      <input {...register("discount")} placeholder="Discount" className="input" />
    </div>
  );
}
