import { useState } from "react";

export function Textarea({
  label,
  placeholder = "",
  register,
  name,
  validation = {},
  errors = {},
  rows = 4,
}) {
  return (
    <div className="space-y-1 w-full">
      {label && (
        <label className="font-para font-semibold text-[15.5px] tracking-[0.1px]">
          {label}
        </label>
      )}

      <textarea
        rows={rows}
        placeholder={placeholder}
        {...register(name, validation)}
        className={`mt-1.5 px-3 py-2 font-para text-[14.5px] w-full border-[1px] rounded-[6px] text-brandDark bg-[#fafcfcc5] placeholder:text-brandGrey2 font-[500] resize-none ${
          errors[name] ? "border-red-500" : "border-[#dadadacc]"
        }`}
      />

      {errors[name] && (
        <p className="text-red-500 text-sm mt-1">
          {errors[name]?.message}
        </p>
      )}
    </div>
  );
}
