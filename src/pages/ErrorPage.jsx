import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Assuming you're using React Router
import { BookOpen, ChevronLeft, GraduationCap } from "lucide-react";

// Custom SVG for a student with a "404" book
const StudentIllustration = () => (
  <svg
    width="200"
    height="200"
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-40 h-40 sm:w-48 sm:h-48"
  >
    {/* Student head */}
    <circle cx="100" cy="70" r="30" fill="#FFD1A9" />
    {/* Hair */}
    <path
      d="M70 50C70 30 130 30 130 50C130 70 110 80 100 80C90 80 70 70 70 50Z"
      fill="#4A3F35"
    />
    {/* Body */}
    <path
      d="M80 100C80 120 120 120 120 100L110 150H90L80 100Z"
      fill="#1E3A8A"
    />
    {/* Book with "404" */}
    <rect x="90" y="110" width="40" height="20" rx="5" fill="#F5A623" />
    <text
      x="110"
      y="125"
      fontSize="12"
      fill="#1E3A8A"
      textAnchor="middle"
      fontWeight="bold"
    >
      404
    </text>
    {/* Arms */}
    <path
      d="M80 110L70 130"
      stroke="#FFD1A9"
      strokeWidth="8"
      strokeLinecap="round"
    />
    <path
      d="M120 110L130 130"
      stroke="#FFD1A9"
      strokeWidth="8"
      strokeLinecap="round"
    />
  </svg>
);

// Error Page Component
const ErrorPage = () => {
  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  // Animation variants for child elements
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Animation for the student illustration
  const studentVariants = {
    hidden: { scale: 0, y: 100 },
    visible: {
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        type: "spring",
        stiffness: 80,
      },
    },
    wave: {
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  };

  // Animation for the button
  const buttonVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        type: "spring",
        stiffness: 120,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 20px rgba(30, 58, 138, 0.4)",
      background: "linear-gradient(to right, #F5A623, #1E3A8A)",
      transition: {
        duration: 0.3,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  // Animation for floating books/papers
  const bookVariants = {
    hidden: { opacity: 0, y: -100, rotate: 0 },
    visible: {
      opacity: 1,
      y: 300,
      rotate: 360,
      transition: {
        duration: Math.random() * 3 + 2,
        ease: "easeIn",
        repeat: Infinity,
        repeatType: "loop",
        delay: Math.random() * 2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-cream/40 flex items-center justify-center p-6 relative overflow-hidden">
        
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/blackboard.png')] opacity-10" />
      
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          variants={bookVariants}
          initial="hidden"
          animate="visible"
          className="absolute text-[#F5A623]"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * -20}%`,
          }}
        >
          <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 opacity-60" />
        </motion.div>
      ))}
      <motion.div
        className="absolute top-0 left-0 w-48 h-48 bg-[#1E3A8A]/10 rounded-full blur-2xl -translate-x-24 -translate-y-24"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "loop" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-48 h-48 bg-[#F5A623]/10 rounded-full blur-2xl translate-x-24 translate-y-24"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "loop" }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-md relative z-10 bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-2xl shadow-[#1E3A8A]/20"
      >
        
        <motion.div
          variants={studentVariants}
          animate={["visible", "wave"]}
          className="mx-auto mb-8 relative flex justify-center items-center"
        >
          <StudentIllustration />
          
          <motion.div
            className="absolute inset-0 rounded-full bg-[#F5A623]/20 blur-xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
          />
        </motion.div>

        {/* <motion.h1
          variants={itemVariants}
          className="text-7xl sm:text-9xl font-extrabold text-[#1E3A8A] tracking-tighter mb-4 drop-shadow-lg"
        >
          404
        </motion.h1> */}

        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl font-bold text-secondary mb-4 tracking-wide"
        >
          Lost in Learning!
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className=" text-base text-secondary/80 font-publicsans mb-4"
        >
          It seems you've wandered off the curriculum. Let's get you back to
          your learning journey!
        </motion.p>

        <motion.div
          variants={itemVariants}
          className=" flex justify-center items-center"
        >
          <motion.div
            className=" text-primary font-medium hover:text-primary/80 transition-colors font-publicsans"
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to={"/"} className="inline-flex items-center gap-1">
              <ChevronLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ErrorPage;
