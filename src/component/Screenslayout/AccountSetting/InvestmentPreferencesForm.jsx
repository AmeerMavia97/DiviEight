export default function InvestmentPreferencesSection({ form }) {
  const { register } = form;

  return (
    <div className="max-w-xl space-y-6">
      <h2 className="text-xl font-semibold">
        Investment Preferences
      </h2>

      <select
        {...register("risk")}
        className="w-full p-3 rounded-lg bg-gray-100"
      >
        <option value="">Risk Level</option>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <select
        {...register("investmentType")}
        className="w-full p-3 rounded-lg bg-gray-100"
      >
        <option value="">Investment Type</option>
        <option>Commercial</option>
        <option>Residential</option>
      </select>
    </div>
  );
}
