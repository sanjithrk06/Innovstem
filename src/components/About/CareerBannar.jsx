import { motion } from "framer-motion";
import { Briefcase, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { images } from "../../assets/images";

const CareersBanner = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat  py-16 m-10 max-md:mx-5 rounded-3xl"
      style={{ backgroundImage: `url(${images.Career})` }}
    >
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-secondary/80 z-0  rounded-3xl" />

      {/* Animated background blur elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10 z-0">
        <div className="absolute -left-10 top-10 w-40 h-40 rounded-full bg-blue-600 blur-xl" />
        <div className="absolute right-20 top-20 w-60 h-60 rounded-full bg-blue-400 blur-xl" />
        <div className="absolute left-1/3 bottom-5 w-40 h-40 rounded-full bg-blue-300 blur-xl" />
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto px-4 md:px-8 text-center">
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl md:text-5xl font-bold font-outfit text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Build the Future with Us
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl font-publicsans text-white/90 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Join our mission to empower the next generation of innovators.
            Explore exciting career opportunities and make a difference.
          </motion.p>
          <Link to="/careers">
            <motion.button
              className="flex items-center gap-2 bg-blue-600 text-white font-publicsans font-medium px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Briefcase className="w-5 h-5" />
              Explore Careers
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default CareersBanner;
