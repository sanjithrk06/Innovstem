import React from "react";

const TitleBanner = ({ title, subtitle, description }) => {
  return (
    <>
      <div className="relative bg-cream/40 rounded-3xl mt-5 mx-4 overflow-hidden">
        <div className="absolute max-lg:-left-52 -bottom-56 lg:-left-12 w-[450px] h-[400px] bg-cream/80 rounded-full  border-[120px] lg:border-[120px] border-primary/30 drop-shadow-md"></div>
        <div className="absolute max-lg:-left-52 -top-40 lg:-right-32 w-[450px] h-[400px] bg-cream/70 rounded-full  border-[120px] lg:border-[120px] border-primary/20 drop-shadow-md"></div>
        {/* Background Ring */}
        <div className=" backdrop-blur-2xl h-full">
          <section className="relative container px-4 bg-transparent my-0 py-16">
            <div className="w-full flex flex-col lg:flex-row justify-between items-start h-full">
              <div className="lg:text-left text-center lg:max-w-md flex flex-col">
                <span className="font-outfit uppercase text-xl tracking-widest text-primary font-normal block mb-2 mx-auto lg:mx-0">
                  {title || "Courses"}
                </span>
                <h2 className="font-outfit font-semibold text-5xl text-secondary leading-[3.25rem] mb-4">
                  {subtitle || "Explore New Learning Horizons"}
                </h2>
              </div>

              <div className="lg:text-right text-center flex flex-col mt-auto mb-4">
                <p className="text-gray-500 font-publicsans mb-4 lg:max-w-md lg:text-right lg:mt-4">
                  {description ||
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, molestiae! Harum minima quaerat quas consequatur excepturi, quam sit suscipit doloremque?"}
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default TitleBanner;
