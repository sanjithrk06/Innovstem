import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ArrowRight, UserRoundPlus } from "lucide-react";
import { TbCategory } from "react-icons/tb";
import { PiStudentDuotone } from "react-icons/pi";

const Courses = () => {
  return (
    <>
      <div className="relative bg-primary/5 rounded-3xl mx-4 overflow-hidden">
        <div className="absolute max-lg:-left-52 -bottom-40 lg:-left-12 w-[450px] h-[400px] bg-primary/10 rounded-full  border-[120px] lg:border-[120px] border-primary/20 drop-shadow-md"></div>
        {/* Background Ring */}
        <div className=" backdrop-blur-2xl h-full">
          <section className="relative container px-4 bg-transparent my-0 py-16">
            <div>
              <div className="flex justify-center flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between gap-8">
                {/* Left Section */}
                <div className="w-full flex flex-col justify-between lg:w-2/5 h-full">
                  <div className="lg:text-left text-center flex flex-col">
                    <span className="font-outfit uppercase text-base tracking-widest text-primary font-medium block mb-2 mx-auto lg:mx-0">
                      Courses & Webinars
                    </span>
                    <h2 className="font-hedvig font-medium text-5xl text-secondary leading-[3.25rem] mb-4">
                      Explore New Learning Horizons
                    </h2>
                  </div>

                  <div className="lg:text-left text-center flex flex-col mt-auto mb-4">
                    <p className="text-gray-500 font-publicsans mb-4 max-lg:max-w-xl max-lg:mx-auto lg:text-justify lg:mt-4">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Accusamus animi beatae exercitationem molestias, debitis
                      sapiente.
                    </p>
                    <a
                      href="#"
                      className="font-publicsans text-base font-medium text-secondary hover:underline hover:underline-offset-4 lg:mt-2 "
                    >
                      View More
                    </a>
                  </div>
                </div>

                {/* Right Section */}
                <div className="w-full lg:w-3/5 lg:pt-4">
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
                        spaceBetween: 20,
                      },
                    }}
                    modules={[Pagination, Autoplay, Navigation]}
                    className="mySwiper"
                  >
                    {courses.map((item, index) => (
                      <SwiperSlide key={index} className="">
                        <div className="bg-white shadow border border-gray-50 m-2 p-4 mb-12 rounded-2xl">
                          <div className="flex items-center mb-4 h-28">
                            <img
                              src={`https://pagedone.io/asset/uploads/1696244059.png`}
                              alt="blogs tailwind section"
                              className="rounded-2xl w-full h-full object-cover"
                            />
                          </div>
                          <div className="font-publicsans p-1">
                            <h1 className="font-outfit text-xl text-left text-gray-900 font-medium leading-8 line-clamp-2 mb-2">
                              {item.name}
                            </h1>
                            <p className="text-gray-500 font-publicsans text-left line-clamp-2 duration-500">
                              Lorem ipsum, dolor sit amet consectetur
                              adipisicing elit. Neque ratione nemo dicta nostrum
                              beatae quasi excepturi ex perspiciatis labore
                              vero.
                            </p>

                            <div className="flex flex-row gap-3 justify-between text-start my-4 items-center">
                              <div className="flex flex-row items-center gap-2 w-3/6">
                                <div className="w-1/4 bg-primary/5 rounded-xl text-primary shadow p-2">
                                  <TbCategory className="w-5 h-5" />
                                </div>
                                <div className="w-3/4 flex flex-col">
                                  <h3 className="text-sm font-medium text-gray-500">
                                    Category
                                  </h3>
                                  <p className="text-lg font-semibold text-gray-700">
                                    Stem
                                  </p>
                                </div>
                              </div>

                              <div className="h-10 w-px bg-gray-200"></div>

                              <div className="flex flex-row items-center gap-2 w-3/6">
                                <div className="w-1/4 bg-primary/5 rounded-xl text-primary shadow p-2">
                                  <PiStudentDuotone className="w-5 h-5" />
                                </div>
                                <div className="w-3/4 flex flex-col">
                                  <h3 className="text-sm font-medium text-gray-500">
                                    Classes
                                  </h3>
                                  <p className="text-lg font-semibold text-gray-700">
                                    6-12
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="flex flex-row justify-between items-end mx-2 mb-2">
                              <div className="flex flex-col gap-3 justify-start items-start">
                                <div className="flex flex-row flex-wrap gap-2 mt-2">
                                  {item.category.map((tag, index) => (
                                    <p className="bg-gray-100 rounded-2xl p-1 px-3 text-xs/4 text-gray-500 font-medium">
                                      {tag}
                                    </p>
                                  ))}
                                </div>
                                <p className="text-xs text-gray-400 font-medium">
                                  Last Uploaded 5 days ago
                                </p>
                              </div>
                              <a
                                href="#"
                                className="bg-primary/10 text-primary/80 p-3 shadow-md rounded-2xl"
                              >
                                <UserRoundPlus className="w-6 h-6" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Courses;

const courses = [
  {
    name: "STEM Skills",
    avail: "Class 6-12",
    category: ["Stem Skills", "Career Guidance"],
  },
  {
    name: "Entrepreneurship",
    avail: "Class 6-12",
    category: ["Stem Skills", "Career Guidance"],
  },
  {
    name: "Financial Literacy",
    avail: "Class 6-12",
    category: ["Stem Skills", "Career Guidance"],
  },
  {
    name: "Career Guidance",
    avail: "All",
    category: ["Stem Skills", "Career Guidance"],
  },
  {
    name: "Defense Training",
    avail: "Class 6-12",
    category: ["Stem Skills", "Career Guidance"],
  },
];
