import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    intervalId = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [nextSlide]);

  return (
    <div className="relative md:h-[85vh] w-full bg-cream/20 overflow-hidden py-10">
      <div className="max-w-7xl p-1 mx-auto px-4 md:px-8 mb-5 max-md:mb-12">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
          {/* Image Section */}
          <div className="relative w-full lg:w-1/2 h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
            <motion.img
              src={STEM} // Updated to show current slide image
              alt="Hero illustration"
              className="w-full h-full rounded-2xl p-6 object-contain"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Text Content Section with Navigation */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center max-lg:text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${currentIndex}`}
                className="flex flex-col justify-start items-start"
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

                {/* <p className="text-lg text-blue-900 font-medium font-outfit max-lg:mx-auto inline-flex flex-row items-center justify-start cursor-pointer gap-2 mb-8">
                  Know More <ArrowRight className="w-5 h-5" />
                </p> */}

                {/* Navigation Controls */}
                <div className="flex items-center justify-center gap-4">
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
                          currentIndex === index
                            ? "bg-blue-600 w-4"
                            : "bg-gray-300"
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
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
