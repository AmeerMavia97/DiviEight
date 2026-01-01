import { Check } from "lucide-react";

const steps = [
  "Property Details",
  "Key Features & Amenities",
  "Pricing",
  "Photos",
  "Preview",
];

export default function Stepper({ currentStep, setStep }) {
  return (
    <div className="flex items-center justify-between mb-6 pb-6 border-b-[1px] border-[#dedddd]">
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isActive = index === currentStep;
        const isClickable = index <= currentStep;

        return (
          <div
            key={step}
            onClick={() => isClickable && setStep(index)}
            className={`flex items-center gap-2  ${
              isCompleted &&  "cursor-pointer"
            }`}
          >
            <div
              className={`w-10 h-10 rounded-lg flex items-center justify-center text-[18px] font-medium transition
                ${
                  isCompleted
                    ? "bg-brandGreen text-brandLight"
                    : isActive
                    ? "bg-brandGreen text-brandLight"
                    : "bg-gray-200 text-brandGrey2"
                }
              `}
            >
              {isCompleted ? <Check size={20} /> : index + 1}
            </div>

            <span
              className={`text-[17px] font-medium font-head text-brandDark`}
            >
              {step}
            </span>
          </div>
        );
      })}
    </div>
  );
}
