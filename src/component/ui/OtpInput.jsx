import { useRef } from "react";
import { Controller } from "react-hook-form";

export default function OtpInput({ name, control, length = 6 }) {
  const inputs = useRef([]);

  const handleChange = (e, index, field) => {
    const value = e.target.value.replace(/\D/g, "");
    field.onChange(updateValue(index, value, field.value));

    if (value && index < length - 1) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const updateValue = (index, value, prevValue = "") => {
    const chars = prevValue.split("");
    chars[index] = value;
    return chars.join("");
  };

  return (
    <div className="flex gap-5">
      {Array.from({ length }).map((_, i) => (
        <Controller
          key={i}
          name={`${name}.${i}`}
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input
              maxLength={1}
              type="text"
              className="w-13 text-center h-13 font-para text-[18px] border-[#dadadacc] rounded-[6px] text-brandDark border-[1px] focus:outline-[#979797] bg-[#fafcfcc5] placeholder:text-brandGrey2 font-[500] tracking-wider"
              onChange={(e) => handleChange(e, i, field)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              ref={(el) => (inputs.current[i] = el)}
            />
          )}
        />
      ))}
    </div>
  );
}
