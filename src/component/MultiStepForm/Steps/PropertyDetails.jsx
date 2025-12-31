export default function PropertyDetails({ register, errors }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="label">Property Title</label>
        <input
          {...register("title", { required: "Title is required" })}
          className="input"
        />
        {errors.title && <p className="error">{errors.title.message}</p>}
      </div>

      <div>
        <label className="label">Location</label>
        <input
          {...register("location", { required: "Location is required" })}
          className="input"
        />
      </div>
    </div>
  );
}
