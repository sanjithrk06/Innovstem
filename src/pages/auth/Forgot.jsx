import { useState } from "react";
import { ArrowRight, ArrowLeft, GraduationCap } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import api from "./../../config/axios";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(null);
    setIsLoading(true);

    try {
      const response = await api.post("forgot-password", { email });
      console.log(response);
      if (response.data.status === "success") {
        setIsSubmitted(true);
      } else {
        setErrorMessage(response.data.message || "Something went wrong.");
      }
    } catch (err) {
      setErrorMessage(
        err.response?.data?.message ||
          "Failed to send reset link. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  // ... rest of the code remains the same

  return (
    <div className="min-h-screen w-full overflow-hidden relative bg-gradient-to-br from-cream/40 via-white to-cream/50 p-4 md:p-8">
      <Helmet>
        <title>Forgot Password</title>
      </Helmet>

      <div className="m-8 text-center transform transition-all duration-500">
        <div className="flex flex-row gap-2 justify-center items-center">
          <GraduationCap className=" text-secondary w-8 h-8" />
          <h2 className="text-2xl font-bold bg-gradient-to-r from-secondary to-blue-500 bg-clip-text text-transparent">
            Student Portal
          </h2>
        </div>
        <p className="mt-2 text-gray-600">
          Access your courses, resources, and more
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center md:gap-20">
        {/* Right side - Form */}
        <div className="w-full md:w-1/2 max-w-md z-10">
          <div className="bg-white backdrop-blur-sm rounded-2xl shadow-2xl p-8 transition-all duration-700 transform hover:shadow-secondary/20 border border-white/50">
            <div className="mb-8 text-center transform transition-all duration-500">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-secondary to-blue-500 bg-clip-text text-transparent">
                Forgot Password
              </h2>
              {!isSubmitted ? (
                <p className="mt-2 text-gray-600">
                  Enter your email address and we'll send you a link to reset
                  your password
                </p>
              ) : (
                <p className="mt-2 text-gray-600">
                  Check your email for a link to reset your password
                </p>
              )}
            </div>

            {!isSubmitted ? (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-secondary transition-colors duration-200">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    placeholder="youremail@gmail.com"
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:ring-1 focus:ring-secondary/90 focus:border-secondary/90 outline-none transition-all duration-200 shadow-sm group-hover:border-secondary/50"
                    required
                  />
                </div>

                {errorMessage && (
                  <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-medium border-l-4 border-red-500">
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-secondary to-blue-500 text-white py-3.5 rounded-xl hover:from-secondary/90 hover:to-blue-600 focus:ring-4 focus:ring-secondary/30 font-medium transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg hover:shadow-secondary/20"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <>
                      Send Reset Link
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="space-y-6">
                <div className="bg-green-50 text-green-600 p-4 rounded-xl text-sm font-medium border-l-4 border-green-500">
                  Password reset link has been sent to your email address.
                  Please check your inbox.
                </div>
                <button
                  className="w-full bg-gradient-to-r from-secondary to-blue-500 text-white py-3.5 rounded-xl hover:from-secondary/90 hover:to-blue-600 focus:ring-4 focus:ring-secondary/30 font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-secondary/20"
                  onClick={() => {
                    setEmail("");
                    setIsSubmitted(false);
                  }}
                >
                  Send Another Link
                </button>
              </div>
            )}

            <div className="pt-6 border-t border-gray-100 mt-6">
              <p className="text-sm text-gray-600 text-center">
                <Link
                  to="/auth/login"
                  className="text-secondary font-medium hover:text-secondary/80 hover:underline transition-colors duration-200 flex items-center justify-center gap-1"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
