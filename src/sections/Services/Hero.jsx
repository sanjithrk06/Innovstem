import React from "react";
import { Button } from "../../components";

const Hero = () => {
  return (
    <>
      <div className="relative h-[90vh] overflow-hidden">
        {/* Rotated shape */}
        <div className="absolute max-lg:-left-52 -top-36 lg:-left-80 w-[1400px] h-[1300px] rotate-45 bg-cream/70 rounded drop-shadow-md"></div>

        {/* Content with backdrop blur */}
        <div className="relative h-full w-full backdrop-blur-md bg-white/40">
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
              <Button text={"Explore Services"} />
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
