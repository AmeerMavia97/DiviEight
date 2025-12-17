import { Check } from "lucide-react";

const RuleItem = ({ text, valid }) => (
  <div className="flex items-center gap-2 mt-2">
    <div
      className={`px-0.5 py-[1.5px] rounded-full border
        ${
          valid
            ? "bg-brandGreen border-brandGreen text-white"
            : "border-brandDark text-brandDark"
        }`}
    >
      <Check
       size={12} />
    </div>
    <span className="text-[14.5px] font-para">{text}</span>
  </div>
);

export default RuleItem