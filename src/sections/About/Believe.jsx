import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

const Believe = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white py-10"
    >
      <div className=" container gap-20 items-center flex lg:flex-row flex-col-reverse">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 gap-4 md:w-4/5 lg:w-2/5 mx-3 "
        >
          <div className="relative group">
            <img
              className="w-full transition-transform duration-300 relative z-10 rounded-3xl"
              src={`https://vidyanchalschool.com/wp-content/uploads/2023/03/Career-Guidance-for-School-Students.webp`}
              alt="office content"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="font-light text-gray-500 sm:text-lg text-left lg:w-3/5"
        >
          <div className="relative w-full text-center lg:text-left mb-6">
            <span className="font-outfit uppercase text-xl tracking-widest text-primary font-medium block mb-2 mx-auto lg:mx-0">
              Core Values
            </span>
            <h2 className="font-outfit text-5xl font-semibold text-secondary leading-[3.25rem] lg:mb-6 mx-auto max-w-md lg:mx-0">
              What We Believe
            </h2>
          </div>
          <p className="font-publicsans indent-10 text-lg font-normal text-slate-500 mb-4 mx-3 text-justify">
            Welcome to InnovSTEM, where innovation and education come together
            to shape the future! We are a forward-thinking organization
            committed to Transforming how young minds learn, grow, and prepare
            for tomorrow . By focusing on{" "}
            <b className=" text-secondary/80">
              Skills development, Personalized Career Guidance, and Holistic
              Training
            </b>
            , we empower students from classes 6 to 12 to excel academically,
            professionally, and personally.
          </p>
          <p className="font-publicsans indent-10 text-lg font-normal text-slate-500 mb-4 mx-3 text-justify">
            Our goal is to help students discover their unique talents, prepare
            for future careers, and thrive in all aspects of life. Together, we
            are shaping a generation ready to succeed and contribute
            meaningfully to the world.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Believe;
