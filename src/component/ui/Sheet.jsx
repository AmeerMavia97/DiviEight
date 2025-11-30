"use client";

import React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";

// Optional helper for combining class names
const cn = (...classes) => classes.filter(Boolean).join(" ");

export const Sheet = ({ children, open, onOpenChange }) => {
  return (
    <SheetPrimitive.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </SheetPrimitive.Root>
  );
};

export const SheetTrigger = ({ children }) => {
  return <SheetPrimitive.Trigger asChild>{children}</SheetPrimitive.Trigger>;
};

export const SheetContent = ({ children, className, side = "right", ...props }) => {
  const sideClasses = {
    right: "fixed right-0 top-0 h-full w-64",
    left: "fixed left-0 top-0 h-full w-64",
  };

  return (
    <SheetPrimitive.Portal>
      <SheetPrimitive.Overlay className="fixed inset-0 bg-black/50" />
      <SheetPrimitive.Content
        className={cn(
          "bg-white shadow-lg z-50",
          sideClasses[side],
          className
        )}
        {...props}
      >
        {children}
      </SheetPrimitive.Content>
    </SheetPrimitive.Portal>
  );
};
