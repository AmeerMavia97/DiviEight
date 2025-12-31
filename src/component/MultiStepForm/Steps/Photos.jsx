export default function Photos({ register }) {
  return (
    <div>
      <input
        type="file"
        multiple
        {...register("photos")}
        className="input"
      />
    </div>
  );
}
