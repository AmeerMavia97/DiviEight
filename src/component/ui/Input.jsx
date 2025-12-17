import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";

export function Input({
  label,
  type = "text",
  placeholder = "",
  register,
  name,
  validation = {},
  errors = {},
  isPassword = false,
}) {
  const [show, setShow] = useState(false);
  const inputType = isPassword ? (show ? "text" : "password") : type;

  return (
    <div className="space-y-1 w-full">
      {label && (
        <label className="font-para font-semibold text-[15.5px] tracking-[0.1px]">
          {label}
        </label>
      )}

      <div className="relative">
        <input
          type={inputType}
          placeholder={placeholder}
          {...register(name, validation)}
          className={`h-12 px-3 pr-10 mt-1.5 font-para text-[14.5px] w-full border-[1px] rounded-[6px] text-brandDark bg-[#fafcfcc5] placeholder:text-brandGrey2 font-[500] ${
            errors[name] ? "border-red-500" : "border-[#dadadacc]"
          }`}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShow(!show)}
            className="absolute top-7.5 right-4 -translate-y-1/2 cursor-pointer text-brandGrey text-sm"
          >
            {show ? <EyeClosed className="size-4.5" /> : <Eye className="size-4.5" />}
          </button>
        )}
      </div>

      {errors[name] && (
        <p className="text-red-500 text-sm mt-1">{errors[name]?.message}</p>
      )}
    </div>
  );
}
