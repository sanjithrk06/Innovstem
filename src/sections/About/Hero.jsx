import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../components";

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  const shapeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative h-[90vh] overflow-hidden">
      {/* Rotated shape */}
      <motion.div
        className="absolute max-lg:-left-52 -top-36 lg:-left-80 w-[1400px] h-[1300px] rotate-45 bg-cream/70 rounded drop-shadow-md"
        variants={shapeVariants}
        initial="hidden"
        animate="visible"
      />

      {/* Content with backdrop blur */}
      <div className="relative h-full w-full backdrop-blur-md bg-white/40">
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between gap-4 items-center h-full px-8 max-w-7xl mx-auto text-left">
          {/* Left Text Content */}
          <motion.div
            className="sm:max-w-lg bg-transparent"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <motion.h1
              variants={textVariants}
              className="font-outfit text-xl text-primary font-normal tracking-wider uppercase sm:text-2xl"
            >
              Our Services
            </motion.h1>
            <motion.h2
              variants={textVariants}
              className="font-outfit text-4xl/none text-secondary font-medium tracking-tight sm:text-6xl/none"
            >
              Empowering Your Journey with E-Learning & Career Solutions
            </motion.h2>
            <motion.p
              variants={textVariants}
              className="font-publicsans text-slate-800 text-base font-normal mt-4"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
              recusandae dolor assumenda nisi nihil, voluptas animi corrupti
              adipisci qui quos.
            </motion.p>
            <motion.div variants={textVariants}>
              <Button text={"Explore Services"} />
            </motion.div>
          </motion.div>

          {/* Right Image Content */}
          <motion.div
            className="relative lg:w-1/2"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <img
              alt="E-Learning Image"
              src="https://pagedone.io/asset/uploads/1696244059.png"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
