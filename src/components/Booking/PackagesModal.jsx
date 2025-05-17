import { useState, useEffect } from "react";
import { Dialog, Transition, Tab } from "@headlessui/react";
import { Fragment } from "react";
import {
  CheckIcon,
  XMarkIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import BookingForm from "./BookingForm";
import axios from "axios";
import { toast } from "react-toastify";

// Dummy data fallback
const dummyPackages = [
  {
    id: 1,
    category: "Student",
    package_name: "Basic Counseling",
    price_inr: 499.0,
    duration: "30 min",
    includes: "One-on-one session\nCareer guidance\nPersonalized plan",
    active: true,
  },
  {
    id: 2,
    category: "Parental",
    package_name: "Awareness Session",
    price_inr: 999.0,
    duration: "1 hour",
    includes: "Parenting strategies\nChild development insights\nQ&A session",
    active: true,
  },
  {
    id: 3,
    category: "Teacher",
    package_name: "Classroom Management",
    price_inr: 799.0,
    duration: "45 min",
    includes: "Behavior management\nTeaching techniques\nSupport resources",
    active: true,
  },
  {
    id: 4,
    category: "Overall",
    package_name: "Comprehensive Counseling",
    price_inr: 1499.0,
    duration: "90 min",
    includes: "Holistic assessment\nTailored strategies\nFollow-up plan",
    active: true,
  },
];

// Framer Motion variants for modal
const modalVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, y: 50, transition: { duration: 0.3, ease: "easeIn" } },
};

// Variants for package cards
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.4, ease: "easeOut" },
  }),
};

// Variants for tabs
const tabVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.3, ease: "easeOut" },
  }),
};

