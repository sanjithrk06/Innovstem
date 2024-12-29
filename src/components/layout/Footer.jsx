import React from "react";
import { Mail } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" shadow-2xl p-10">
      <div className="flex flex-row">
        <div className="w-5/12 flex flex-col items-start gap-3">
          <span className="logo">Innovstem</span>
          <p className=" nav-content">
            Innovstem is a dynamic startup transforming everyday products by
            offering innovative, eco-friendly alternatives to traditional
            plastics.{" "}
          </p>
          <span className="">
            © Copyright {new Date().getFullYear()}{" "}
            <a href="/#" className="hover:underline">
              Innovstem
            </a>
          </span>
        </div>
        <div className="w-4/12 border-x-2 px-4 pb-2 flex flex-col items-center justify-start gap-4">
          <h2 className=" nav-title">Navigation</h2>
          <div className="flex flex-col items-center justify-center gap-2">
            <div className=" flex flex-row justify-center items-start text-start gap-6">
              <ul className=" flex flex-col flex-wrap gap-2 pl-4 font-normal">
                {[
                  "About Us",
                  "Serices",
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
              <ul className=" flex flex-col flex-wrap gap-2 pl-4 font-normal">
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
        </div>
        <div className="w-3/12 text-center flex flex-col gap-2">
          <h2 className=" nav-title">Social Media</h2>
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
