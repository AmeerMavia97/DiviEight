import { Check } from "lucide-react";

export function Checkbox({ label, value, register, name }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer select-none">
      {/* Peer must be first */}
      <input
        type="checkbox"
        value={value}
        {...register(name)}
        className="peer hidden"
      />

      <span
        className="
          w-4.5 h-4.5 rounded-[2px]
          border border-brandDark
          flex items-center justify-center
          transition
          peer-checked:bg-brandGreen
          peer-checked:border-brandGreen
          [&>svg]:opacity-0
          peer-checked:[&>svg]:opacity-100
        "
      >
        <Check strokeWidth={3} className="w-3.5 h-3.5 text-brandLight transition" />
      </span>

      {/* Label */}
      <span className="font-para text-[15.5px] font-[500] text-brandDark">
        {label}
      </span>
    </label>
  );
}
