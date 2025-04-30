import { useState, useEffect } from "react";
import { Eye, EyeOff, ArrowRight, GraduationCap } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { images } from "../../assets/images";
import { useAuthStore } from "../../store/authStore";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { login, isAuthenticated } = useAuthStore();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (isAuthenticated) {
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, from]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(null);
    setIsLoading(true);

    try {
      await login(formData.email, formData.password);
    } catch (err) {
      setErrorMessage(
        err.response?.data?.message || "Login failed. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full overflow-hidden relative bg-gradient-to-br from-cream/40 via-white to-cream/50 p-4 md:p-8">
      <Helmet>
        <title>Login</title>
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
        {/* Left side - Illustration */}
        <div className="w-full md:w-1/2 max-w-md md:max-w-lg flex flex-col items-center justify-center max-md:hidden">
          <div className="relative transform transition-all duration-700">
            <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-yellow-200 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 rounded-full bg-secondary/90 animate-pulse delay-300"></div>

            {/* Card glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-blue-300/20 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>

            <img
              src={`${images.Login}`}
              alt="Student Learning"
              className="relative mx-auto w-full max-w-md rounded-2xl shadow-xl transform transition-all duration-500 hover:shadow-2xl z-10"
            />
          </div>
        </div>

        {/* Right side - Login Form */}
        <div className="w-full md:w-1/2 max-w-md z-10">
          <div
            className={`bg-white backdrop-blur-sm rounded-2xl shadow-2xl p-8 transition-all duration-700 transform hover:shadow-secondary/20 border border-white/50`}
          >
            <div className="mb-8 text-center transform transition-all duration-500">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-secondary to-blue-500 bg-clip-text text-transparent">
                Welcome Back!
              </h2>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-secondary transition-colors duration-200">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="youremail@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="username"
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:ring-1 focus:ring-secondary/90 focus:border-secondary/90 outline-none transition-all duration-200 shadow-sm group-hover:border-secondary/50"
                  required
                />
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-secondary transition-colors duration-200">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    autoComplete="current-password"
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:ring-1 focus:ring-secondary/90 focus:border-secondary/90 outline-none transition-all duration-200 shadow-sm group-hover:border-secondary/50"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-secondary transition-colors duration-200"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
                <div className="flex justify-end mt-2">
                  <Link
                    to="/auth/forgot-password"
                    className="text-sm text-secondary/90 hover:text-secondary hover:underline transition-colors duration-200"
                  >
                    Forgot password?
                  </Link>
                </div>
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
                    <span>Signing in...</span>
                  </div>
                ) : (
                  <>
                    Sign In
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>

            <div className="pt-6 border-t border-gray-100">
              <p className="text-sm text-gray-600 text-center">
                Don't have an account?{" "}
                <Link
                  to="/auth/register"
                  className="text-secondary font-medium hover:text-secondary/80 hover:underline transition-colors duration-200"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
