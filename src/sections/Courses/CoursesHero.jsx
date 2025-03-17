import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { CourseCard } from "../../components";
import { motion } from "framer-motion";

const Courses = () => {
  return (
    <div className="relative bg-cream/30 rounded-3xl mt-5 mx-4 overflow-hidden">
      <div className="absolute max-lg:-left-52 -bottom-40 lg:-left-12 w-[450px] h-[400px] bg-cream/40 rounded-full  border-[120px] lg:border-[120px] border-primary/20 drop-shadow-md"></div>
      <div className="backdrop-blur-2xl h-full">
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative container px-4 bg-transparent my-0 py-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between gap-8"
          >
            <div className="w-full flex flex-col justify-between lg:w-2/5 h-full">
              <div className="lg:text-left text-center flex flex-col">
                <span className="font-outfit uppercase text-base tracking-widest text-primary font-medium block mb-2 mx-auto lg:mx-0">
                  Top Courses
                </span>
                <h2 className="font-outfit font-medium text-5xl text-secondary leading-[3.25rem] mb-4">
                  Explore New Learning Horizons
                </h2>
              </div>
              <div className="lg:text-left text-center flex flex-col mt-auto mb-4">
                <p className="text-gray-500 font-publicsans mb-4 max-lg:max-w-xl max-lg:mx-auto lg:text-justify lg:mt-4">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Accusamus animi beatae exercitationem molestias, debitis
                  sapiente.
                </p>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-3/5 lg:pt-4"
            >
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
                  <SwiperSlide key={index} className="mb-8">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <CourseCard item={item} key={index} />
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default Courses;

const courses = [
  {
    id: 1,
    course_slug: "introduction-to-coding",
    title: "Introduction to Coding",
    content_short_description:
      "Learn the basics of programming using block-based coding tools like Scratch or Code.org.",
    course_thumbnail: null,
    category_name: "STEM Skills",
    created_by: "System",
    class_level_name: "Class 6 - 8",
    view_count: 0,
    enrolment_count: 0,
    created_at: "2025-01-08T09:44:07+05:30",
  },
  {
    id: 2,
    course_slug: "robotics-fundamentals",
    title: "Robotics Fundamentals",
    content_short_description:
      "Hands-on workshops to assemble and program simple robots.",
    course_thumbnail: null,
    category_name: "STEM Skills",
    created_by: "System",
    class_level_name: "Class 6 - 8",
    view_count: 0,
    enrolment_count: 0,
    created_at: "2025-01-08T09:44:07+05:30",
  },
  {
    id: 3,
    course_slug: "ai-and-ml-basics",
    title: "AI & ML Basics",
    content_short_description:
      "Explore AI concepts through games, puzzles, and fun activities.",
    course_thumbnail: null,
    category_name: "STEM Skills",
    created_by: "System",
    class_level_name: "Class 6 - 8",
    view_count: 0,
    enrolment_count: 0,
    created_at: "2025-01-08T09:44:07+05:30",
  },
  {
    id: 4,
    course_slug: "programming-with-python",
    title: "Programming with Python",
    content_short_description:
      "Dive into coding with text-based programming languages like Python.",
    course_thumbnail: null,
    category_name: "STEM Skills",
    created_by: "System",
    class_level_name: "Class 9 - 10",
    view_count: 0,
    enrolment_count: 0,
    created_at: "2025-01-08T09:44:07+05:30",
  },
  {
    id: 5,
    course_slug: "advanced-programming",
    title: "Advanced Programming",
    content_short_description:
      "Advanced topics in C++, Python, or JavaScript, including algorithms and data structures.",
    course_thumbnail: null,
    category_name: "STEM Skills",
    created_by: "System",
    class_level_name: "Class 11 - 12",
    view_count: 0,
    enrolment_count: 0,
    created_at: "2025-01-08T09:44:07+05:30",
  },
  {
    id: 6,
    course_slug: "creativity-and-innovation-workshops",
    title: "Creativity & Innovation Workshops",
    content_short_description:
      "Activities to boost creativity and problem-solving skills.",
    course_thumbnail: null,
    category_name: "Entrepreneurship",
    created_by: "System",
    class_level_name: "Class 6 - 8",
    view_count: 0,
    enrolment_count: 0,
    created_at: "2025-01-08T09:44:07+05:30",
  },
  {
    id: 7,
    course_slug: "business-basics",
    title: "Business Basics",
    content_short_description:
      "Learn the fundamentals of business structures and operations.",
    course_thumbnail: null,
    category_name: "Entrepreneurship",
    created_by: "System",
    class_level_name: "Class 9 - 10",
    view_count: 0,
    enrolment_count: 0,
    created_at: "2025-01-08T09:44:07+05:30",
  },
  {
    id: 8,
    course_slug: "advanced-entrepreneurship",
    title: "Advanced Entrepreneurship",
    content_short_description:
      "Master the skills required to start and run a business effectively.",
    course_thumbnail: null,
    category_name: "Entrepreneurship",
    created_by: "System",
    class_level_name: "Class 11 - 12",
    view_count: 0,
    enrolment_count: 0,
    created_at: "2025-01-08T09:44:07+05:30",
  },
  {
    id: 9,
    course_slug: "basics-of-money-management",
    title: "Basics of Money Management",
    content_short_description:
      "Understand the importance of budgeting and saving.",
    course_thumbnail: null,
    category_name: "Financial Literacy",
    created_by: "System",
    class_level_name: "Class 6 - 8",
    view_count: 0,
    enrolment_count: 0,
    created_at: "2025-01-08T09:44:07+05:30",
  },
];
