import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CircleCheckBig } from "lucide-react";
import { Link } from "react-router-dom";

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const servicesItem = [
  {
    name: "Career Guidance and Counseling",
    link: "career-guidance",
  },
  {
    name: "STEM and Skills Training",
    link: "stem-skills",
  },
  {
    name: "Defense Training Programs",
    link: "defense-training",
  },
  {
    name: "Entrepreneurship and Financial Literacy",
    link: "entrepreneurship",
  },
  {
    name: "Holistic Development",
    link: "#",
  },
];

const Content = () => {
  return (
    <>
      {servicesItem.map((item, index) => (
        <motion.section
          key={index}
          className={
            index % 2 === 0 ? "bg-gray-100 drop-shadow-sm" : "bg-white"
          }
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeInVariants}
        >
          <div
            className={`gap-24 items-center py-16 px-8 mx-auto max-w-screen-xl flex ${
              index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
            } flex-col lg:py-24 lg:px-6`}
          >
            <div className="grid grid-cols-1 gap-4 lg:w-2/5">
              <div className="relative group">
                <img
                  className="w-full transition-transform duration-300 relative z-10"
                  src={`https://vidyanchalschool.com/wp-content/uploads/2023/03/Career-Guidance-for-School-Students.webp`}
                  alt="office content"
                />
                <div className="absolute inset-0 -z-0 duration-300">
                  <div className="absolute top-0 right-0 h-36 w-28 border-4 border-secondary transition-transform duration-300 translate-x-5 -translate-y-5"></div>
                  <div className="absolute bottom-0 left-0 h-36 w-28 bg-secondary transition-transform duration-300 -translate-x-5 translate-y-5"></div>
                </div>
              </div>
            </div>
            <div className="font-light text-gray-500 sm:text-lg text-left lg:w-3/5">
              <h2
                className={`mb-8 text-4xl font-outfit tracking-wide uppercase text-center ${
                  index % 2 === 1 ? "lg:text-right" : "lg:text-left"
                } font-medium text-secondary`}
              >
                {item.name}
              </h2>
              <p className="font-publicsans text-lg font-normal text-slate-500 mb-4 text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Eligendi obcaecati consequatur quidem sunt reiciendis odit
                pariatur nam maiores sint eum ducimus voluptas, ipsa consectetur
                amet itaque cumque repudiandae quisquam iure iste debitis.
              </p>
              <ul className="font-publicsans text-xl font-normal text-slate-500 mb-3 text-justify">
                {[
                  "Defense Training Opportunities",
                  "Skill Development Initiatives",
                  "Career Guidance Programs",
                  "Comprehensive STEM Training",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex flex-row gap-4 justify-start items-center font-semibold pb-2"
                  >
                    <span>
                      <CircleCheckBig className="w-5 h-5 text-primary" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                className={`font-medium font-publicsans text-secondary/80 flex flex-row gap-2 justify-start ${
                  index % 2 === 1 ? "ml-auto" : ""
                } items-center hover:text-primary`}
                to={`/courses/${item.link}`}
              >
                Know More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.section>
      ))}
    </>
  );
};

export default Content;
