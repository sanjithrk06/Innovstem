import React from "react";
import LoginImg from "../../assets/images/login1.svg";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Register = () => {
  // Group fields into sections for better organization
  const formFields = [
    // Personal Information
    {
      id: "name",
      label: "Name",
      type: "text",
      placeholder: "Full Name",
      gridSpan: "col-span-full",
    },
    {
      id: "email",
      label: "Email",
      type: "email",
      placeholder: "Email Address",
      gridSpan: "col-span-full sm:col-span-2",
    },
    {
      id: "password",
      label: "Password",
      type: "text",
      placeholder: "*********",
      gridSpan: "col-span-full sm:col-span-2",
    },
    {
      id: "standard",
      label: "Standard",
      type: "text",
      placeholder: "Class",
      gridSpan: "col-span-2 sm:col-span-1",
    },
    {
      id: "age",
      label: "Age",
      type: "number",
      placeholder: "Age",
      gridSpan: "col-span-2 sm:col-span-1",
    },
    {
      id: "gender",
      label: "Gender",
      type: "select",
      placeholder: "Select Gender",
      options: ["Select Gender", "Male", "Female", "Other"],
      gridSpan: "col-span-full sm:col-span-2",
    },
    {
      id: "mobile",
      label: "Mobile",
      type: "tel",
      placeholder: "Enter Mobile Number",
      gridSpan: "col-span-full sm:col-span-2",
    },
    {
      id: "parent_no",
      label: "Parent Number",
      type: "tel",
      placeholder: "Enter Parent's Contact Number",
      gridSpan: "col-span-full sm:col-span-2",
    },
    // Address Information
    {
      id: "state",
      label: "State",
      type: "text",
      placeholder: "Enter State",
      gridSpan: "col-span-full sm:col-span-2",
    },
    {
      id: "district",
      label: "District",
      type: "text",
      placeholder: "Enter District",
      gridSpan: "col-span-full sm:col-span-2",
    },
    {
      id: "address",
      label: "Address",
      type: "textarea",
      placeholder: "Enter Your Full Address",
      gridSpan: "col-span-full",
    },
  ];

  return (
    <>
      <div className="bg-cream/20 min-h-screen p-1">
        <div className="container flex flex-row justify-center items-center gap-20">
          <div className="md:w-2/5 flex justify-center items-center max-md:hidden">
            <img src={LoginImg} className="mx-auto" alt="Login illustration" />
          </div>
          <div className="w-full md:w-3/5">
            <div className="w-full bg-white rounded-3xl drop-shadow-lg md:mt-0 sm:max-w-2xl p-2 md:p-4 xl:p-6">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <img
                  src={logo}
                  className="w-3/5 md:w-2/5 mx-auto pb-4"
                  alt="Logo"
                />
                <h1 className="text-xl font-semibold leading-tight tracking-tight text-secondary/70 font-outfit md:text-2xl text-center">
                  Register to{" "}
                  <span className="font-bold text-primary">INNOVSTEM</span>
                </h1>

                <form className="space-y-6 font-publicsans text-left">
                  <div className="grid grid-cols-4 gap-4">
                    {formFields.map((field) => (
                      <div key={field.id} className={field.gridSpan}>
                        <label
                          htmlFor={field.id}
                          className="block text-base/6 font-medium text-slate-600 mb-1"
                        >
                          {field.label}
                        </label>
                        <div className="mt-1">
                          {field.type === "select" ? (
                            <select
                              id={field.id}
                              name={field.id}
                              placeholder={field.placeholder}
                              className="block w-full rounded-lg bg-white border px-3 py-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-offset-0 focus:outline-secondary/60 sm:text-base/6"
                            >
                              {field.options.map((option) => (
                                <option key={option} value={option}>
                                  {option}
                                </option>
                              ))}
                            </select>
                          ) : field.type === "textarea" ? (
                            <textarea
                              id={field.id}
                              name={field.id}
                              placeholder={field.placeholder}
                              rows="3"
                              className="block w-full rounded-lg bg-white border px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-offset-0 focus:outline-secondary/60 sm:text-base/8"
                            />
                          ) : (
                            <input
                              id={field.id}
                              name={field.id}
                              type={field.type}
                              placeholder={field.placeholder}
                              className="block w-full rounded-lg bg-white border px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-offset-0 focus:outline-secondary/60 sm:text-base/8"
                            />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="col-span-full pt-4">
                    <button
                      type="submit"
                      className="w-full text-white bg-secondary/90 hover:bg-transparent hover:ring-1 hover:ring-secondary hover:text-secondary duration-300 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-xl text-sm px-5 py-2.5 text-center mb-3 font-semibold"
                    >
                      Register
                    </button>
                    <p className="text-sm font-publicsans font-light text-gray-500 text-center">
                      Already have an account?{" "}
                      <Link
                        to={"/auth/login"}
                        className="font-medium text-primary-600 hover:underline"
                      >
                        Sign in
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
