import React, { useEffect } from "react";
import { useTestimonials } from "../../hooks/useTestimonials";

const Testimonials = () => {
  const { data: testimonials, isLoading, error } = useTestimonials();

  // Throw error to trigger ErrorBoundary
  useEffect(() => {
    if (error) {
      throw new Error("Failed to fetch testimonials: " + error.message);
    }
  }, [error]);

  if (isLoading) {
    return (
      <section id="testimonies" className="container">
        <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
          <div className="text-center">
            <p className="text-xl text-black md:text-2xl">
              Loading testimonials...
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (!testimonials || testimonials.length === 0) {
    return (
      <section id="testimonies" className="container">
        <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
          <div className="text-center">
            <p className="text-xl text-black md:text-2xl">
              No testimonials available.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="testimonies" className="container">
      <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
          <div className="mb-12 space-y-5 md:mb-16 md:text-center">
            <div className="inline-block px-3 py-1 text-sm font-semibold text-black rounded-lg md:text-center text-cn bg-[#202c47] bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40">
              Words from Others
            </div>
            <h1 className="mb-5 text-3xl font-semibold text-black md:text-center md:text-5xl">
              It's not just us.
            </h1>
            <p className="text-xl text-black md:text-center md:text-2xl">
              Here's what others have to say about us.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  href={testimonial.twitterUrl || "#"}
                  className="cursor-pointer"
                >
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src={
                          testimonial.image || "https://via.placeholder.com/48"
                        }
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt={testimonial.name || "Anonymous"}
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {testimonial.name || "Anonymous"}
                        </h3>
                        <p className="text-gray-500 text-md">
                          {testimonial.role || "Contributor"}
                        </p>
                      </div>
                    </div>
                    <p className="leading-normal text-gray-300 text-md">
                      {testimonial.quote || "No comment provided."}
                    </p>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
