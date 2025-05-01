import React from "react";
import pencil from "./pencil.svg";

const Loader = () => {
  return (
    <div className=" fixed inset-0 z-50 bg-white">
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-cream/20">
        <div className="relative">
          {/* SVG Loader */}
          <img
            src={pencil}
            alt="loader"
            className="w-24 h-24 md:w-32 md:h-32"
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
