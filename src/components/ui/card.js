import React from "react";
import classNames from "classnames";

export function Card({ className, children, ...props }) {
  return (
    <div className={classNames("rounded-xl border bg-slate-800 text-white", className)} {...props}>
      {children}
    </div>
  );
}

export function CardContent({ className, children, ...props }) {
  return (
    <div className={classNames("p-4", className)} {...props}>
      {children}
    </div>
  );
}
