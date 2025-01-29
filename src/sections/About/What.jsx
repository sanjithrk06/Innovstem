import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaChalkboardTeacher,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const accordionData = [
  {
    title: "STEM and Skills Training",
    content:
      "Our hands-on workshops and gamified learning modules inspire students to delve into Science, Technology, Engineering, and Mathematics. From robotics to coding, we make learning interactive and fun while equipping students with essential 21st-century skills.",
    icon: <FaChalkboardTeacher />,
  },
  {
    title: "Career Guidance",
    content: "Content for Career Guidance.",
    icon: <FaChalkboardTeacher />,
  },
  {
    title: "Personality Development",
    content: "Content for Personality Development.",
    icon: <FaChalkboardTeacher />,
  },
  {
    title: "Soft Skills Training",
    content: "Content for Soft Skills Training.",
    icon: <FaChalkboardTeacher />,
  },
  {
    title: "Leadership Programs",
    content: "Content for Leadership Programs.",
    icon: <FaChalkboardTeacher />,
  },
];

const What = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-50 py-20"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 lg:mb-8 flex justify-center items-center flex-col gap-x-0 gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between max-md:max-w-lg max-md:mx-auto"
        >
          <div className="relative w-full text-center lg:text-left lg:w-2/4">
            <span className="font-outfit uppercase text-lg tracking-widest text-primary font-medium block mb-2 mx-auto lg:mx-0">
              What We Do
            </span>
            <h2 className="font-outfit text-5xl font-semibold text-secondary leading-[3.25rem] lg:mb-6 mx-auto max-w-max lg:max-w-md lg:mx-0">
              Our Toolkit for Your Growth!
            </h2>
          </div>
          <div className="relative w-full text-center lg:text-left lg:w-2/4">
            <p className="font-publicsans text-lg font-normal text-slate-500 mb-5">
              From interactive courses to personalized learning paths, we offer
              everything you need to grow, create, and thrive in the skills that
              matter most to you!
            </p>
          </div>
        </motion.div>
        <div className="flex flex-col-reverse md:flex-row-reverse gap-24 justify-center items-start">
          <div className="flex flex-col md:flex-row md:w-3/5 gap-24 justify-center items-start">
            <div className="flex flex-col gap-4 w-full mx-auto">
              {accordionData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border border-slate-100 rounded-none shadow-xl bg-white"
                >
                  <button
                    className="flex justify-between items-center w-full p-4 text-secondary/80 font-publicsans uppercase font-semibold text-lg rounded-t-xl"
                    onClick={() => toggleAccordion(index)}
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 rounded-xl text-primary shadow p-2">
                        <div className="w-8 h-8 flex justify-center items-center">
                          {item.icon}
                        </div>
                      </div>
                      {item.title}
                    </div>
                    {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={
                      openIndex === index
                        ? { height: "auto", opacity: 1 }
                        : { height: 0, opacity: 0 }
                    }
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 text-slate-600 font-publicsans rounded-b-xl">
                      {item.content}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="md:w-2/5 mt-6"
          >
            <div className="relative group">
              <img
                className="w-full transition-transform duration-300 relative z-10 "
                src={`https://vidyanchalschool.com/wp-content/uploads/2023/03/Career-Guidance-for-School-Students.webp`}
                alt="office content"
              />
              <div className="absolute inset-0 -z-0 duration-300">
                <div className="absolute top-0 right-0 h-36 w-28 border-4 border-secondary transition-transform duration-300 translate-x-5 -translate-y-5"></div>
                <div className="absolute bottom-0 left-0 h-36 w-28 bg-secondary transition-transform duration-300 -translate-x-5 translate-y-5"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default What;
