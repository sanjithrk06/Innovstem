import React from "react";

const Hero = ({ title }) => {
  return (
    <>
      <div className="relative h-[30vh] overflow-hidden shadow-inner">
        {/* <div className="absolute inset-0 -z-10 h-full w-full bg-secondary bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
          <div
            className="invisible lg:visible lg:absolute bottom-0 left-0 right-0 top-0"
            style={{
              background:
                "radial-gradient(circle 800px at 120% 200px, #FF5E15, transparent)",
            }}
          ></div>
        </div> */}
        {/* Rotated shape */}
        <div className="absolute max-lg:-left-80 -top-36 lg:-left-80 w-[1400px] h-[1300px] rotate-45 bg-primary/30 rounded drop-shadow-md"></div>

        {/* Content with backdrop blur */}
        <div className="relative h-full w-full backdrop-blur-3xl bg-white/60">
          <div className="flex flex-col lg:flex-row justify-center lg:justify-between gap-4 items-center h-full px-8 max-w-7xl mx-auto text-left">
            <div className="sm:max-w-lg bg-transparent">
              <h1 className="font-hedvig text-3xl text-primary font-normal tracking-wider uppercase sm:text-4xl">
                {title}
              </h1>
              <p className="font-publicsans text-slate-700 text-base font-normal mt-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Placeat recusandae dolor assumenda nisi nihil, voluptas animi
                corrupti adipisci qui quos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
