import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../components";

const Hero = ({ title, description, longDescription, imageUrl }) => {
  // Animation variants for text content
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Container variant for staggered children animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  // Image animation variants
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.4,
      },
    },
  };

  return (
    <>
      <div className="relative h-[82vh] overflow-hidden">
        {/* Content with backdrop blur */}
        <div className="relative h-full w-full backdrop-blur-md bg-cream/20">
          <div className="flex flex-col-reverse lg:flex-row justify-center lg:justify-between gap-4 items-center h-full px-8 max-w-7xl mx-auto text-left">
            <motion.div
              className="relative lg:w-1/2 h-2/5 w-full lg:h-3/5"
              variants={imageVariants}
              initial="hidden"
              animate="visible"
            >
              <img
                alt="E-Learning Image"
                src={`https://admin-dev.innovstem.com/storage/${imageUrl}`}
                className="w-full h-full rounded-lg shadow-lg"
              />
            </motion.div>

            <motion.div
              className="sm:max-w-lg bg-transparent"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                variants={textVariants}
                className="font-outfit text-4xl text-primary font-normal tracking-wider sm:text-5xl"
              >
                {title}
              </motion.h1>
              {/* <motion.h2
                variants={textVariants}
                className="font-outfit text-4xl/none text-secondary font-medium tracking-tight sm:text-6xl/none"
              >
                Empowering Your Journey with E-Learning & Career Solutions
              </motion.h2> */}
              <motion.p
                variants={textVariants}
                className="font-publicsans text-slate-800 text-base font-normal mt-4"
              >
                {description}
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
