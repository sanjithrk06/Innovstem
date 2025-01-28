import React from "react";

const Button = ({ text }) => {
  return (
    <>
      <div className="inline-block mt-6 ml-4 ring-2 ring-primary">
        <button className=" -translate-x-2 -translate-y-2 -m-1 hover:translate-x-0 hover:translate-y-0 duration-300 rounded-none border border-transparent bg-secondary px-6 py-3 text-center font-medium text-white text-base">
          {text}
        </button>
      </div>
    </>
  );
};

export default Button;
