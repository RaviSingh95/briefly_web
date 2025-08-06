import React from "react";
import classNames from "classnames";

export function Badge({ className, children, ...props }) {
  return (
    <span className={classNames("inline-flex items-center rounded-md border px-3 py-1 text-sm font-medium", className)} {...props}>
      {children}
    </span>
  );
}
