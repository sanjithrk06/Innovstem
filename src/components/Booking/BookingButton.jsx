import { useState } from "react";
import { CalendarIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import PackagesModal from "./PackagesModal";
import StatusChecker from "./StatusChecker";

// Framer Motion variants for FAB
const fabVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

// Variants for tooltip
const tooltipVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function BookingButton() {
  const [showPackages, setShowPackages] = useState(false);
  const [showStatusChecker, setShowStatusChecker] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className="fixed bottom-8 right-8 z-50">
        <motion.div
          variants={fabVariants}
          initial="hidden"
          animate="visible"
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.button
            onClick={() => setShowPackages(true)}
            className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white shadow-xl hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-indigo-300 border border-indigo-200/50 transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              scale: [1, 1.05, 1],
              transition: { repeat: Infinity, duration: 2 },
            }}
          >
            <CalendarIcon className="h-7 w-7" />
            <span className="sr-only">Book Appointment</span>
          </motion.button>
          <AnimatePresence>
            {isHovered && (
              <motion.div
                variants={tooltipVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="absolute bottom-20 right-0 px-3 py-2 bg-indigo-900 text-white text-sm font-publicsans rounded-lg shadow-lg"
              >
                Book Appointment
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <PackagesModal
        isOpen={showPackages}
        onClose={() => setShowPackages(false)}
        onStatusCheck={() => {
          setShowPackages(false);
          setShowStatusChecker(true);
        }}
      />

      <StatusChecker
        isOpen={showStatusChecker}
        onClose={() => setShowStatusChecker(false)}
        onBackToPackages={() => {
          setShowStatusChecker(false);
          setShowPackages(true);
        }}
      />
    </>
  );
}
