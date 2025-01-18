import React from "react";

const Hero = () => {
  return (
    <>
      <div className="relative h-[88vh] overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
          <div
            className="invisible lg:visible lg:absolute bottom-0 left-0 right-0 top-0"
            style={{
              background:
                "radial-gradient(circle 800px at 120% 150px, hsl(216, 100%, 17%), transparent)",
            }}
          ></div>
        </div>
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48 ">
          <div className="relative z-0 mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg bg-transparent">
              <h1 className=" font-outfit text-3xl font-light tracking-tight text-primary/80 sm:text-4xl">
                Our Services
              </h1>
              <h2 className=" font-hedvig text-5xl font-medium tracking-tight text-secondary sm:text-6xl">
                Powering Your Minds
              </h2>
              <p className="font-publicsans text-lg font-normal text-slate-500 mt-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Placeat recusandae dolor assumenda nisi nihil, voluptas animi
                corrupti adipisci qui quos.
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:top-0 sm:left-1/2 sm:translate-x-8 lg:top-1/2 lg:left-1/2 lg:-translate-y-1/2 lg:translate-x-16">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-52 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            alt=""
                            src="https://pagedone.io/asset/uploads/1696244059.png"
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="h-64 w-52 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://pagedone.io/asset/uploads/1696244059.png"
                            className="size-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-52 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://pagedone.io/asset/uploads/1696244059.png"
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="h-64 w-52 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://pagedone.io/asset/uploads/1696244059.png"
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="h-64 w-52 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://pagedone.io/asset/uploads/1696244059.png"
                            className="size-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="#"
                  className="inline-block z-0 rounded-2xl border border-transparent bg-secondary/90 px-8 py-3 text-center font-medium text-white hover:bg-secondary"
                >
                  Explore Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
