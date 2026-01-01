export function CheckboxCard({
  label,
  value,
  selectedValues = [],
  onChange,
}) {
  const checked = selectedValues.includes(value);

  const toggle = () => {
    if (checked) {
      onChange(selectedValues.filter((v) => v !== value));
    } else {
      onChange([...selectedValues, value]);
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className={`
        flex items-center gap-4 w-full px-5 py-4 rounded-xl border transition
        ${checked
          ? "border-brandGreen bg-brandGreen/5"
          : "border-[#dadadacc] bg-white"}
      `}
    >
      <div
        className={`
          w-5 h-5 rounded-full border flex items-center justify-center
          ${checked ? "border-brandGreen" : "border-brandGrey2"}
        `}
      >
        {checked && (
          <div className="w-2.5 h-2.5 rounded-full bg-brandGreen" />
        )}
      </div>

      <span className="font-para text-[15.5px] font-[500] text-brandDark">
        {label}
      </span>
    </button>
  );
}
