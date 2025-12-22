// import * as React from "react";
// import { Plus } from "lucide-react";
// import { cn } from "@/lib/utils";

// export const Accordion = ({ children, ...props }) => {
//   return (
//     <div {...props} className={cn("space-y-4", props.className)}>
//       {children}
//     </div>
//   );
// };

// export const AccordionItem = ({ children, value, className }) => {
//   return (
//     <div data-value={value} className={cn("w-full", className)}>
//       {children}
//     </div>
//   );
// };

// export const AccordionTrigger = ({ children, onClick, isOpen }) => {
//   return (
//     <button
//       onClick={onClick}
//       className={cn(
//         "w-full flex justify-between items-center text-left px-6 pt-6 pb-5 text-xl font-semibold transition-all hover:no-underline",
//         "data-[state=closed]:text-black text-white"
//       )}
//     >
//       {children}
//       <Plus
//         className={cn(
//           "h-5 w-5 shrink-0 transition-transform duration-200",
//           isOpen ? "rotate-180" : ""
//         )}
//       />
//     </button>
//   );
// };

// export const AccordionContent = ({ children, isOpen }) => {
//   return (
//     <div
//       className={cn(
//         "overflow-hidden text-sm transition-all duration-300",
//         isOpen ? "max-h-[1000px] ease-in" : "max-h-0 ease-out"
//       )}
//     >
//       <div className="px-6 pt-0 pb-6">{children}</div>
//     </div>
//   );
// };
