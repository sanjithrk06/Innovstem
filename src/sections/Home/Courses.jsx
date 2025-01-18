import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ArrowRight } from "lucide-react";

const Courses = () => {
  return (
    <div className=" bg-whiteDim py-1">
      <section className=" container">
        <div>
          <div className="flex justify-center flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between gap-8">
            {/* Left Section */}
            <div className="w-full flex justify-between flex-col lg:w-2/5">
              <div className="block lg:text-left text-center">
                <span className=" font-outfit uppercase text-base tracking-widest text-primary font-medium block mb-2 mx-auto lg:mx-0">
                  Courses & Webinars
                </span>
                <h2 className="font-hedvig font-medium text-5xl text-gray-900 leading-[3.25rem] mb-4">
                  Explore New Learning Horizons
                </h2>
                <p className="text-gray-500 font-publicsans mb-4 max-lg:max-w-xl max-lg:mx-auto">
                  Welcome to our course section, where knowledge meets
                  inspiration. Explore insightful articles, expert tips, and the
                  latest trends in our field.
                </p>
                <a
                  href="#"
                  className="flex flex-row items-center justify-center gap-1 uppercase font-publicsans text-sm font-medium text-primary lg:justify-start hover:underline hover:underline-offset-4 duration-300 group "
                >
                  View All{" "}
                  <ArrowRight className=" w-5 h-5 invisible group-hover:visible " />
                </a>
              </div>
            </div>

            {/* Right Section */}
            <div className="w-full lg:w-3/5 lg:pt-16">
              <Swiper
                loop={true}
                speed={800}
                slidesPerView={2}
                spaceBetween={28}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                  bulletClass:
                    "swiper-pagination-bullet !mt-10 !w-4 !rounded-none !h-1 !mx-0",
                  bulletActiveClass: "!bg-primary !opacity-80 !rounded-xl",
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 28,
                  },
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 32,
                  },
                }}
                modules={[Pagination, Autoplay, Navigation]}
                className="mySwiper"
              >
                {courses.map((item, index) => (
                  <SwiperSlide key={index} className="">
                    <div className=" bg-gray-50 p-5 mb-8 rounded-xl">
                      <div className="flex items-center mb-4 ">
                        <img
                          src={`https://pagedone.io/asset/uploads/1696244059.png`}
                          alt="blogs tailwind section"
                          className="rounded-2xl w-full object-cover"
                        />
                      </div>
                      <h1 className="text-xl text-left text-gray-900 font-medium leading-8 line-clamp-2 mb-2">
                        {item.name}
                      </h1>
                      <p className="text-gray-700 tracking-wide font-normal leading-6 text-left transition-all line-clamp-3 duration-500 mb-4">
                        Available for {item.avail} Students
                      </p>

                      <a
                        href="#"
                        className=" flex cursor-pointer uppercase font-publicsans text-sm font-medium text-primary justify-end duration-300 group "
                      >
                        <button className=" bg-primary/10 p-2 px-3 rounded-2xl">
                          View Courses
                        </button>
                      </a>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;

const courses = [
  { name: "STEM Skills", avail: "Class 6-12" },
  { name: "Entrepreneurship", avail: "Class 6-12" },
  { name: "Financial Literacy", avail: "Class 6-12" },
  { name: "Career Guidance", avail: "All" },
  { name: "Defense Training", avail: "Class 6-12" },
];
