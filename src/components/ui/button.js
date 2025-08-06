import React from "react";
import classNames from "classnames";

export function Button({ children, className, variant = "default", ...props }) {
  const base =
    "rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    outline: "border border-gray-300 text-gray-100 hover:bg-gray-800",
  };
  return (
    <button className={classNames(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
