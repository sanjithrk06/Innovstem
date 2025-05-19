import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { FaQuoteRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useTestimonials } from "../../hooks/hooks";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.8, ease: "easeOut" },
  },
};

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
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="bg-gray-50 py-1"
      >
        <section className="container text-left mb-8 md:mb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="font-publicsans text-base md:text-lg font-normal text-slate-500">
                Loading testimonials...
              </p>
            </div>
          </div>
        </section>
      </motion.div>
    );
  }

  if (!testimonials || testimonials.length === 0) {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="bg-gray-50 py-1"
      >
        <section className="container text-left mb-8 md:mb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="font-publicsans text-base md:text-lg font-normal text-slate-500">
                No testimonials available.
              </p>
            </div>
          </div>
        </section>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="bg-gray-50 py-1"
    >
      <section className="container text-left mb-8 md:mb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeIn}
            className="mb-6 lg:mb-8 flex justify-center items-center flex-col gap-y-4 md:gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between max-w-xl md:max-w-2xl lg:max-w-none mx-auto"
          >
            <div className="relative w-full text-center lg:text-left lg:w-2/4">
              <span className="font-outfit uppercase text-base md:text-lg tracking-widest text-primary font-medium block mb-2 mx-auto lg:mx-0">
                Testimonials
              </span>
              <h2 className="font-outfit text-4xl md:text-4xl lg:text-5xl font-semibold text-secondary leading-tight md:leading-[3.25rem] lg:mb-6 mx-auto max-w-max lg:max-w-md lg:mx-0">
                What People Say About Us!
              </h2>
            </div>
            <div className="relative w-full text-center lg:text-left max-lg:hidden lg:w-2/4">
              <p className="font-publicsans text-base md:text-lg font-normal text-slate-500 mb-3 md:mb-5">
                From interactive courses to personalized learning paths, we
                offer everything you need to grow, create, and thrive in the
                skills that matter most to you!
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="relative"
          >
            <div className="swiper-button-prev !left-0 !text-secondary hover:!text-primary max-md:!hidden"></div>
            <div className="swiper-button-next !right-0 !text-secondary hover:!text-primary max-md:!hidden"></div>

            <Swiper
              modules={[Pagination, Autoplay, Navigation]}
              spaceBetween={28}
              slidesPerView={1}
              centeredSlides={true}
              loop={true}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              speed={1300}
              autoplay={{
                delay: 2500,
                disableOnInteraction: true,
              }}
              pagination={{
                clickable: true,
                bulletClass:
                  "swiper-pagination-bullet !mt-6 md:!mt-10 !w-4 !h-1 !rounded !mx-1.5",
                bulletActiveClass: "!bg-primary !opacity-80",
              }}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide
                  key={index}
                  className="pb-10 md:pb-12 px-0 md:px-12"
                >
                  <motion.div variants={fadeIn}>
                    <div className="group bg-white rounded-2xl md:rounded-3xl drop-shadow-md shadow-cream font-publicsans p-4 md:p-6 pt-8 md:pt-12 transition-all duration-500 h-full flex flex-col">
                      <div className="absolute right-[40%] md:right-[45%] rounded-full p-2 md:p-4">
                        <FaQuoteRight
                          size={48}
                          className="text-primary/20 md:hidden"
                        />
                        <FaQuoteRight
                          size={92}
                          className="text-primary/20 hidden md:block"
                        />
                      </div>
                      <div className="flex-grow max-w-4xl mx-auto mb-4">
                        <p className="text-base md:text-lg leading-relaxed md:leading-9 text-center text-slate-500 transition-all duration-500 p-2 pb-6 md:pb-8 group-hover:text-gray-800 line-clamp-6 lg:line-clamp-none">
                          {testimonial.testimonial || "No comment provided."}
                        </p>
                      </div>
                      <div className="flex flex-col items-center justify-center border-t border-gray-200 pt-4 md:pt-5">
                        <h5 className="text-lg md:text-xl mb-1 font-outfit font-semibold text-secondary">
                          {testimonial.testimonial_name || "Anonymous"}
                        </h5>
                        <span className="text-sm md:text-base mb-1 font-outfit font-normal text-primary">
                          {testimonial.designation || "Contributor"}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Testimonials;
