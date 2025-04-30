import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CircleCheckBig } from "lucide-react";
import { Link } from "react-router-dom";
import { images } from "../../assets/images";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const servicesItem = [
  {
    imageKey: "Scareer",
    name: "Career Guidance and Counseling",
    link: "career-guidance",
    description:
      "Embark on your ideal career path with InnovSTEM’s expert-led, personalized guidance. Our scientific approach and inspiring resources empower students to make confident, future-ready choices!",
    points: [
      "Tailored Assessments: Uncover your strengths and passions with psychometric tests and skill evaluations.",
      "One-on-One Counseling: Get a custom career roadmap and expert advice for you and your family.",
      "Industry Insights: Connect with professionals through webinars to explore emerging career trends.",
    ],
  },
  {
    imageKey: "Sstem",
    name: "STEM and Skills Training",
    link: "stem-skills",
    description:
      "Master the future with InnovSTEM’s hands-on STEM training, blending creativity and cutting-edge technology. From coding to robotics, we equip students with skills to lead the tech revolution!",
    points: [
      "Coding Mastery: Learn Python, Java, and HTML/CSS through practical, project-based courses.",
      "Robotics & AI: Build robots, explore automation, and dive into AI and machine learning basics.",
      "IoT Innovation: Create smart devices and integrate them with cloud platforms for real-world impact.",
      "Daily Discovery: Experiment with fun, hands-on STEM projects to spark curiosity and problem-solving.",
    ],
  },
  {
    imageKey: "Sdefense",
    name: "Defense Training Programs",
    link: "defense-training",
    description:
      "Prepare for a heroic future with InnovSTEM’s dynamic defense training, designed to build strength, strategy, and patriotism. Join us to develop the skills and spirit to serve proudly in the Indian Army!",
    points: [
      "Physical Fitness: Train with rigorous exercises to meet the Indian Army’s high physical standards.",
      "Tactical Skills: Master strategy, leadership, and problem-solving for real-world defense challenges.",
      "Tech in Defense: Explore robotics, IoT, and AI applications tailored for modern military needs.",
      "Path to the Indian Army: Get expert guidance on recruitment, exams, and a career defending the nation.",
    ],
  },
  {
    imageKey: "Sentrepreneurship",
    name: "Entrepreneurship and Financial Literacy",
    link: "entrepreneurship",
    description:
      "Ignite your entrepreneurial spirit with InnovSTEM’s hands-on training, turning ideas into impactful ventures. Build the skills, mindset, and network to launch your own success story!",
    points: [
      "Idea Development: Learn to brainstorm, validate, and refine innovative business concepts.",
      "Business Skills: Master planning, marketing, and financial strategies for startup success.",
      "Tech Innovation: Use coding, IoT, and AI to create cutting-edge products or services.",
      "Mentorship & Pitching: Connect with industry experts and practice pitching to investors.",
    ],
  },
];

const Content = () => {
  return (
    <>
      {servicesItem.map((item, index) => (
        <section
          key={index}
          className={
            index % 2 === 0 ? "bg-gray-100 drop-shadow-sm" : "bg-white"
          }
        >
          <div
            className={`gap-24 items-center py-16 px-8 mx-auto max-w-screen-xl flex ${
              index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
            } flex-col lg:py-24 lg:px-6`}
          >
            {/* Image block */}
            <motion.div
              className="grid grid-cols-1 gap-4 lg:w-2/5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
            >
              <div className="relative group">
                <img
                  className="w-full transition-transform duration-300 relative z-10"
                  src={images[item.imageKey]}
                  alt={item.name}
                />
                <div className="absolute inset-0 -z-0 duration-300">
                  <div className="absolute top-0 right-0 h-36 w-28 border-4 border-secondary transition-transform duration-300 translate-x-5 -translate-y-5"></div>
                  <div className="absolute bottom-0 left-0 h-36 w-28 bg-secondary transition-transform duration-300 -translate-x-5 translate-y-5"></div>
                </div>
              </div>
            </motion.div>

            {/* Text Content block */}
            <motion.div
              className="font-light text-gray-500 sm:text-lg text-left lg:w-3/5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
            >
              <h2
                className={`mb-8 text-4xl font-outfit tracking-wide uppercase text-center ${
                  index % 2 === 1 ? "lg:text-right" : "lg:text-left"
                } font-medium text-secondary`}
              >
                {item.name}
              </h2>
              <p className="font-publicsans text-lg font-normal text-slate-500 mb-4 text-justify">
                {item.description}
              </p>
              <ul className="font-publicsans text-xl font-normal text-slate-500 mb-3 text-justify">
                {item.points.map((point, idx) => {
                  const [title, ...desc] = point.split(": ");
                  return (
                    <li
                      key={idx}
                      className="flex flex-row gap-4 justify-start items-center font-semibold pb-2"
                    >
                      <CircleCheckBig className="w-5 h-5 text-primary" />
                      <div>
                        <span className="text-secondary">{title}</span>:{" "}
                        <span className="font-publicsans text-lg font-normal text-slate-500 mb-4 text-justify">
                          {desc.join(": ")}
                        </span>
                      </div>
                    </li>
                  );
                })}
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
            </motion.div>
          </div>
        </section>
      ))}
    </>
  );
};

export default Content;
