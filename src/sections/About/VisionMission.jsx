import { EyeIcon } from "@heroicons/react/24/outline";
import React from "react";
import { FaLightbulb } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const iconVariants = {
  hover: { scale: 1.1, transition: { duration: 0.3 } },
};

const VisionMission = () => {
  return (
    <div>
      <div className="relative bg-cream/40 rounded-3xl mt-5 mx-4 overflow-hidden">
        <div className="absolute max-lg:-left-52 -bottom-56 lg:-left-12 w-[450px] h-[400px] bg-cream/80 rounded-full border-[120px] lg:border-[120px] border-primary/30 drop-shadow-md"></div>
        <div className="absolute max-lg:-left-52 -top-40 lg:-right-32 w-[450px] h-[400px] bg-cream/70 rounded-full border-[120px] lg:border-[120px] border-primary/20 drop-shadow-md"></div>
        {/* Background Ring */}
        <div className="backdrop-blur-2xl h-full">
          <section className="relative container px-4 bg-transparent my-0 py-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row gap-16"
            >
              <motion.div
                variants={cardVariants}
                className="group flex flex-col lg:w-1/2 justify-center items-center gap-4 bg-gray-200/40 border-2 border-gray-300 backdrop-blur-3xl rounded-xl p-10"
              >
                <motion.div
                  variants={iconVariants}
                  whileHover="hover"
                  className="border-2 border-dashed border-secondary rounded-full p-1"
                >
                  <EyeIcon className="w-16 h-16 text-white bg-secondary/90 rounded-full p-3 group-hover:bg-primary" />
                </motion.div>
                <h2 className="font-outfit font-semibold text-secondary text-3xl">
                  Our Vision
                </h2>
                <p className="font-publicsans text-lg font-normal text-slate-500 mb-4 text-justify">
                  Our vision is to create a future where every student is
                  equipped with essential skills, knowledge, and confidence to
                  excel in their careers and contribute meaningfully to society.
                  We strive to foster a dynamic learning environment that
                  nurtures critical thinking, creativity, and adaptability.
                </p>
              </motion.div>

              <motion.div
                variants={cardVariants}
                className="group flex flex-col lg:w-1/2 justify-center items-center gap-4 bg-gray-200/40 border-2 border-gray-300 backdrop-blur-3xl rounded-xl p-10"
              >
                <motion.div
                  variants={iconVariants}
                  whileHover="hover"
                  className="border-2 border-dashed border-secondary rounded-full p-1"
                >
                  <TbTargetArrow className="w-16 h-16 text-white bg-secondary/90 rounded-full p-3 group-hover:bg-primary" />
                </motion.div>
                <h2 className="font-outfit font-semibold text-secondary text-3xl">
                  Our Mission
                </h2>
                <p className="font-publicsans text-lg font-normal text-slate-500 mb-4 text-justify">
                  To transform the learning experience of school students by
                  integrating skill-based education with academic growth.
                  Through strategic collaborations with schools, we aim to
                  bridge the gap between education and real-world opportunities,
                  empowering students to reach their full potential
                </p>
              </motion.div>
            </motion.div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
