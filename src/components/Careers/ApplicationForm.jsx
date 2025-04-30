import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Upload,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  FileText,
  User,
  Mail,
  Phone,
} from "lucide-react";
import { useSubmitApplication } from "../../hooks/hooks";
import { Button } from "@headlessui/react";

const ApplicationForm = ({ careerId, jobTitle, onBackClick }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState({
    applicant_name: "",
    email: "",
    phone: "",
    cover_letter: "",
    resume: null,
    consent: false,
  });
  const [fileName, setFileName] = useState("No file chosen");
  const [formStep, setFormStep] = useState(1);
  const totalSteps = 3;

  const { mutate: submitApplication, isLoading } = useSubmitApplication();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else if (type === "file") {
      const file = e.target.files[0];
      if (file) {
        setFileName(file.name);
        setFormData((prev) => ({ ...prev, [name]: file }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };
  const validateStep = () => {
    if (formStep === 1) {
      return (
        formData.applicant_name.trim() &&
        formData.email.trim() &&
        formData.phone.trim()
      );
    }
    if (formStep === 2) {
      return formData.resume && formData.cover_letter.trim();
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep()) {
      setFormStep((prev) => Math.min(prev + 1, totalSteps));
    } else {
      setErrorMessage("Please fill out all required fields.");
    }
  };

  const prevStep = () => {
    setFormStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.consent) {
      setErrorMessage(
        "Please consent to our privacy policy before submitting."
      );
      return;
    }

    const submitFormData = new FormData();
    submitFormData.append("applicant_name", formData.applicant_name);
    submitFormData.append("email", formData.email);
    submitFormData.append("phone", formData.phone || "");
    submitFormData.append("cover_letter", formData.cover_letter);
    if (formData.resume) {
      submitFormData.append("resume", formData.resume);
    }

    try {
      setIsSubmitting(true);
      submitApplication(
        { careerId, formData: submitFormData },
        {
          onSuccess: () => {
            setSuccessMessage(
              "Application submitted successfully! We'll be in touch soon."
            );
            setErrorMessage("");
            setFormStep(totalSteps);
            setFormData({
              applicant_name: "",
              email: "",
              phone: "",
              cover_letter: "",
              resume: null,
              consent: false,
            });
            setFileName("No file chosen");
          },
          onError: (error) => {
            console.error("Error submitting application:", error);
            setErrorMessage(
              error.message || "Failed to submit application. Please try again."
            );
            setSuccessMessage("");
          },
        }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const formVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-blue-100"
    >
      <div className="flex items-center justify-center mb-6">
        <div className="bg-blue-100 p-2 rounded-full">
          <FileText className="text-blue-800 h-6 w-6" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold font-outfit text-blue-800 ml-3">
          Apply for {jobTitle}
        </h2>
      </div>

      {/* Progress indicator */}
      <div className="mb-8 px-4 w-full">
        <div className="flex justify-between items-center mb-2 md:px-6 w-full">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300
                    ${
                      formStep > index + 1
                        ? "bg-green-500 text-white shadow-md shadow-green-200"
                        : formStep === index + 1
                        ? "bg-blue-800 text-white shadow-md shadow-blue-200"
                        : "bg-gray-200 text-gray-500"
                    }`}
                >
                  {formStep > index + 1 ? <CheckCircle size={24} /> : index + 1}
                </div>
              </div>
              {index < totalSteps - 1 && (
                <div
                  className={`flex-1 h-1.5 mx-2 rounded-full transition-all duration-500 
                    ${formStep > index + 1 ? "bg-green-500" : "bg-gray-200"}`}
                />
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="flex justify-between text-sm text-gray-600 font-medium px-1 mt-1">
          {["Personal Info", "Resume & Cover Letter", "Review & Submit"].map(
            (label, index) => (
              <span key={index} className="w-20 text-center">
                {label}
              </span>
            )
          )}
        </div>
      </div>

      {formStep === totalSteps && successMessage ? (
        <motion.div
          className="text-center py-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md shadow-blue-200">
            <CheckCircle className="text-green-500" size={40} />
          </div>
          <h3 className="text-2xl font-bold text-green-600 mb-3">
            Application Submitted!
          </h3>
          <p className="text-gray-600 font-medium mb-8 max-w-md mx-auto">
            {successMessage}
          </p>
          <Button
            onClick={onBackClick}
            className="bg-blue-800 hover:bg-blue-900 text-white rounded-lg px-6 py-2.5 font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Browse More Opportunities
          </Button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 font-publicsans">
          <AnimatePresence mode="wait">
            {formStep === 1 && (
              <motion.div
                key="step1"
                variants={formVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="bg-blue-50 p-4 rounded-xl mb-4">
                  <h3 className="font-medium text-blue-800 mb-2">
                    Personal Information
                  </h3>
                  <p className="text-sm text-blue-800/70">
                    Tell us about yourself so we can get to know you better.
                  </p>
                </div>

                <div className="relative">
                  <label
                    htmlFor="applicant_name"
                    className="text-base font-medium text-gray-600 mb-1 flex items-center"
                  >
                    <User className="w-4 h-4 mr-2 text-blue-800" />
                    Full Name *
                  </label>
                  <input
                    id="applicant_name"
                    name="applicant_name"
                    type="text"
                    value={formData.applicant_name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                    className="block w-full rounded-lg bg-white border border-gray-300 px-4 py-3 text-base text-gray-900 outline-none focus:border-blue-800 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                  />
                </div>

                <div className="relative">
                  <label
                    htmlFor="email"
                    className="text-base font-medium text-gray-600 mb-1 flex items-center"
                  >
                    <Mail className="w-4 h-4 mr-2 text-blue-800" />
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email"
                    className="block w-full rounded-lg bg-white border border-gray-300 px-4 py-3 text-base text-gray-900 outline-none focus:border-blue-800 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                  />
                </div>

                <div className="relative">
                  <label
                    htmlFor="phone"
                    className="text-base font-medium text-gray-600 mb-1 flex items-center"
                  >
                    <Phone className="w-4 h-4 mr-2 text-blue-800" />
                    Phone *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your phone number"
                    className="block w-full rounded-lg bg-white border border-gray-300 px-4 py-3 text-base text-gray-900 outline-none focus:border-blue-800 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                  />
                </div>
              </motion.div>
            )}

            {formStep === 2 && (
              <motion.div
                key="step2"
                variants={formVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="bg-blue-50 p-4 rounded-xl mb-4">
                  <h3 className="font-medium text-blue-800 mb-2">
                    Resume & Cover Letter
                  </h3>
                  <p className="text-sm text-blue-800/70">
                    Upload your resume and tell us why you're interested in this
                    position.
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="resume"
                    className="block text-base font-medium text-gray-600 mb-2"
                  >
                    Resume (PDF/DOC) *
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      id="resume"
                      name="resume"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleInputChange}
                      className="hidden"
                      required
                    />
                    <Button
                      type="button"
                      onClick={() => document.getElementById("resume").click()}
                      className="border border-blue-800 text-blue-800 hover:bg-blue-50 rounded-lg px-4 py-2 transition-all duration-200 flex items-center gap-2"
                    >
                      <Upload size={16} />
                      Choose File
                    </Button>
                    <span className="text-sm text-gray-500 flex-1 truncate">
                      {fileName}
                    </span>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="cover_letter"
                    className="block text-base font-medium text-gray-600 mb-2"
                  >
                    Cover Letter *
                  </label>
                  <textarea
                    id="cover_letter"
                    name="cover_letter"
                    value={formData.cover_letter}
                    onChange={handleInputChange}
                    rows={6}
                    required
                    placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                    className="block w-full rounded-lg bg-white border border-gray-300 px-4 py-3 text-base text-gray-900 outline-none focus:border-blue-800 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                  />
                </div>
              </motion.div>
            )}

            {formStep === 3 && (
              <motion.div
                key="step3"
                variants={formVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="bg-blue-50 p-4 rounded-xl mb-4">
                  <h3 className="font-medium text-blue-800 mb-2">
                    Review Your Application
                  </h3>
                  <p className="text-sm text-blue-800/70">
                    Please review your information before submitting.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                  <h3 className="font-medium text-lg mb-4 text-blue-800 border-b pb-2">
                    Application Summary
                  </h3>
                  <div className="space-y-4 text-sm">
                    <div className="grid grid-cols-3 items-center">
                      <span className="text-gray-500 flex items-center">
                        <User className="w-4 h-4 mr-2 text-blue-800" />
                        Name:
                      </span>
                      <span className="col-span-2 font-medium text-gray-800">
                        {formData.applicant_name}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 items-center">
                      <span className="text-gray-500 flex items-center">
                        <Mail className="w-4 h-4 mr-2 text-blue-800" />
                        Email:
                      </span>
                      <span className="col-span-2 font-medium text-gray-800">
                        {formData.email}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 items-center">
                      <span className="text-gray-500 flex items-center">
                        <Phone className="w-4 h-4 mr-2 text-blue-800" />
                        Phone:
                      </span>
                      <span className="col-span-2 font-medium text-gray-800">
                        {formData.phone}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 items-center">
                      <span className="text-gray-500 flex items-center">
                        <FileText className="w-4 h-4 mr-2 text-blue-800" />
                        Resume:
                      </span>
                      <span className="col-span-2 font-medium text-gray-800 truncate">
                        {fileName}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    checked={formData.consent}
                    onChange={handleInputChange}
                    className="mt-1 h-5 w-5 rounded border-gray-300 text-blue-800 focus:ring-blue-800"
                  />
                  <label
                    htmlFor="consent"
                    className="text-base font-publicsans text-gray-600 leading-relaxed cursor-pointer"
                  >
                    I consent to InnovSTEM storing and processing my personal
                    data for the purpose of my job application, in accordance
                    with the Privacy Policy.
                  </label>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {errorMessage && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 rounded-lg bg-red-50 text-red-700 border border-red-200 shadow-sm"
            >
              {errorMessage}
            </motion.div>
          )}

          <div className="flex justify-between flex-wrap pt-4 border-t">
            {formStep > 1 ? (
              <Button
                type="button"
                onClick={prevStep}
                className="border border-blue-800 text-blue-800 hover:bg-blue-50 rounded-lg px-4 py-2 transition-all duration-200 flex items-center gap-1"
              >
                <ChevronLeft size={16} />
                Previous
              </Button>
            ) : (
              <div></div>
            )}

            {formStep < totalSteps ? (
              <Button
                disabled={!validateStep()}
                type="button"
                onClick={nextStep}
                className="bg-blue-800 hover:bg-blue-900 text-white rounded-lg px-5 py-2.5 font-semibold transition-all duration-300 disabled:opacity-50 disabled:hover:bg-blue-800 shadow-md hover:shadow-lg flex items-center gap-1"
              >
                Next Step
                <ChevronRight size={16} />
              </Button>
            ) : (
              <Button
                type="submit"
                disabled={isSubmitting || isLoading || !formData.consent}
                className="bg-blue-800 hover:bg-blue-900 text-white rounded-lg px-5 py-2.5 font-semibold transition-all duration-200 disabled:opacity-50 disabled:hover:bg-blue-800 flex items-center gap-2"
              >
                {isSubmitting || isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-1"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    Apply
                    <CheckCircle size={16} />
                  </>
                )}
              </Button>
            )}
          </div>
        </form>
      )}
    </motion.div>
  );
};

export default ApplicationForm;
