import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../../components";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Pair from "../../assets/images/pair.svg";
import LearnToCode from "../../assets/images/learntocode.svg";
import Learn from "../../assets/images/learn.png";
import STEM from "../../assets/images/stem.png";
import Hero1 from "../../assets/images/hero1.png";
import Hero2 from "../../assets/images/hero2.png";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const slides = [
    {
      title: "Empowering Young Minds with Future-Ready Skills!",
      description:
        "Welcome to InnovSTEM - where we cultivate the next generation of innovators and leaders.",
      image: Hero2,
    },
    {
      title: "STEM Skills Open Doors to Limitless Opportunities!",
      description:
        "Explore the vast world of Technology, Space, Healthcare, AI, and Defense through hands-on learning.",
      image: LearnToCode,
    },
    {
      title: "Learn to Code Through Interactive Games and Fun Challenges!",
      description:
        "Master programming concepts through engaging gamified experiences designed for young minds.",
      image: STEM,
    },
    {
      title: "Future Leaders Need Financial Wisdom and Business Acumen!",
      description:
        "Develop entrepreneurial skills and financial literacy through practical, real-world scenarios.",
      image: Pair,
    },
    {
      title: "Discover Your Passion and Build a Path to Success!",
      description:
        "Get personalized career guidance and specialized training for defense aspirations.",
      image: Hero1,
    },
  ];

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  }, [slides.length]);

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    let intervalId;
    if (!isHovered) {
      intervalId = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isHovered, nextSlide]);

  return (
    <div
      className="relative h-[85vh] w-full bg-cream/20 overflow-hidden py-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-5 max-md:mb-12">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
          {/* Image Section on Top in Mobile and Right in Desktop */}
          <div className="relative w-full lg:w-1/2 h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute w-full h-full"
              >
                <motion.img
                  src={slides[currentIndex].image}
                  alt="Hero illustration"
                  className="w-full h-full rounded-2xl p-6 object-contain"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Text Content Section */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${currentIndex}`}
              className="w-full lg:w-1/2  flex flex-col justify-center max-lg:text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold font-outfit mb-6 text-secondary">
                {slides[currentIndex].title}
              </h2>

              <p className="text-lg md:text-xl mb-8 max-md:mb-4 text-slate-500 font-publicsans">
                {slides[currentIndex].description}
              </p>

              <p className="text-lg text-blue-900 font-medium font-outfit max-lg:mx-auto inline-flex flex-row items-center justify-start cursor-pointer gap-2">
                Know More <ArrowRight className="w-5 h-5" />
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-10">
        <button
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
          onClick={prevSlide}
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>

        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                currentIndex === index ? "bg-blue-600 w-4" : "bg-gray-300"
              }`}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
            />
          ))}
        </div>

        <button
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
          onClick={nextSlide}
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
