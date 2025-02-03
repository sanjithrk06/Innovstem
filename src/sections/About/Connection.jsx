import { CircleCheckBig } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

// Animation variants for the container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

// Animation variants for text content
const textVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.5,
    },
  },
};

// Image section animation variants
const imageVariants = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 1,
    },
  },
};

// List item animation variants
const listItemVariants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Connection = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true, amount: 0.2 }}
      className="gap-20 items-center py-16 px-8 mx-auto max-w-screen-xl flex md:flex-row flex-col lg:px-6"
    >
      <motion.div
        variants={textVariants}
        className="font-light text-gray-500 sm:text-lg text-left lg:w-3/6 px-6"
      >
        <motion.div
          variants={textVariants}
          className="relative w-full text-left"
        >
          <motion.span
            variants={textVariants}
            className="font-outfit uppercase text-xl tracking-widest text-primary font-medium block mb-2 mx-auto lg:mx-0"
          >
            OUR CONNECTION
          </motion.span>
          <motion.h2
            variants={textVariants}
            className="font-outfit text-5xl font-semibold text-secondary leading-[3.25rem] lg:mb-6 mx-auto max-w-max lg:max-w-md lg:mx-0"
          >
            SCHOOL PARTNERSHIPS
          </motion.h2>
        </motion.div>
        <motion.p
          variants={textVariants}
          className="font-publicsans text-lg font-normal text-slate-500 mb-3 mt-6 text-justify"
        >
          At InnovSTEM, we are proud to partner with SKHV Matric & HSC School,
          Kanchinagar, to empower students with future-ready skills and holistic
          career guidance. This collaboration focuses on:
        </motion.p>
        <motion.ul
          variants={containerVariants}
          className="font-publicsans text-xl font-normal text-secondary/80 mb-3 px-4 text-justify"
        >
          {[
            "Defense Training Opportunities",
            "Skill Development Initiatives",
            "Career Guidance Programs",
            "Comprehensive STEM Training",
          ].map((item, index) => (
            <motion.li
              key={index}
              variants={listItemVariants}
              className="flex flex-row gap-4 justify-start items-center font-semibold pb-2"
            >
              <span>
                <CircleCheckBig className="w-5 h-5 text-primary" />
              </span>
              {item}
            </motion.li>
          ))}
        </motion.ul>
        <motion.p
          variants={textVariants}
          className="font-publicsans text-lg font-normal text-slate-500 mb-4 text-justify"
        >
          Through this partnership, we aim to inspire the students of SKHV
          Matric & HSC School to explore their potential and achieve excellence
          in their chosen paths.
        </motion.p>
      </motion.div>

      <motion.div
        variants={imageVariants}
        className="grid grid-cols-1 gap-4 lg:w-3/6 lg:p-10"
      >
        <div className="relative group">
          <img
            className="w-full transition-transform duration-300 relative z-10"
            src={`https://vidyanchalschool.com/wp-content/uploads/2023/03/Career-Guidance-for-School-Students.webp`}
            alt="office content"
          />

          <div className="absolute z-10 top-0 left-0 bg-secondary/80 transition-transform duration-300 -translate-x-5 translate-y-5 p-6 flex justify-center items-center">
            <p className="inline-block text-left text-wrap max-w-xs text-cream text-xl font-medium">
              SKHV Matric & HSC School, Kanchinagar
            </p>
          </div>

          <div className="absolute inset-0 -z-0 duration-300">
            <div className="absolute top-0 right-0 h-36 w-28 border-4 border-secondary transition-transform duration-300 translate-x-5 -translate-y-5" />
            <div className="absolute bottom-0 left-0 h-36 w-28 bg-secondary transition-transform duration-300 -translate-x-5 translate-y-5" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Connection;
