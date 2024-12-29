import { NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="border-gray-200 bg-gradient-to-b from-secondary via-secondary/70 to-secondary/20 backdrop-blur-3xl drop-shadow-2xl shadow-secondary/10 sticky top-0 z-40 transition-all duration-300">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse group"
        >
          {/* <img
            src={logo}
            className="w-[45px] transform transition-transform duration-300"
            alt="Eco-logicAds Logo"
          /> */}
          <span className="logo-attribute transform transition-all duration-300">
            Eco-logicAds
          </span>
        </a>

        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden 
                     hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary 
                     transform transition-all duration-300 ease-in-out"
          aria-controls="navbar-solid-bg"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5 transition-transform duration-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
              className="transition-all duration-300"
            />
          </svg>
        </button>

        <div
          className={`${
            isMenuOpen
              ? "opacity-100 max-h-96"
              : "opacity-0 max-h-0 md:opacity-100 md:max-h-96"
          } w-full md:block md:w-auto overflow-hidden transition-all duration-500 ease-in-out`}
          id="navbar-solid-bg"
        >
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-transparent text-center md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent gap-2">
            <li
              className="transform transition-all duration-300 hover:translate-x-1 md:hover:translate-x-0 pt-2"
              onClick={closeMenu}
            >
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `block py-2 px-3 md:p-0 rounded relative transform transition-all duration-300 ease-in-out 
                    group ${
                      isActive
                        ? "text-primary bg-green-50/60 md:bg-transparent md:text-primary"
                        : "text-text/90 hover:bg-primary md:hover:bg-transparent md:hover:text-primary"
                    }`
                }
              >
                Home
                <span
                  className={`absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ease-out 
                                 group-hover:w-full md:opacity-0 md:group-hover:opacity-100 `}
                ></span>
              </NavLink>
            </li>
            <li
              className="transform transition-all duration-300 hover:translate-x-1 md:hover:translate-x-0 pt-2"
              onClick={closeMenu}
            >
              <NavLink
                to={"/our-products/"}
                className={({ isActive }) =>
                  `block py-2 px-3 md:p-0 rounded relative transform transition-all duration-300 ease-in-out 
                    group ${
                      isActive
                        ? "text-primary bg-green-50/60 md:bg-transparent md:text-primary"
                        : "text-text/90 hover:bg-primary md:hover:bg-transparent md:hover:text-primary"
                    }`
                }
              >
                Our Products
                <span
                  className={`absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ease-out 
                                 group-hover:w-full md:opacity-0 md:group-hover:opacity-100 `}
                ></span>
              </NavLink>
            </li>
            <li
              className="transform transition-all duration-300 hover:translate-x-1 md:hover:translate-x-0"
              onClick={closeMenu}
            >
              <NavLink to={"/contact/"}>
                <button className="btn-primary m-1">Inquiry</button>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
