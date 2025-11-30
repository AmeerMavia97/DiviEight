import React from "react";

export default function Input({ className = "", ...props }) {
  return (
    <input
      className={`
        w-full px-4 py-2 
        bg-neutral-900 text-white 
        placeholder:text-neutral-500
        border border-neutral-700 
        rounded-xl focus:outline-none 
        focus:ring-2 focus:ring-blue-500 
        transition-all
        ${className}
      `}
      {...props}
    />
  );
}
