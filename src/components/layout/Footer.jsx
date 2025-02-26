import React from "react";
import { Mail } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "../../assets/logo.png";

const Footer = () => {
  // Container animation variants
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

  // Section animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  // List item animation variants
  const listItemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="bg-gradient-to-t from-cream/40 via-cream/30 from-70% to-cream/20 shadow-lg shadow-secondary/10 p-10"
    >
      <motion.div
        variants={containerVariants}
        className="max-w-7xl mx-auto flex flex-col flex-wrap sm:flex-row items-center text-center gap-0"
      >
        {/* Logo and Info Section */}
        <motion.div
          variants={sectionVariants}
          className="lg:w-5/12 w-full flex flex-col items-center sm:text-start sm:items-start sm:px-4 py-6 lg:py-2 gap-3"
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            src={logo}
            className="w-56"
            alt="Innovstem"
          />
          <motion.p variants={listItemVariants} className="nav-content">
            Innovstem is a dynamic startup transforming everyday products by
            offering innovative, eco-friendly alternatives to traditional
            plastics.{" "}
          </motion.p>
          <motion.span variants={listItemVariants} className="nav-content">
            © Copyright {new Date().getFullYear()}{" "}
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/#"
              className="hover:underline"
            >
              Innovstem
            </motion.a>
          </motion.span>
        </motion.div>

        {/* Navigation Section */}
        <motion.div
          variants={sectionVariants}
          className="lg:w-4/12 sm:w-8/12 border-y-2 py-6 sm:py-2 sm:border-y-0 sm:border-r-2 lg:border-x-2 border-secondary/50 px-4 flex flex-col items-center justify-start gap-4"
        >
          <motion.h2 variants={listItemVariants} className="nav-title py-2">
            Navigation
          </motion.h2>
          <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start sm:text-start gap-2 sm:gap-6">
            <motion.ul className="flex flex-col flex-wrap gap-2 lg:pl-4 font-normal">
              {["About", "Services", "Webinars", "Blogs"].map((item) => (
                <motion.li
                  key={item}
                  variants={listItemVariants}
                  whileHover={{ x: 5 }}
                >
                  <a
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="nav-content hover:text-primary"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
            <motion.ul className="flex flex-col flex-wrap gap-2 lg:pl-4 font-normal">
              {[
                "Career Guidance",
                "STEM Skills",
                "Defence Training",
                "Entrepreneurship",
              ].map((item) => (
                <motion.li
                  key={item}
                  variants={listItemVariants}
                  whileHover={{ x: 5 }}
                >
                  <a
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="nav-content hover:text-primary"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          variants={sectionVariants}
          className="lg:w-3/12 sm:w-4/12 text-center flex flex-col py-6 lg:py-2 gap-3"
        >
          <motion.h2 variants={listItemVariants} className="nav-title py-2">
            Contact
          </motion.h2>
          <motion.p variants={listItemVariants} className="nav-content">
            +123 4567 9876
          </motion.p>
          <motion.p variants={listItemVariants} className="nav-content">
            innovstem@gmail.com
          </motion.p>
          <motion.ul
            variants={listItemVariants}
            className="flex justify-center gap-1 space-x-2"
          >
            {/* Social media icons section - commented out but animated */}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
