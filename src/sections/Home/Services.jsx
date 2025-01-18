import React from "react";

const Services = () => {
  return (
    <div className=" bg-white pt-1 pb-6">
      <section className="container">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 lg:mb-16 flex justify-center items-center flex-col gap-x-0 gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between max-md:max-w-lg max-md:mx-auto">
            <div className="relative w-full text-center lg:text-left lg:w-2/4">
              <span className="font-outfit uppercase text-base tracking-widest text-primary font-medium block mb-2 mx-auto lg:mx-0">
                Services We Provide
              </span>
              <h2 className="font-hedvig text-5xl font-medium text-secondary leading-[3.25rem] lg:mb-6 mx-auto max-w-max lg:max-w-md lg:mx-0">
                Our Toolkit for Your Growth!
              </h2>
            </div>
            <div className="relative w-full text-center lg:text-left lg:w-2/4">
              <p className="font-publicsans text-lg font-normal text-slate-500 mb-5">
                From interactive courses to personalized learning paths, we
                offer everything you need to grow, create, and thrive in the
                skills that matter most to you!
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
            <div className="group flex flex-col gap-3 justify-center items-center relative w-full bg-transparent rounded-2xl p-4 transition-all duration-500 max-w-md mx-auto md:w-2/5 md:h-60 xl:p-7 xl:w-1/3 hover:scale-105 cursor-pointer group">
              <div
                className="w-full h-40 flex justify-center items-center relative duration-300"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, #f67009 0, #f67009 1px, transparent 6px, transparent 15px)",
                }}
              >
                <img
                  src="https://pagedone.io/asset/uploads/1696244059.png"
                  alt="Career Guidance"
                  className="w-full h-full object-cover group-hover:translate-x-1.5 group-hover:-translate-y-1.5 max-md:-translate-y-1.5 max-md:translate-x-1.5 duration-300"
                />
              </div>

              <h4 className="text-2xl font-outfit font-medium text-secondary/90 group-hover:text-primary capitalize transition-all duration-500">
                Exam Guidance
              </h4>
              <p className="text-sm font-publicsans font-normal text-gray-500 transition-all duration-500 leading-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
                voluptas ab labore fugiat, possimus doloribus?
              </p>
            </div>
            <div className="group flex flex-col gap-3 justify-center items-center relative w-full bg-transparent rounded-2xl p-4 transition-all duration-500 max-w-md mx-auto md:w-2/5 md:h-60 xl:p-7 xl:w-1/3 hover:scale-105 cursor-pointer group">
              <div
                className="w-full h-40 flex justify-center items-center relative duration-300"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, #f67009 0, #f67009 1px, transparent 6px, transparent 15px)",
                }}
              >
                <img
                  src="https://pagedone.io/asset/uploads/1696244059.png"
                  alt="Career Guidance"
                  className="w-full h-full object-cover group-hover:translate-x-1.5 group-hover:-translate-y-1.5 max-md:-translate-y-1.5 max-md:translate-x-1.5 duration-300"
                />
              </div>

              <h4 className="text-2xl font-outfit font-medium text-secondary/90 group-hover:text-primary capitalize transition-all duration-500">
                Personality Development
              </h4>
              <p className="text-sm font-publicsans font-normal text-gray-500 transition-all duration-500 leading-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
                voluptas ab labore fugiat, possimus doloribus?
              </p>
            </div>
            <div className="group flex flex-col gap-3 justify-center items-center relative w-full bg-transparent rounded-2xl p-4 transition-all duration-500 max-w-md mx-auto md:w-2/5 md:h-60 xl:p-7 xl:w-1/3 hover:scale-105 cursor-pointer group">
              <div
                className="w-full h-40 flex justify-center items-center relative duration-300"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, #f67009 0, #f67009 1px, transparent 6px, transparent 15px)",
                }}
              >
                <img
                  src="https://pagedone.io/asset/uploads/1696244059.png"
                  alt="Career Guidance"
                  className="w-full h-full object-cover group-hover:translate-x-1.5 group-hover:-translate-y-1.5 max-md:-translate-y-1.5 max-md:translate-x-1.5 duration-300"
                />
              </div>

              <h4 className="text-2xl font-outfit font-medium text-secondary/90 group-hover:text-primary capitalize transition-all duration-500">
                Career Guidance
              </h4>
              <p className="text-sm font-publicsans font-normal text-gray-500 transition-all duration-500 leading-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
                voluptas ab labore fugiat, possimus doloribus?
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
