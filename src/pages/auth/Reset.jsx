import { useState, useEffect } from "react";
import { Eye, EyeOff, ArrowRight, Check, GraduationCap } from "lucide-react";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { images } from "../../assets/images"; // Replace with actual image path

const Reset = () => {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const token = useParams();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(null);

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    if (formData.password.length < 8) {
      setErrorMessage("Password must be at least 8 characters long");
      return;
    }

    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      if (!token) {
        setErrorMessage("Invalid or expired reset token");
        return;
      }

      setIsSuccess(true);
      setTimeout(() => navigate("/auth/login"), 3000);
    } catch (err) {
      setErrorMessage("Failed to reset password. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full overflow-hidden relative bg-gradient-to-br from-cream/40 via-white to-cream/50 p-4 md:p-8">
      <Helmet>
        <title>Reset Password</title>
      </Helmet>

      <div className="m-8 text-center">
        <div className="flex flex-row gap-2 justify-center items-center">
          <GraduationCap className=" text-secondary w-8 h-8" />
          <h2 className="text-2xl font-bold bg-gradient-to-r from-secondary to-blue-500 bg-clip-text text-transparent">
            Student Portal
          </h2>
        </div>
        <p className="mt-2 text-gray-600">
          Create a new password for your account
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center md:gap-20">
        {/* Form */}
        <div className="w-full md:w-1/2 max-w-md z-10">
          <div className="bg-white backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/50">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-secondary to-blue-500 bg-clip-text text-transparent">
                Reset Password
              </h2>
              <p className="mt-2 text-gray-600">
                Enter and confirm your new password
              </p>
            </div>

            {!isSuccess ? (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    New Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="••••••••"
                      required
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:ring-1 focus:ring-secondary/90 focus:border-secondary/90 outline-none transition-all duration-200 shadow-sm"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-secondary"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Password must be at least 8 characters long
                  </p>
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="••••••••"
                      required
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:ring-1 focus:ring-secondary/90 focus:border-secondary/90 outline-none transition-all duration-200 shadow-sm"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-secondary"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>

                {errorMessage && (
                  <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-medium border-l-4 border-red-500">
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-secondary to-blue-500 text-white py-3.5 rounded-xl hover:from-secondary/90 hover:to-blue-600 focus:ring-4 focus:ring-secondary/30 font-medium transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Resetting...</span>
                    </>
                  ) : (
                    <>
                      Reset Password
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="space-y-6">
                <div className="bg-green-50 text-green-600 p-4 rounded-xl text-sm font-medium border-l-4 border-green-500 flex gap-3">
                  <Check className="h-5 w-5 mt-1" />
                  <div>
                    <p className="font-medium">Password reset successful!</p>
                    <p className="mt-1">
                      Your password has been reset. Redirecting to login page...
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reset;
