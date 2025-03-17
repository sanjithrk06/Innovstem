import React, { useState } from "react";
import { useAuthStore } from "../../store/authStore"; // Adjust path as needed
import { useNavigate } from "react-router-dom";
import LoginImg from "../../assets/images/login1.svg";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { login, isLoading, error } = useAuthStore();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState(null);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(null);

    try {
      await login(formData.email, formData.password);
      navigate("/dashboard");
    } catch (err) {
      setErrorMessage(err.message || "Login failed. Please try again.");
    }
  };

  return (
    <div className="bg-cream/20 p-4 h-screen w-screen flex flex-row justify-center items-center gap-20 mx-auto">
      <div className="md:w-3/5 max-md:hidden">
        <img src={LoginImg} className="mx-auto" alt="Login Illustration" />
      </div>
      <div className="w-full md:w-2/5 mx-auto">
        <div className="w-full bg-white rounded-3xl drop-shadow-lg md:mt-0 sm:max-w-md p-2 md:p-4 xl:p-2 mx-auto">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <img
              src={logo}
              className="w-3/5 md:w-2/5 mx-auto pb-4"
              alt="Logo"
            />
            <h1 className="text-xl font-bold text-secondary text-center">
              Sign in to your account
            </h1>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-base font-medium text-slate-600">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full rounded-lg border px-3 py-1.5 outline-gray-300 focus:outline-secondary/60"
                  required
                />
              </div>
              <div>
                <label className="block text-base font-medium text-slate-600">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Your Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-full rounded-lg border px-3 py-1.5 outline-gray-300 focus:outline-secondary/60"
                  required
                />
                <div className="flex justify-end">
                  <Link
                    to="/forgot-password"
                    className="text-sm text-secondary hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
              {errorMessage && (
                <p className="text-red-500 font-medium text-sm text-center">
                  {error}
                </p>
              )}
              <button
                type="submit"
                className="w-full text-white bg-secondary hover:bg-transparent hover:ring-1 hover:ring-secondary hover:text-secondary duration-300 rounded-xl text-sm px-5 py-2.5"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign in"}
              </button>
            </form>
            <p className="text-sm text-gray-500 text-center">
              Don’t have an account yet?{" "}
              <Link
                to="/auth/register"
                className="text-primary-600 hover:underline"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
