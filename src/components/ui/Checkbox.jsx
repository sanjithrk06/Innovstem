import React from "react";

export const Checkbox = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <input
      type="checkbox"
      className={`appearance-none h-4 w-4 rounded border border-slate-300 bg-white checked:bg-primary checked:border-primary focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-primary cursor-pointer mt-1 ${className}`}
      ref={ref}
      {...props}
    />
  );
});
