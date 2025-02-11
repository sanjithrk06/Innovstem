import React from "react";
import LoginImg from "../../assets/images/login1.svg";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className=" bg-cream/20 p-4 h-screen w-screen flex flex-row justify-center items-center gap-20">
        <div className=" md:w-3/5 max-md:hidden">
          <img src={LoginImg} className=" mx-auto" />
        </div>
        <div className=" w-full md:w-2/5">
          <div className="w-full bg-white rounded-3xl drop-shadow-lg md:mt-0 sm:max-w-md p-2 md:p-4 xl:p-2">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <img src={logo} className=" w-3/5 md:w-2/5 mx-auto pb-4" />
              <h1 className="text-xl font-bold leading-tight tracking-tight text-secondary font-outfit md:text-2xl text-center">
                Sign in to your account
              </h1>
              <form
                className="space-y-4 md:space-y-6 font-publicsans"
                action="#"
              >
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-base/6 font-medium text-slate-600"
                  >
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      placeholder="Enter Your Email Address"
                      autoComplete="given-name"
                      className="block w-full rounded-lg bg-white border px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-offset-0 focus:outline-secondary/60 sm:text-base/8"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-base/6 font-medium text-slate-600"
                  >
                    Password
                  </label>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Enter Your Password"
                      autoComplete="given-password"
                      className="block w-full rounded-lg bg-white border px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-offset-0 focus:outline-secondary/60 sm:text-base/8"
                    />
                  </div>
                  <div className=" flex justify-end">
                    <a
                      href="#"
                      className="text-sm/8 text-slate-400 hover:text-secondary duration-300 text-right font-medium text-primary-600 hover:underline pr-2"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="">
                  <button
                    type="submit"
                    className="w-full text-white bg-secondary/90 hover:bg-transparent hover:ring-1 hover:ring-secondary hover:text-secondary duration-300 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-xl text-sm px-5 py-2.5 text-center mb-3 font-semibold"
                  >
                    Sign in
                  </button>
                  <p className="text-sm font-publicsans font-light text-gray-500">
                    Don’t have an account yet?{" "}
                    <Link
                      to={"/auth/register"}
                      className="font-medium text-primary-600 hover:underline "
                    >
                      Sign up
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
