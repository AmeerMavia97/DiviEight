import { useState } from "react";
import { ChevronRight, SlidersHorizontal } from "lucide-react";

const categories = [
  "Townhouses",
  "Apartments",
  "Bungalows",
  "Penthouses",
  "Farmhouses",
  "Villas",
  "Studio",
  "Office Spaces",
  "Retail Shops",
  "Warehouses",
];

const CategoryFilter = () => {
  const [active, setActive] = useState("Apartments");

  return (
    <div className="w-full bg-brandLight dark:bg-transparent py-3 px-0 flex items-center gap-3">
      
      {/* Scrollable Categories */}
      <div className="flex gap-2 overflow-x-hidden scrollbar-hide flex-1">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className={`whitespace-nowrap px-4 py-2 font-para rounded-full text-sm font-medium border transition
              ${
                active === item
                  ? "bg-brandDark text-brandLight border-brandDark dark:border-brandGreen dark:bg-brandGreen"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Right Arrow */}
      <button className="shrink-0 w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">
        <ChevronRight size={18} />
      </button>

      {/* Filter Button */}
      <button className="shrink-0 flex items-center font-para gap-1 px-5 py-2 rounded-full border border-gray-300 text-sm font-medium hover:bg-gray-100">
        <SlidersHorizontal size={16} />
        Filter
      </button>
    </div>
  );
};

export default CategoryFilter;
