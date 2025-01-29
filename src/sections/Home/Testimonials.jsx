import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.8, ease: "easeOut" },
  },
};

const testimonials = [
  {
    rating: 4.9,
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos rerum ducimus dignissimos, illum ex esse!",
    name: "Sam",
    position: "CEO",
    avatar: "https://pagedone.io/asset/uploads/1696229969.png",
  },
  {
    rating: 4.9,
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos rerum ducimus dignissimos, illum ex esse!",
    name: "Sam",
    position: "CEO",
    avatar: "https://pagedone.io/asset/uploads/1696229969.png",
  },
  {
    rating: 4.9,
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos rerum ducimus dignissimos, illum ex esse!",
    name: "Sam",
    position: "CEO",
    avatar: "https://pagedone.io/asset/uploads/1696229969.png",
  },
  {
    rating: 4.9,
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos rerum ducimus dignissimos, illum ex esse!",
    name: "Sam",
    position: "CEO",
    avatar: "https://pagedone.io/asset/uploads/1696229969.png",
  },
  {
    rating: 4.9,
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos rerum ducimus dignissimos, illum ex esse!",
    name: "Sam",
    position: "CEO",
    avatar: "https://pagedone.io/asset/uploads/1696229969.png",
  },
  {
    rating: 4.9,
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos rerum ducimus dignissimos, illum ex esse!",
    name: "Sam",
    position: "CEO",
    avatar: "https://pagedone.io/asset/uploads/1696229969.png",
  },
];

const Testimonials = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="bg-gray-100 py-1"
    >
      <section className="container text-left mb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeIn}
            className="mb-6 lg:mb-8 flex justify-center items-center flex-col gap-x-0 gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between max-md:max-w-lg max-md:mx-auto"
          >
            <div className="relative w-full text-center lg:text-left lg:w-2/4">
              <span className="font-outfit uppercase text-lg tracking-widest text-primary font-medium block mb-2 mx-auto lg:mx-0">
                Testimonials
              </span>
              <h2 className="font-outfit text-5xl font-semibold text-secondary leading-[3.25rem] lg:mb-6 mx-auto max-w-max lg:max-w-md lg:mx-0">
                What People Say About Us!
              </h2>
            </div>
            <div className="relative w-full text-center lg:text-left lg:w-2/4">
              <p className="font-publicsans text-lg font-normal text-slate-500 mb-5">
                From interactive courses to personalized learning paths, we
                offer everything you need to grow, create, and thrive in the
                skills that matter most to you!
              </p>
            </div>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={28}
              slidesPerView={1}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: true,
              }}
              pagination={{
                clickable: true,
                bulletClass:
                  "swiper-pagination-bullet !mt-10 !w-4 !h-1 !rounded !mx-1.5",
                bulletActiveClass: "!bg-primary !opacity-80",
              }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index} className="m-1 p-2 pb-4 pr-10">
                  <motion.div variants={fadeIn} className="mb-5 p-1">
                    <div className="border-4 border-secondary/80">
                      <div className="group bg-white shadow-inner shadow-gray-200 font-publicsans rounded-none p-6 transition-all duration-500 h-full flex flex-col translate-x-4 -translate-y-4 drop-shadow-sm -m-3">
                        <div className="flex-grow">
                          <p className="text-base text-slate-500 leading-6 transition-all duration-500 pb-8 group-hover:text-gray-800">
                            {testimonial.content}
                          </p>
                        </div>
                        <div className="flex items-center gap-5 border-t border-gray-200 pt-5">
                          <img
                            className="rounded-full h-10 w-10 object-cover"
                            src={testimonial.avatar}
                            alt={`${testimonial.name}'s avatar`}
                          />
                          <div>
                            <h5 className="text-gray-900 font-medium mb-1">
                              {testimonial.name}
                            </h5>
                            <span className="text-sm leading-4 text-gray-500">
                              {testimonial.position}
                            </span>
                          </div>
                        </div>
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