// Variants for error message
const errorVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function PackagesModal({ isOpen, onClose, onStatusCheck }) {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const categories = ["student", "parental", "teacher", "overall"];

  // Fetch packages on mount
  useEffect(() => {
    const fetchPackages = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://admin-dev.innovstem.com/api/packages"
        );
        // Normalize API response data
        const normalizedPackages = response.data.data.map((pkg) => ({
          id: pkg.id,
          category: pkg.category,
          package_name: pkg.package_name,
          price_inr: parseFloat(pkg.price_inr), // Convert string to number
          duration: pkg.duration || "Not specified", // Handle null duration
          includes: pkg.includes.replace(/ \+/g, "\n"), // Replace " +" with newline for splitting
          active: true, // Assume active since API returns active packages
        }));
        setPackages(normalizedPackages);
      } catch (err) {
        console.error("Failed to fetch packages:", err);
        setError("Unable to load packages. Using fallback data.");
        toast.warning("Failed to load packages. Displaying sample data.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        });
        setPackages(dummyPackages); // Fallback to dummy data
      } finally {
        setLoading(false);
      }
    };
    fetchPackages();
  }, []);

  const handleSelectPackage = (pkg) => {
    setSelectedPackage(pkg);
  };

  const handleBackToPackages = () => {
    setSelectedPackage(null);
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-400"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900/60 backdrop-blur-md" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 sm:p-6">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-400"
              enterFrom="opacity-0 scale-90"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-300"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-90"
            >
              <Dialog.Panel
                as={motion.div}
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="w-full max-w-md sm:max-w-2xl md:max-w-4xl max-h-[90vh] overflow-y-auto no-scrollbar-modal rounded-2xl bg-white p-6 sm:p-8 text-left shadow-2xl transition-all"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4">
                  <Dialog.Title
                    as="h3"
                    className="text-xl sm:text-2xl font-bold text-indigo-900"
                  >
                    Explore Counseling Services
                  </Dialog.Title>
                  <div className="flex items-center space-x-3">
                    <motion.button
                      onClick={onStatusCheck}
                      className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-sm font-medium transition-all duration-300 shadow-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <MagnifyingGlassIcon className="h-4 w-4 mr-2" />
                      Check Status
                    </motion.button>
                    <motion.button
                      onClick={onClose}
                      className="p-2 rounded-full bg ontdekken-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800 transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <XMarkIcon className="h-5 w-5" />
                    </motion.button>
                  </div>
                </div>

                <AnimatePresence>
                  {error && (
                    <motion.p
                      variants={errorVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="text-amber-700 font-medium mb-6 bg-amber-50 p-3 rounded-lg shadow-sm text-sm"
                    >
                      {error}
                    </motion.p>
                  )}
                </AnimatePresence>

                {loading ? (
                  <motion.div
                    className="flex justify-center items-center h-48 sm:h-64"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <svg
                      className="animate-spin h-8 w-8 text-indigo-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  </motion.div>
                ) : selectedPackage ? (
                  <BookingForm
                    selectedPackage={selectedPackage}
                    onBack={handleBackToPackages}
                  />
                ) : (
                  <Tab.Group>
                    <Tab.List className="flex flex-wrap gap-2 sm:gap-3 rounded-xl bg-indigo-50 p-2 mb-6 sm:mb-8 shadow-sm">
                      {categories.map((category, index) => (
                        <Tab
                          key={category}
                          as={motion.div}
                          variants={tabVariants}
                          custom={index}
                          initial="hidden"
                          animate="visible"
                          className={({ selected }) =>
                            `rounded-lg py-2 px-3 sm:py-2.5 sm:px-4 text-xs sm:text-sm font-semibold capitalize cursor-pointer transition-all duration-300
                            ${
                              selected
                                ? "bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-md"
                                : "text-indigo-700 bg-white/50 hover:bg-white hover:text-indigo-800"
                            }`
                          }
                        >
                          {category}
                        </Tab>
                      ))}
                    </Tab.List>
                    <Tab.Panels>
                      {categories.map((category) => (
                        <Tab.Panel
                          key={category}
                          className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2"
                        >
                          <AnimatePresence>
                            {packages
                              .filter(
                                (pkg) => pkg.category.toLowerCase() === category
                              )
                              .map((pkg, index) => (
                                <PackageCard
                                  key={pkg.id}
                                  pkgData={pkg}
                                  onSelect={handleSelectPackage}
                                  index={index}
                                />
                              ))}
                          </AnimatePresence>
                        </Tab.Panel>
                      ))}
                    </Tab.Panels>
                  </Tab.Group>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

function PackageCard({ pkgData, onSelect, index }) {
  const includesList = pkgData.includes.split("\n");

  return (
    <motion.div
      variants={cardVariants}
      custom={index}
      initial="hidden"
      animate="visible"
      className="border border-gray-100 rounded-xl flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl transform transition-all duration-300 bg-white"
      whileHover={{ scale: 1.03, y: -4 }}
    >
      <div className="p-4 sm:p-5 border-b bg-gradient-to-br from-indigo-50 to-white">
        <h3 className="text-lg sm:text-xl font-semibold text-indigo-900">
          {pkgData.package_name}
        </h3>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">
          {pkgData.duration}
        </p>
      </div>
      <div className="p-4 sm:p-5 h-full">
        <div className="text-xl sm:text-2xl font-bold text-indigo-700 mb-4 sm:mb-5">
          ₹{pkgData.price_inr.toFixed(2)}
        </div>
        <ul className="space-y-3">
          {includesList.map((item, idx) => (
            <motion.li
              key={idx}
              className="flex items-start"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <CheckIcon className="h-5 w-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 text-sm">{item.trim()}</span>
            </motion.li>
          ))}
        </ul>
      </div>
      <div className="p-4 sm:p-5 border-t bg-gray-50">
        <motion.button
          onClick={() => onSelect(pkgData)}
          className="w-full py-2.5 sm:py-3 px-4 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-lg hover:from-indigo-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-200 text-sm font-medium shadow-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Book Now
        </motion.button>
      </div>
    </motion.div>
  );
}
