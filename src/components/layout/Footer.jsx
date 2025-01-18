import React from "react";
import { Mail } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className=" shadow-lg shadow-secondary/10 p-10">
      <div className="max-w-[90rem] mx-auto flex flex-col flex-wrap sm:flex-row items-center text-center gap-0">
        <div className="lg:w-5/12 w-full flex flex-col items-center sm:text-start sm:items-start sm:px-4 py-6 lg:py-2 gap-3">
          <img
            src={logo}
            className="w-56 transform transition-transform duration-300"
            alt="Innovstem"
          />
          <p className=" nav-content">
            Innovstem is a dynamic startup transforming everyday products by
            offering innovative, eco-friendly alternatives to traditional
            plastics.{" "}
          </p>
          <span className=" nav-content">
            © Copyright {new Date().getFullYear()}{" "}
            <a href="/#" className="hover:underline">
              Innovstem
            </a>
          </span>
        </div>
        <div className="lg:w-4/12 sm:w-8/12 border-y-2 py-6 sm:py-2 sm:border-y-0 sm:border-r-2 lg:border-x-2 px-4 flex flex-col items-center justify-start gap-4">
          <h2 className=" nav-title py-2">Navigation</h2>
          <div className=" flex flex-col sm:flex-row justify-center items-center sm:items-start sm:text-start gap-2 sm:gap-6">
            <ul className=" flex flex-col flex-wrap gap-2 lg:pl-4 font-normal">
              {[
                "About Us",
                "Services",
                "Courses & Webinars",
                "Resources & Blogs",
              ].map((item, index) => (
                <li key={item}>
                  <a
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className=" nav-content hover:text-primary"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <ul className=" flex flex-col flex-wrap gap-2 lg:pl-4 font-normal">
              {["Industrial Connection"].map((item, index) => (
                <li key={item}>
                  <a
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="nav-content hover:text-primary"
                  >
                    {item}
                  </a>
                </li>
              ))}
              <button className="bg-primary/10 my-3 text-primary text-base font-noto font-medium cursor-pointer py-2 px-5 w-auto rounded-full duration-300 z-10 flex flex-row group ease-in">
                Go to Dashboard
              </button>
            </ul>
          </div>
        </div>
        <div className="lg:w-3/12 sm:w-4/12 text-center flex flex-col py-6 lg:py-2 gap-3">
          <h2 className=" nav-title py-2">Contact</h2>
          <p className=" nav-content">+123 4567 9876</p>
          <p className=" nav-content">innovstem@gmail.com</p>
          <ul className="flex justify-center gap-1 space-x-2">
            {[
              {
                icon: (
                  <FaLinkedinIn className="w-7 h-7 text-white bg-primary rounded-xl p-1" />
                ),
                href: "https://www.linkedin.com/in/ranjith-kumar-156706171/",
              },
              {
                icon: (
                  <Mail className="w-7 h-7 text-white bg-primary rounded-xl p-1" />
                ),
                href: "mailto:ranjith@ecologicads.in",
              },
            ].map((social, index) => (
              <li key={index}>
                <a
                  href={social.href}
                  target="_blank"
                  className="text-[#39569c] hover:text-gray-900"
                >
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
