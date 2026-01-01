import { ChevronDown } from "lucide-react";
import React from "react";

const Select = ({
  label,
  name,
  options = [],
  register,
  validation,
  errors,
  placeholder = "Select an option",
  disabled = false,
  accent
}) => {
  const errorMessage = errors?.[name]?.message;

  return (
    <div className="w-full relative">
      {label && (
        <label className="font-para font-semibold text-[15.5px] tracking-[0.1px]">
          {label}
        </label>
      )}

      <select
        {...register(name, validation)}
        disabled={disabled}
        
        className={` h-12 px-3 mt-1.5 font-para text-[14.5px] w-full border-[1px] rounded-[6px] text-brandDark ${accent && accent} bg-[#fafcfcc5] outline-none transition appearance-none
          ${
            errorMessage
              ? "border-red-500 focus:border-red-500"
              : "border-[#dadadacc] focus:border-brandGreen"
          }
          ${disabled ? "bg-gray-100 cursor-not-allowed" : "bg-white"}
        `}
      >
        <option value="" disabled>
          {placeholder}
        </option>

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}

      </select>
      <ChevronDown className="absolute z-50 text-brandDark top-11.5 right-3 size-[20px]" />

      {/* ERROR MESSAGE */}
      {errorMessage && (
        <p className="mt-1 text-[13px] text-red-500 font-para">
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default Select;
