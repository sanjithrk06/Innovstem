import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

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

const StarIcon = () => (
  <svg
    className="w-5 h-5"
    viewBox="0 0 18 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
      fill="currentColor"
    />
  </svg>
);

const Testimonials = () => {
  return (
    <div className=" bg-gray-50 py-1">
      <section className="container text-left mb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <span className=" font-outfit text-base tracking-widest text-primary uppercase font-medium block mb-2 mx-auto lg:mx-0">
              TESTIMONIAL
            </span>
            <h2 className=" font-hedvig text-5xl font-medium text-slate-800 leading-[3.25rem] lg:mb-6 mx-auto max-w-max lg:max-w-md lg:mx-0">
              What people say about us!
            </h2>
          </div>

          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={32}
            slidesPerView={3}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            autoplaySpeed={10000}
            pagination={{
              clickable: true,
              bulletClass:
                "swiper-pagination-bullet !mt-10 !w-4 !h-1 !rounded !mx-1.5",
              bulletActiveClass: "!bg-primary !opacity-80",
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 32,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 32,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
            }}
            className="pb-16"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="group bg-white border mb-10 font-publicsans mx-2  border-gray-300 rounded-xl p-6 transition-all duration-500 hover:border-primary hover:bg-primary/5 hover:drop-shadow-lg h-full flex flex-col">
                  <div className="flex-grow">
                    <div className="flex items-center mb-7 gap-2 text-amber-500">
                      <StarIcon />
                      <span className="text-base font-semibold text-slate-800">
                        {testimonial.rating}
                      </span>
                    </div>
                    <p className="text-base text-gray-600 leading-6 transition-all duration-500 pb-8 group-hover:text-gray-800">
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
