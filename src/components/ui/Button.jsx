// import React from "react";

// const Button = ({ text }) => {
//   return (
//     <>
//       <div className="inline-block mt-6 ml-4 ring-2 ring-primary">
//         <button className=" -translate-x-2 -translate-y-2 -m-1 hover:translate-x-0 hover:translate-y-0 duration-300 rounded-none border border-transparent bg-secondary px-6 py-3 text-center font-medium text-cream text-base">
//           {text}
//         </button>
//       </div>
//     </>
//   );
// };

// export default Button;

// src/components/ui/Button.jsx
import React from "react";

const variants = {
  default: "bg-slate-900 text-white hover:bg-slate-800",
  outline: "bg-transparent border border-slate-200 hover:bg-slate-100",
  ghost: "bg-transparent hover:bg-slate-100",
};

const sizes = {
  default: "py-2 px-4",
  sm: "py-1 px-3 text-sm",
  lg: "py-3 px-6 text-lg",
  icon: "p-2",
};

export const Button = React.forwardRef(
  (
    { className, variant = "default", size = "default", children, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={`inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);
