import React from "react";
import image from "../../assets/images/about.jpg";
import { ArrowRight } from "lucide-react";

const Content = () => {
  return (
    <>
      <section className=" bg-gray-50 drop-shadow-sm ">
        <div className="gap-12 items-center py-16 px-8 mx-auto max-w-screen-xl flex lg:flex-row flex-col-reverse lg:py-24 lg:px-6">
          <div className="grid grid-cols-1 gap-4 lg:w-2/5">
            <div className="relative group">
              <img
                className="w-full transition-transform duration-300 relative z-10"
                src={image}
                alt="office content"
              />
              <div className="absolute inset-0 -z-0 duration-300">
                {/* Top-left border */}
                <div className="absolute top-0 left-0 h-24 w-24 bg-primary/40 transition-transform duration-300 -translate-x-3 -translate-y-3"></div>

                {/* Bottom-right border */}
                <div className="absolute bottom-0 right-0 h-24 w-24 bg-primary/40 transition-transform duration-300 translate-x-3 translate-y-3"></div>
              </div>
            </div>
          </div>
          <div className="font-light text-gray-500 sm:text-lg text-left lg:w-3/5">
            <h2 className="mb-8 text-4xl font-outfit tracking-wide uppercase text-center lg:text-left font-medium text-secondary ">
              Career Guidance
            </h2>
            <p className="font-publicsans text-lg font-normal text-slate-500 mb-4 text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
              obcaecati consequatur quidem sunt reiciendis odit pariatur nam
              maiores sint eum ducimus voluptas, ipsa consectetur amet itaque
              cumque repudiandae quisquam iure iste debitis. Ipsam iure
              dignissimos quasi sit minima quos illo ullam voluptas rem ab sed
              nemo, non inventore expedita vel amet cum enim architecto iste
              voluptates vitae? Nesciunt est sit fugit earum, officiis sint
              neque cumque illum, consequuntur numquam tenetur culpa ducimus
              alias itaque nihil, sunt quibusdam debitis similique provident.
            </p>
            <button className=" font-medium font-publicsans text-secondary/80 flex flex-row gap-2 justify-start items-center hover:text-primary">
              Know More
              <ArrowRight className=" w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="gap-12 items-center py-16 px-8 mx-auto max-w-screen-xl flex lg:flex-row-reverse flex-col-reverse lg:py-24 lg:px-6 container my-0">
          <div className="grid grid-cols-1 gap-4 lg:w-2/5">
            <div className="relative group">
              <img
                className="w-full transition-transform duration-300 relative z-10"
                src={image}
                alt="office content"
              />
              <div className="absolute inset-0 -z-0 duration-300">
                {/* Top-left border */}
                <div className="absolute top-0 left-0 h-24 w-24 bg-primary/40 transition-transform duration-300 -translate-x-3 -translate-y-3"></div>

                {/* Bottom-right border */}
                <div className="absolute bottom-0 right-0 h-24 w-24 bg-primary/40 transition-transform duration-300 translate-x-3 translate-y-3"></div>
              </div>
            </div>
          </div>
          <div className="font-light text-gray-500 sm:text-lg text-left lg:w-3/5">
            <h2 className="mb-8 text-4xl font-outfit tracking-wide uppercase text-center lg:text-right font-medium text-secondary ">
              Personality Development
            </h2>
            <p className="font-publicsans text-lg font-normal text-slate-500 mb-4 text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
              obcaecati consequatur quidem sunt reiciendis odit pariatur nam
              maiores sint eum ducimus voluptas, ipsa consectetur amet itaque
              cumque repudiandae quisquam iure iste debitis. Ipsam iure
              dignissimos quasi sit minima quos illo ullam voluptas rem ab sed
              nemo, non inventore expedita vel amet cum enim architecto iste
              voluptates vitae? Nesciunt est sit fugit earum, officiis sint
              neque cumque illum, consequuntur numquam tenetur culpa ducimus
              alias itaque nihil, sunt quibusdam debitis similique provident.
            </p>
            <button className=" font-medium font-publicsans text-secondary/80 flex flex-row gap-2 justify-start ml-auto items-center hover:text-primary">
              Know More
              <ArrowRight className=" w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 drop-shadow-sm">
        <div className="gap-12 items-center py-16 px-8 mx-auto max-w-screen-xl flex lg:flex-row flex-col-reverse lg:py-24 lg:px-6 container my-0">
          <div className="grid grid-cols-1 gap-4 lg:w-2/5">
            <div className="relative group">
              <img
                className="w-full transition-transform duration-300 relative z-10"
                src={image}
                alt="office content"
              />
              <div className="absolute inset-0 -z-0 duration-300">
                {/* Top-left border */}
                <div className="absolute top-0 left-0 h-24 w-24 bg-primary/40 transition-transform duration-300 -translate-x-3 -translate-y-3"></div>

                {/* Bottom-right border */}
                <div className="absolute bottom-0 right-0 h-24 w-24 bg-primary/40 transition-transform duration-300 translate-x-3 translate-y-3"></div>
              </div>
            </div>
          </div>
          <div className="font-light text-gray-500 sm:text-lg text-left lg:w-3/5">
            <h2 className="mb-8 text-4xl font-outfit tracking-wide uppercase text-center lg:text-left font-medium text-secondary ">
              Exam Guidance
            </h2>
            <p className="font-publicsans text-lg font-normal text-slate-500 mb-4 text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
              obcaecati consequatur quidem sunt reiciendis odit pariatur nam
              maiores sint eum ducimus voluptas, ipsa consectetur amet itaque
              cumque repudiandae quisquam iure iste debitis. Ipsam iure
              dignissimos quasi sit minima quos illo ullam voluptas rem ab sed
              nemo, non inventore expedita vel amet cum enim architecto iste
              voluptates vitae? Nesciunt est sit fugit earum, officiis sint
              neque cumque illum, consequuntur numquam tenetur culpa ducimus
              alias itaque nihil, sunt quibusdam debitis similique provident.
            </p>
            <button className=" font-medium font-publicsans text-secondary/80 flex flex-row gap-2 justify-start items-center hover:text-primary">
              Know More
              <ArrowRight className=" w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
