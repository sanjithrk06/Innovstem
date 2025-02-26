import React from "react";
import { Link } from "react-router-dom";
// import { useTopCourses } from "../../hooks";
import { CourseViewCard } from "../../components";

// Swiper Components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTopCourses } from "../../hooks/hooks";

const Courses = () => {
  const { data: topCourses, isLoading, error } = useTopCourses();

  return (
    <div className="relative bg-cream/20 rounded-3xl mx-4 overflow-hidden">
      <div className="absolute max-lg:-left-52 -bottom-40 lg:-left-12 w-[450px] h-[400px] bg-primary/10 rounded-full border-[120px] lg:border-[120px] border-primary/20 drop-shadow-md"></div>
      <div className="backdrop-blur-2xl h-full">
        <section className="relative container px-4 bg-transparent my-0 py-16">
          <div className="flex justify-center flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between gap-8">
            {/* Left Section */}
            <div className="w-full flex flex-col justify-between lg:w-2/5 h-full">
              <div className="lg:text-left text-center flex flex-col">
                <span className="font-outfit uppercase text-lg tracking-widest text-primary font-medium block mb-2 mx-auto lg:mx-0">
                  Courses
                </span>
                <h2 className="font-outfit font-medium text-5xl text-secondary leading-[3.25rem] mb-4">
                  Explore New Learning Horizons
                </h2>
              </div>

              <div className="lg:text-left text-center flex flex-col mt-auto mb-4">
                <p className="text-gray-500 font-publicsans mb-4 max-lg:max-w-xl max-lg:mx-auto lg:text-justify lg:mt-4">
                  Discover the best courses to expand your knowledge and skills.
                </p>
                <Link
                  to="/courses"
                  className="font-publicsans text-base max-lg:mx-auto inline-flex font-medium text-secondary hover:underline hover:underline-offset-4 lg:mt-2"
                >
                  Know More
                </Link>
              </div>
            </div>

            {/* Right Section */}
            <div className="w-full lg:w-3/5 lg:pt-4">
              {isLoading ? (
                <p>Loading courses...</p>
              ) : error ? (
                <p className="text-red-500">{error}</p>
              ) : (
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
                    0: { slidesPerView: 1, spaceBetween: 20 },
                    768: { slidesPerView: 2, spaceBetween: 28 },
                    1024: { slidesPerView: 2, spaceBetween: 20 },
                  }}
                  modules={[Pagination, Autoplay, Navigation]}
                  className="mySwiper"
                >
                  {Array.isArray(topCourses) && topCourses.length > 0 ? (
                    topCourses.map((item, index) => (
                      <SwiperSlide key={index} className="mb-8">
                        <Link to={`/courses/${item.slug}`}>
                          <CourseViewCard
                            item={{
                              name: item.name,
                              description: item.short_description,
                              link: item.slug,
                              time: item.created_at,
                              image: item.image_url,
                            }}
                          />
                        </Link>
                      </SwiperSlide>
                    ))
                  ) : (
                    <p>No courses available</p>
                  )}
                </Swiper>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Courses;
