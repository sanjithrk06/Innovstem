import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../components";
import bg from "../../assets/images/hero.jpg";

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
      <div
        className="relative h-[90vh] overflow-hidden bg-cover bg-no-repeat object-cover"
        style={{ backgroundImage: `url(${bg})` }}
      >
        {/* Content with backdrop blur */}
        <div className="relative h-full w-full backdrop-blur-sm bg-black/40">
          <div className=" flex justify-center gap-4 items-center h-full px-8 max-w-7xl mx-auto text-center">
            {/* Left Text Content */}
            <motion.div
              className="sm:max-w-3xl mx-auto bg-transparent"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h2
                variants={textVariants}
                className="font-outfit text-4xl/none text-primary font-medium tracking-tight sm:text-6xl/none"
              >
                Empowering Your Journey with E-Learning & Career Solutions
              </motion.h2>
              <motion.p
                variants={textVariants}
                className="font-publicsans text-whiteDim text-base font-normal mt-4"
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Placeat recusandae dolor assumenda nisi nihil, voluptas animi
                corrupti adipisci qui quos.
              </motion.p>
              <motion.div variants={textVariants}>
                <Button text={"Explore Services"} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
