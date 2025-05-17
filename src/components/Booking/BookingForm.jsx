import { useState, useEffect, useCallback } from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
import axios from "axios";

// Framer Motion variants
const formVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

const fieldVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.3 },
  }),
};

export default function BookingForm({ selectedPackage, onBack }) {
  const [loading, setLoading] = useState(false);
  const [slots, setSlots] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [isRazorpayLoaded, setIsRazorpayLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile_number: "",
    class: "",
    gender: "",
    ambition: "",
    user_type: "Student",
    slot_id: "",
    note: "",
  });
  const [errors, setErrors] = useState({});

  // Load Razorpay script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => setIsRazorpayLoaded(true);
    script.onerror = () => {
      toast.error("Failed to load payment gateway");
      setIsRazorpayLoaded(false);
    };
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // Fetch available slots
  useEffect(() => {
    if (selectedDate) {
      const fetchSlots = async () => {
        try {
          const response = await axios.get(
            "https://admin-dev.innovstem.com/api/slots",
            {
              params: { date: selectedDate },
            }
          );
          console.log("Slots Response:", response.data);
          const slotsArray = Object.values(response.data.data || {});
          console.log("Slots Array:", slotsArray);
          setSlots(slotsArray);
          if (slotsArray.length === 0) {
            toast.warn("No slots available for the selected date");
          }
        } catch (error) {
          console.error("Slots Fetch Error:", error);
          toast.error("Failed to fetch available slots");
          setSlots([]);
        }
      };
      fetchSlots();
    }
  }, [selectedDate]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }, []);

  const handleDateChange = useCallback((e) => {
    setSelectedDate(e.target.value);
    setFormData((prev) => ({ ...prev, slot_id: "" }));
    setErrors((prev) => ({ ...prev, slot_id: "", date: "" }));
  }, []);

  const validateForm = useCallback(() => {
    const newErrors = {};
    if (!formData.name || formData.name.length < 2)
      newErrors.name = "Name must be at least 2 characters";
    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "Please enter a valid email address";
    if (!formData.mobile_number || !/^\d{10}$/.test(formData.mobile_number))
      newErrors.mobile_number = "Please enter a valid 10-digit phone number";
    if (!formData.class) newErrors.class = "Class is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.ambition) newErrors.ambition = "Ambition is required";
    if (!selectedDate) newErrors.date = "Please select a date";
    if (!formData.slot_id) newErrors.slot_id = "Please select a slot";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData, selectedDate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form before proceeding
    if (!validateForm()) {
      toast.error("Please fill all required fields correctly");
      return;
    }

    // Check if Razorpay is loaded
    if (!window.Razorpay || !isRazorpayLoaded) {
      toast.error("Payment gateway not loaded. Please try again later.");
      return;
    }

    try {
      setLoading(true);

      // Retry create-order API up to 2 times
      let orderResponse;
      let retries = 2;
      while (retries > 0) {
        try {
          orderResponse = await axios.post(
            "https://admin-dev.innovstem.com/api/create-order",
            {
              amount: selectedPackage.price_inr * 100,
              currency: "INR",
              package_id: selectedPackage.id,
              slot_id: parseInt(formData.slot_id),
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          break;
        } catch (retryError) {
          retries--;
          if (retries === 0) throw retryError;
          console.warn(`Retrying create-order API (${retries} attempts left)`);
          await new Promise((resolve) => setTimeout(resolve, 1000));
        }
      }

      // Debug order response
      console.log("Order Response:", orderResponse.data);

      const { order_id } = orderResponse.data.data || {};
      if (!order_id) {
        throw new Error("Order ID not received from create-order API");
      }

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: selectedPackage.price_inr * 100,
        currency: "INR",
        name: "Counseling Services",
        description: `Booking for ${selectedPackage.package_name}`,
        order_id,
        handler: async (response) => {
          try {
            // Debug payment response
            console.log("Payment Response:", response);

            // Check if all required fields are present
            if (
              !response.razorpay_payment_id ||
              !response.razorpay_order_id ||
              !response.razorpay_signature
            ) {
              throw new Error(
                "Incomplete payment response from Razorpay: Missing required fields"
              );
            }

            // Verify payment
            const verificationResponse = await axios.post(
              "https://admin-dev.innovstem.com/api/verify-payment",
              {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                appointment_data: {
                  name: formData.name || "",
                  mobile_number: formData.mobile_number || "",
                  email: formData.email || "",
                  class: formData.class || "",
                  gender: formData.gender || "",
                  ambition: formData.ambition || "",
                  user_type: formData.user_type || "Student",
                  package_id: selectedPackage.id,
                  slot_id: parseInt(formData.slot_id),
                  amount: selectedPackage.price_inr * 100,
                },
              },
              {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );

            if (verificationResponse.data.status === "success") {
              toast.success("Booking confirmed successfully!");
              onBack();
            } else {
              toast.error(
                verificationResponse.data.message ||
                  "Payment verification failed"
              );
            }
          } catch (err) {
            console.error("Payment Verification Error:", err);
            const errorMessage =
              err.response?.data?.message ||
              err.message ||
              "Error verifying payment";
            const errorDetails = err.response?.data?.errors
              ? Object.values(err.response.data.errors).flat().join(", ")
              : "";
            toast.error(
              errorDetails ? `${errorMessage}: ${errorDetails}` : errorMessage
            );
          } finally {
            setLoading(false);
          }
        },
        prefill: {
          name: formData.name || "",
          email: formData.email || "",
          contact: formData.mobile_number || "",
        },
        theme: {
          color: "#4F46E5",
        },
        modal: {
          ondismiss: () => {
            setLoading(false);
            toast.info("Payment cancelled");
          },
        },
      };

      const rzp = new window.Razorpay(options);

      // Handle payment failure
      rzp.on("payment.failed", (response) => {
        console.log("Payment Failed:", response);
        toast.error(
          response.error.description || "Payment failed. Please try again."
        );
        setLoading(false);
      });

      rzp.open();
    } catch (error) {
      console.error("Payment Initiation Error:", error);
      toast.error(
        error.response?.data?.message ||
          error.message ||
          "Error initiating payment"
      );
      setLoading(false);
    }
  };

  return (
    <motion.div
      variants={formVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-md sm:max-w-lg md:max-w-2xl mx-auto px-4 sm:px-6"
    >
      <div className="mb-6 sm:mb-8">
        <motion.button
          onClick={onBack}
          className="mb-4 flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-200 text-sm sm:text-base"
          whileHover={{ scale: 1.05, x: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeftIcon className="mr-2 h-5 w-5" />
          Back to packages
        </motion.button>

        <motion.div
          className="bg-white border border-gray-100 rounded-xl p-4 sm:p-6 shadow-sm bg-gradient-to-br from-indigo-50 to-white"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-lg sm:text-xl font-semibold text-indigo-900">
            {selectedPackage.package_name}
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            {selectedPackage.duration}
          </p>
          <p className="text-lg sm:text-xl font-bold mt-2 text-indigo-600">
            ₹{selectedPackage.price_inr.toFixed(2)}
          </p>
        </motion.div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {[
            {
              id: "name",
              label: "Full Name",
              type: "text",
              placeholder: "Enter your full name",
            },
            {
              id: "email",
              label: "Email",
              type: "email",
              placeholder: "Enter your email",
            },
            {
              id: "mobile_number",
              label: "Mobile Number",
              type: "tel",
              placeholder: "Enter your mobile number",
            },
            {
              id: "class",
              label: "Class",
              type: "text",
              placeholder: "Enter your class (e.g., 12th)",
            },
          ].map((field, index) => (
            <motion.div
              key={field.id}
              variants={fieldVariants}
              custom={index}
              initial="hidden"
              animate="visible"
              className="relative"
            >
              <label
                htmlFor={field.id}
                className="block text-sm font-medium text-gray-700 mb-1.5"
              >
                {field.label}
              </label>
              <input
                type={field.type}
                id={field.id}
                name={field.id}
                value={formData[field.id]}
                onChange={handleChange}
                className={`block w-full rounded-lg border-0 py-2.5 px-3.5 ring-1 ring-inset focus:ring-2 focus:ring-indigo-500 transition-all duration-300 text-sm sm:text-base ${
                  errors[field.id]
                    ? "ring-red-500 focus:ring-red-500"
                    : "ring-gray-300"
                } placeholder:text-gray-400`}
                placeholder={field.placeholder}
              />
              <AnimatePresence>
                {errors[field.id] && (
                  <motion.p
                    className="mt-1 text-xs sm:text-sm text-red-600"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    {errors[field.id]}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
          <motion.div
            variants={fieldVariants}
            custom={4}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <label
              htmlFor="gender"
              className="block text-sm font-medium text-gray-700 mb-1.5"
            >
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className={`block w-full rounded-lg border-0 py-2.5 px-3.5 ring-1 ring-inset focus:ring-2 focus:ring-indigo-500 transition-all duration-300 text-sm sm:text-base ${
                errors.gender
                  ? "ring-red-500 focus:ring-red-500"
                  : "ring-gray-300"
              }`}
            >
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <AnimatePresence>
              {errors.gender && (
                <motion.p
                  className="mt-1 text-xs sm:text-sm text-red-600"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {errors.gender}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
          <motion.div
            variants={fieldVariants}
            custom={5}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700 mb-1.5"
            >
              Select Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={selectedDate}
              onChange={handleDateChange}
              min={new Date().toISOString().split("T")[0]}
              className={`block w-full rounded-lg border-0 py-2.5 px-3.5 ring-1 ring-inset focus:ring-2 focus:ring-indigo-500 transition-all duration-300 text-sm sm:text-base ${
                errors.date
                  ? "ring-red-500 focus:ring-red-500"
                  : "ring-gray-300"
              } placeholder:text-gray-400`}
            />
            <AnimatePresence>
              {errors.date && (
                <motion.p
                  className="mt-1 text-xs sm:text-sm text-red-600"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {errors.date}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
          <motion.div
            variants={fieldVariants}
            custom={6}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <label
              htmlFor="slot_id"
              className="block text-sm font-medium text-gray-700 mb-1.5"
            >
              Available Slots
            </label>
            <select
              id="slot_id"
              name="slot_id"
              value={formData.slot_id}
              onChange={handleChange}
              disabled={!selectedDate || slots.length === 0}
              className={`block w-full rounded-lg border-0 py-2.5 px-3.5 ring-1 ring-inset focus:ring-2 focus:ring-indigo-500 transition-all duration-300 text-sm sm:text-base ${
                errors.slot_id || !selectedDate || slots.length === 0
                  ? "ring-red-500 focus:ring-red-500"
                  : "ring-gray-300"
              }`}
            >
              <option value="">Select a slot</option>
              {slots.map((slot) => (
                <option key={slot.id} value={slot.id}>
                  {slot.start_time} - {slot.end_time}
                </option>
              ))}
            </select>
            <AnimatePresence>
              {errors.slot_id && (
                <motion.p
                  className="mt-1 text-xs sm:text-sm text-red-600"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {errors.slot_id}
                </motion.p>
              )}
              {!selectedDate && (
                <motion.p
                  className="mt-1 text-xs sm:text-sm text-gray-600"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  Please select a date first
                </motion.p>
              )}
              {selectedDate && slots.length === 0 && (
                <motion.p
                  className="mt-1 text-xs sm:text-sm text-red-600"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  No slots available for this date
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        <motion.div
          variants={fieldVariants}
          custom={7}
          initial="hidden"
          animate="visible"
        >
          <label
            htmlFor="ambition"
            className="block text-sm font-medium text-gray-700 mb-1.5"
          >
            Ambition
          </label>
          <input
            type="text"
            id="ambition"
            name="ambition"
            value={formData.ambition}
            onChange={handleChange}
            className="block w-full rounded-lg border-0 py-2.5 px-3.5 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-500 transition-all duration-300 text-sm sm:text-base placeholder:text-gray-400"
            placeholder="Enter your career ambition (e.g., Engineer)"
          />
        </motion.div>

        <motion.div
          variants={fieldVariants}
          custom={8}
          initial="hidden"
          animate="visible"
        >
          <label
            htmlFor="note"
            className="block text-sm font-medium text-gray-700 mb-1.5"
          >
            Notes (Optional)
          </label>
          <textarea
            id="note"
            name="note"
            value={formData.note}
            onChange={handleChange}
            rows={4}
            className="block w-full rounded-lg border-0 py-2.5 px-3.5 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-500 transition-all duration-300 text-sm sm:text-base placeholder:text-gray-400"
            placeholder="Please share any additional notes"
          />
        </motion.div>

        <motion.button
          type="submit"
          className="w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-lg hover:from-indigo-700 hover:to-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-sm sm:text-base"
          disabled={loading || !isRazorpayLoaded}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {loading && (
            <svg
              className="animate-spin h-5 w-5 text-white mr-2"
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
          )}
          {loading ? "Processing..." : "Proceed to Payment"}
        </motion.button>
      </form>
    </motion.div>
  );
}
