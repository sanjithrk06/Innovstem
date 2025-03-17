import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../components";
import servicelogo from "../../assets/images/service.png";
import { ArrowRight } from "lucide-react";

const Hero = () => {
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
      <div className="relative h-[90vh] overflow-hidden">
        {/* Content with backdrop blur */}
        <div className="relative h-full w-full backdrop-blur-md bg-cream/20">
          <div className="flex flex-col-reverse lg:flex-row justify-center lg:justify-between gap-4 items-center h-full px-8 max-w-7xl mx-auto text-left">
            {/* Left Text Content */}
            <motion.div
              className="sm:max-w-lg bg-transparent"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                variants={textVariants}
                className="font-outfit text-xl text-primary font-normal tracking-wider uppercase sm:text-2xl"
              >
                Our Services
              </motion.h1>
              <motion.h2
                variants={textVariants}
                className="text-4xl md:text-6xl font-bold font-outfit mb-6 text-secondary"
              >
                Empowering Your Journey with E-Learning & Career Solutions
              </motion.h2>
              <motion.p
                variants={textVariants}
                className="text-lg md:text-xl mb-4 max-md:mb-4 text-slate-500 font-publicsans"
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Placeat recusandae dolor assumenda nisi nihil, voluptas animi
                corrupti adipisci qui quos.
              </motion.p>
              <motion.div variants={textVariants}>
                <p className="text-lg text-blue-900 font-medium font-outfit max-lg:mx-auto inline-flex flex-row items-center justify-start cursor-pointer gap-2">
                  Know More <ArrowRight className="w-5 h-5" />
                </p>{" "}
              </motion.div>
            </motion.div>

            {/* Right Image Content */}
            <motion.div
              className="relative lg:w-1/2 h-2/5 w-full lg:h-3/5"
              variants={imageVariants}
              initial="hidden"
              animate="visible"
            >
              <img
                alt="E-Learning Image"
                src={servicelogo}
                className="w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
