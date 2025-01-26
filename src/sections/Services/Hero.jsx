import React from "react";

const Hero = () => {
  return (
    <>
      <div className="relative h-[90vh] overflow-hidden">
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
        <div className="absolute max-lg:-left-52 -top-36 lg:-left-80 w-[1400px] h-[1300px] rotate-45 bg-primary/20 rounded drop-shadow-md"></div>

        {/* Content with backdrop blur */}
        <div className="relative h-full w-full backdrop-blur-md bg-white/60">
          <div className="flex flex-col lg:flex-row justify-center lg:justify-between gap-4 items-center h-full px-8 max-w-7xl mx-auto text-left">
            {/* Left Text Content */}
            <div className="sm:max-w-lg bg-transparent">
              <h1 className="font-outfit text-xl text-primary font-normal tracking-wider uppercase sm:text-2xl">
                Our Services
              </h1>
              <h2 className="font-hedvig text-4xl/none text-secondary font-medium tracking-tight sm:text-6xl/none">
                Empowering Your Journey with E-Learning & Career Solutions
              </h2>
              <p className="font-publicsans text-slate-800 text-base font-normal mt-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Placeat recusandae dolor assumenda nisi nihil, voluptas animi
                corrupti adipisci qui quos.
              </p>
              <button className="inline-block mt-4 rounded-none border border-transparent bg-primary/80 px-6 py-3 text-center font-medium text-white hover:bg-primary">
                Explore Services
              </button>
            </div>

            {/* Right Image Content */}
            <div className="relative lg:w-1/2">
              <img
                alt="E-Learning Image"
                src="https://pagedone.io/asset/uploads/1696244059.png"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
