import { useState } from "react";
import { Dialog, Transition, RadioGroup } from "@headlessui/react";
import { Fragment } from "react";
import {
  ArrowLeftIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
import api from "./../../config/axios";

const modalVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, y: 50, transition: { duration: 0.2, ease: "easeIn" } },
};

const detailVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.3 },
  }),
};

export default function StatusChecker({ isOpen, onClose, onBackToPackages }) {
  const [searchType, setSearchType] = useState("mobile");
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [bookingList, setBookingList] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!searchValue) {
      setError("Please enter a search value");
      return;
    }

    setError("");
    setLoading(true);
    setBookingList([]);

    try {
      let response;
      if (searchType === "mobile") {
        response = await api.get(
          `/appointments?mobile_number=${encodeURIComponent(searchValue)}`
        );
      } else {
        response = await api.get(
          `/appointments?ack=${encodeURIComponent(searchValue)}`
        );
      }

      const data = response.data.data.appointments;
      if (data && (Array.isArray(data) ? data.length > 0 : data.id)) {
        setBookingList(Array.isArray(data) ? data : [data]);
      } else {
        toast.error("No records found");
      }
    } catch (error) {
      console.error("Error checking status:", error);
      toast.error("No records found");
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status) => {
    const statusStyles = {
      pending: "bg-amber-100 text-amber-800 border-amber-300",
      booked: "bg-emerald-100 text-emerald-800 border-emerald-300",
      completed: "bg-sky-100 text-sky-800 border-sky-300",
      rejected: "bg-rose-100 text-rose-800 border-rose-300",
    };

    const statusClass =
      statusStyles[status?.toLowerCase()] ||
      "bg-gray-100 text-gray-800 border-gray-300";

    return (
      <motion.span
        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${statusClass} shadow-sm`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {status ? status.charAt(0).toUpperCase() + status.slice(1) : "Unknown"}
      </motion.span>
    );
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                as={motion.div}
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="w-full max-w-3xl transform rounded-2xl bg-white p-6 sm:p-8 text-left shadow-2xl transition-all"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <motion.button
                      onClick={onBackToPackages}
                      className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ArrowLeftIcon className="h-5 w-5 text-gray-600" />
                      <span className="sr-only">Back</span>
                    </motion.button>
                    <Dialog.Title
                      as="h3"
                      className="text-xl sm:text-2xl font-bold text-indigo-900"
                    >
                      Check Booking Status
                    </Dialog.Title>
                  </div>
                </div>

                <form onSubmit={handleSearch} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Search by
                    </label>
                    <RadioGroup
                      value={searchType}
                      onChange={setSearchType}
                      className="flex flex-col sm:flex-row gap-4 sm:gap-6"
                    >
                      {["mobile", "acknowledgment"].map((type) => (
                        <RadioGroup.Option key={type} value={type}>
                          {({ checked }) => (
                            <motion.div
                              className="flex items-center cursor-pointer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <span
                                className={`h-5 w-5 rounded-full border flex items-center justify-center transition-all duration-200 ${
                                  checked
                                    ? "border-indigo-600 bg-indigo-100"
                                    : "border-gray-300"
                                }`}
                              >
                                {checked && (
                                  <span className="h-3 w-3 rounded-full bg-indigo-600" />
                                )}
                              </span>
                              <span className="ml-2 text-sm text-gray-700">
                                {type === "mobile"
                                  ? "Mobile Number"
                                  : "Acknowledgment Number"}
                              </span>
                            </motion.div>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </RadioGroup>
                  </div>

                  <div>
                    <label
                      htmlFor="searchValue"
                      className="block text-sm font-medium text-gray-700"
                    >
                      {searchType === "mobile"
                        ? "Mobile Number"
                        : "Acknowledgment Number"}
                    </label>
                    <div className="mt-2 flex rounded-xl shadow-sm">
                      <input
                        type="text"
                        id="searchValue"
                        value={searchValue}
                        onChange={(e) => {
                          setSearchValue(e.target.value);
                          setError("");
                        }}
                        className={`block w-full rounded-l-xl border-0 py-3 px-4 ring-1 ring-inset focus:ring-2 focus:ring-indigo-500 transition-all duration-300 ${
                          error
                            ? "ring-red-500 focus:ring-red-500"
                            : "ring-gray-300"
                        } placeholder:text-gray-400 text-sm sm:text-base`}
                        placeholder={
                          searchType === "mobile"
                            ? "Enter your mobile number"
                            : "Enter acknowledgment number"
                        }
                      />
                      <motion.button
                        type="submit"
                        className="inline-flex items-center px-4 sm:px-6 py-3 rounded-r-xl bg-gradient-to-r from-indigo-600 to-indigo-700 text-white hover:from-indigo-700 hover:to-indigo-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                        disabled={loading}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {loading ? (
                          <svg
                            className="animate-spin h-5 w-5 text-white"
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
                        ) : (
                          <MagnifyingGlassIcon className="h-5 w-5" />
                        )}
                      </motion.button>
                    </div>
                    {error && (
                      <motion.p
                        className="mt-2 text-sm text-red-600"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        {error}
                      </motion.p>
                    )}
                  </div>
                </form>

                <AnimatePresence>
                  {bookingList.length > 0 && (
                    <motion.div
                      className="mt-6 grid gap-6"
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      {bookingList.map((booking, idx) => (
                        <motion.div
                          key={booking.id}
                          className="border rounded-xl overflow-hidden shadow bg-white"
                          custom={idx}
                          variants={detailVariants}
                          initial="hidden"
                          animate="visible"
                        >
                          <div className="p-4 sm:p-5 border-b bg-gradient-to-r from-gray-50 to-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                            <h3 className="text-lg sm:text-xl font-semibold text-indigo-900">
                              Booking #{booking.ack || booking.id}
                            </h3>
                            {getStatusBadge(booking.appointment_status)}
                          </div>
                          <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                            {[
                              {
                                label: "Acknowledgment",
                                value: booking.ack || booking.id,
                              },
                              {
                                label: "Package",
                                value: booking.package?.package_name || "N/A",
                              },
                              {
                                label: "Amount",
                                value: booking.amount_paid
                                  ? `₹ ${booking.amount_paid}`
                                  : "N/A",
                              },
                              {
                                label: "Booked on",
                                value: formatDate(booking.created_at),
                              },
                              {
                                label: "Name",
                                value: booking.name || "N/A",
                              },
                              {
                                label: "Contact",
                                value:
                                  booking.mobile_number ||
                                  booking.phone ||
                                  "N/A",
                              },
                              {
                                label: "Slot Date",
                                value: booking.slot?.slot_date || "N/A",
                              },
                              {
                                label: "Slot Time",
                                value:
                                  booking.slot?.start_time &&
                                  booking.slot?.end_time
                                    ? `${booking.slot.start_time} - ${booking.slot.end_time}`
                                    : "N/A",
                              },
                            ].map((item, index) => (
                              <motion.div
                                key={item.label}
                                className="flex flex-col"
                              >
                                <span className="text-gray-500 text-xs sm:text-sm">
                                  {item.label}:
                                </span>
                                <span className="font-medium text-gray-800 text-sm sm:text-base">
                                  {item.value}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
