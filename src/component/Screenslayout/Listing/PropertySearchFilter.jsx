import { Search } from "lucide-react";

const PropertySearchFilter = () => {
  return (
    <div className="w-[50%] bg-brandLight rounded-full shadow-md px-4 py-3 flex items-center gap-3 mt-4">

      {/* Property Type */}
      <div className="flex text-start font-para flex-col px-3 border-r border-[#7474746d] w-[30%]">
        <label className="text-xs text-gray-500 pl-1">Property Type</label>
        <select className="bg-transparent text-brandDark text-[15px] font-[600] pt-0.5 focus:outline-none cursor-pointer">
          <option>All</option>
          <option>Apartment</option>
          <option>Villa</option>
          <option>Office</option>
        </select>
      </div>
      <div className="flex text-start font-para flex-col px-3 border-r border-[#7474746d] w-[30%]">
        <label className="text-xs text-gray-500 pl-1">City</label>
        <select className="bg-transparent text-brandDark text-[15px] font-[600] pt-0.5 focus:outline-none cursor-pointer">
          <option>All Locations</option>
          <option>New York</option>
          <option>London</option>
          <option>Dubai</option>
        </select>
      </div>
      <div className="flex text-start items-start font-para flex-col pl-5 w-[33%]">
        <label className="text-xs text-gray-500 pl-1">Budget</label>
        <select className="bg-transparent text-brandDark text-[15px] font-[600] pt-0.5 focus:outline-none cursor-pointer">
          <option>$500 – $1200</option>
          <option>$1200 – $2500</option>
          <option>$2500+</option>
        </select>
      </div>



      {/* Search Button */}
      <button className="ml-auto  bg-brandGreen text-brandLight w-11 h-10 rounded-full flex items-center justify-center hover:bg-gray-800 transition ">
        <Search size={18} />
      </button>
    </div>
  );
};


export default PropertySearchFilter;
