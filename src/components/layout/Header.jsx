import { useState, useEffect } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ChevronDownIcon, LogOut, User, LayoutDashboard } from "lucide-react";
import { useAuthStore } from "../../store/authStore"; // Import the auth store

const products = [
  {
    name: "Blogs",
    href: "blogs",
  },
  {
    name: "Webinars",
    href: "webinars",
  },
  {
    name: "Resources",
    href: "resources",
  },
];

// Animation variants
const headerVariants = {
  hidden: { y: -100 },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.6,
    },
  },
};

const navItemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const mobileMenuVariants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  exit: {
    x: "100%",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
};

const dropdownVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 0.2,
    },
  },
};

const servicesNav = [
  {
    name: "All Services",
    href: "services",
  },
  {
    name: "Career Guidance",
    href: "courses/career-guidance",
  },
  {
    name: "STEM Skills",
    href: "courses/stem-skills",
  },
  {
    name: "Defense Training",
    href: "courses/defense-training",
  },
  {
    name: "Entrepreneurship",
    href: "courses/entrepreneurship",
  },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Get auth state from your auth store
  const { user, isAuthenticated, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    setUserMenuOpen(false);
    navigate("/");
  };

  return (
    <div className="bg-white sticky top-0 h-[12vh] z-20">
      <header className="bg-cream/20 font-outfit h-full shadow-lg shadow-cream/5">
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-screen-2xl items-center justify-between p-6 lg:px-16"
        >
          <motion.div variants={navItemVariants} className="flex lg:flex-1">
            <NavLink to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Innovstem</span>
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                alt=""
                src={logo}
                className="h-10 w-auto"
              />
            </NavLink>
          </motion.div>

          <div className="flex lg:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </motion.button>
          </div>

          <PopoverGroup className="hidden lg:flex lg:gap-x-12 z-40">
            <motion.div variants={navItemVariants} whileHover={{ y: -2 }}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-base/6 font-medium relative ${
                    isActive
                      ? "text-primary"
                      : "text-secondary/90 hover:text-primary"
                  }`
                }
              >
                Home
                <motion.span
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  className="absolute bottom-0 left-0 h-0.5 bg-primary"
                />
              </NavLink>
            </motion.div>

            <Popover className="relative">
              {({ close }) => {
                const [isOpen, setIsOpen] = useState(false);

                // Open dropdown on hover
                const handleMouseEnter = () => {
                  setIsOpen(true);
                };

                // Close dropdown when mouse leaves
                const handleMouseLeave = () => {
                  setIsOpen(false);
                };

                return (
                  <>
                    <motion.div
                      variants={navItemVariants}
                      whileHover={{ y: -2 }}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <PopoverButton
                        className="flex items-center gap-x-1 text-base/6 font-medium outline-none text-secondary/90 group hover:text-primary"
                        onClick={() => setIsOpen(!isOpen)} // Toggle on click
                      >
                        Services
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDownIcon
                            aria-hidden="true"
                            className="size-5 flex-none text-secondary group-hover:text-primary"
                          />
                        </motion.div>
                      </PopoverButton>
                    </motion.div>

                    <AnimatePresence>
                      {isOpen && (
                        <PopoverPanel
                          static
                          as={motion.div}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          variants={dropdownVariants}
                          className="absolute top-full -left-4 -z-10 mt-3 p-2 overflow-hidden rounded-3xl bg-white ring-1 shadow-lg ring-gray-900/5"
                          onMouseEnter={handleMouseEnter} // Keep open when hovering over the panel
                          onMouseLeave={handleMouseLeave} // Close when leaving the panel
                        >
                          <div className="p-0">
                            {servicesNav.map((item) => (
                              <motion.div
                                key={item.name}
                                whileHover={{ x: 0 }}
                                className="group relative text-nowrap items-center gap-x-6 rounded-2xl px-6 py-2 text-base/6 hover:bg-cream/40"
                              >
                                <div className="flex-auto">
                                  <NavLink
                                    to={item.href}
                                    onClick={() => {
                                      close();
                                      setIsOpen(false); // Close dropdown on link click
                                    }}
                                    className={({ isActive }) =>
                                      `text-base/6 font-medium relative ${
                                        isActive
                                          ? "text-primary"
                                          : "text-secondary/80"
                                      }`
                                    }
                                  >
                                    {item.name}
                                    <span className="absolute inset-0" />
                                  </NavLink>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </PopoverPanel>
                      )}
                    </AnimatePresence>
                  </>
                );
              }}
            </Popover>

            {["webinars", "blogs", "about"].map((item) => (
              <motion.div
                key={item}
                variants={navItemVariants}
                whileHover={{ y: -2 }}
              >
                <NavLink
                  to={item}
                  className={({ isActive }) =>
                    `text-base/6 font-medium relative ${
                      isActive
                        ? "text-primary"
                        : "text-secondary/90 hover:text-primary"
                    }`
                  }
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                  <motion.span
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    className="absolute bottom-0 left-0 h-0.5 bg-primary"
                  />
                </NavLink>
              </motion.div>
            ))}

            <motion.div variants={navItemVariants} whileHover={{ y: -2 }}>
              <Link
                to="https://innovstem.edumilestones.com/"
                target="_blank"
                className="text-base/6 font-medium text-secondary/90 hover:text-primary relative"
              >
                Career Guidance
                <motion.span
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  className="absolute bottom-0 left-0 h-0.5 bg-primary"
                />
              </Link>
            </motion.div>
          </PopoverGroup>

          <motion.div
            variants={navItemVariants}
            className="hidden lg:flex lg:flex-1 lg:justify-end"
          >
            {isAuthenticated ? (
              <Popover className="relative">
                {({ close }) => (
                  <>
                    <motion.div>
                      <PopoverButton
                        className="flex items-center gap-x-2 text-base font-semibold outline-none text-secondary/90 p-2 px-4 rounded-lg transition-colors duration-200"
                        onClick={() => setUserMenuOpen(!userMenuOpen)}
                        aria-expanded={userMenuOpen}
                      >
                        <User size={20} />
                        <span>{user?.name || "User"}</span>
                        <motion.div
                          animate={{ rotate: userMenuOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDownIcon
                            aria-hidden="true"
                            className="size-4"
                          />
                        </motion.div>
                      </PopoverButton>
                    </motion.div>

                    <AnimatePresence>
                      {userMenuOpen && (
                        <PopoverPanel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.15 }}
                          className="absolute right-0 mt-3 w-64 overflow-hidden rounded-2xl bg-white/70 backdrop-blur-md shadow-2xl ring-1 ring-gray-900/10"
                        >
                          <div className="p-4 border-b border-gray-200">
                            <div className="font-semibold text-gray-900">
                              {user?.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {user?.email}
                            </div>
                            <div className="text-xs mt-1 inline-block bg-primary/20 text-primary px-2 py-0.5 rounded-full">
                              {user?.role || "Student"}
                            </div>
                          </div>

                          <div className="p-2 space-y-1">
                            <motion.div
                              whileHover={{
                                x: 4,
                                backgroundColor: "rgba(0,0,0,0.04)",
                              }}
                              className="group flex w-full items-center gap-x-3 rounded-lg py-2 px-3 text-sm font-medium transition"
                            >
                              <NavLink
                                to="/dashboard"
                                onClick={() => {
                                  close();
                                  setUserMenuOpen(false);
                                }}
                                className="flex items-center gap-2 text-secondary hover:text-primary w-full"
                              >
                                <LayoutDashboard size={18} />
                                My Dashboard
                              </NavLink>
                            </motion.div>

                            <motion.div
                              whileHover={{
                                x: 4,
                                backgroundColor: "rgba(255,0,0,0.05)",
                              }}
                              className="group flex w-full items-center gap-x-3 rounded-lg py-2 px-3 text-sm font-medium text-red-600 transition"
                            >
                              <button
                                onClick={handleLogout}
                                className="flex items-center gap-2 text-red-600 w-full"
                              >
                                <LogOut size={18} />
                                Logout
                              </button>
                            </motion.div>
                          </div>
                        </PopoverPanel>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </Popover>
            ) : (
              <motion.div whileHover={{ y: -2, scale: 1.02 }}>
                <NavLink
                  to="/auth/login"
                  className="text-base font-semibold text-cream bg-secondary border-2 border-secondary hover:bg-secondary/80 hover:border-secondary/70 transition-colors duration-200 p-2 px-4 rounded-lg shadow-sm"
                >
                  Log in
                </NavLink>
              </motion.div>
            )}
          </motion.div>
        </nav>

        <AnimatePresence>
          {mobileMenuOpen && (
            <Dialog
              static
              open={mobileMenuOpen}
              onClose={setMobileMenuOpen}
              className="lg:hidden"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-20 bg-gray-50/90"
              />
              <DialogPanel
                as={motion.div}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={mobileMenuVariants}
                className="fixed inset-y-0 right-0 z-30 w-full overflow-y-auto bg-gray-100/5 backdrop-blur-3xl px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
              >
                <div className="flex items-center justify-between">
                  <NavLink to="/" className="-m-1.5 p-1.5">
                    <span className="sr-only">Innovstem</span>
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      alt="Innovstem"
                      src={logo}
                      className="h-8 w-auto"
                    />
                  </NavLink>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon aria-hidden="true" className="size-6" />
                  </motion.button>
                </div>

                <motion.div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      <motion.div
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <NavLink
                          to="/"
                          onClick={() => setMobileMenuOpen(false)}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-secondary hover:text-primary hover:bg-gray-50"
                        >
                          Home
                        </NavLink>
                      </motion.div>

                      <Disclosure>
                        {({ open, close }) => (
                          <>
                            <motion.div
                              whileHover={{ x: 5 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <DisclosureButton className="group flex w-full items-center justify-between rounded-lg -mx-3 py-2 pr-3.5 pl-3 text-base/7 font-semibold text-secondary hover:text-primary hover:bg-gray-50">
                                Services
                                <motion.div
                                  animate={{ rotate: open ? 180 : 0 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <ChevronDownIcon
                                    aria-hidden="true"
                                    className="size-5 flex-none"
                                  />
                                </motion.div>
                              </DisclosureButton>
                            </motion.div>
                            <AnimatePresence>
                              {open && (
                                <DisclosurePanel
                                  static
                                  as={motion.div}
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  className="mt-2 space-y-2"
                                >
                                  {servicesNav.map((item) => (
                                    <motion.div
                                      key={item.name}
                                      whileHover={{ x: 10 }}
                                      whileTap={{ scale: 0.98 }}
                                    >
                                      <DisclosureButton
                                        as="a"
                                        href={item.href}
                                        onClick={() => close()}
                                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-secondary hover:text-primary hover:bg-gray-50"
                                      >
                                        {item.name}
                                      </DisclosureButton>
                                    </motion.div>
                                  ))}
                                </DisclosurePanel>
                              )}
                            </AnimatePresence>
                          </>
                        )}
                      </Disclosure>

                      {["webinars", "blogs", "about"].map((item) => (
                        <motion.div
                          key={item}
                          whileHover={{ x: 5 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <NavLink
                            to={item}
                            onClick={() => setMobileMenuOpen(false)}
                            className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-secondary hover:text-primary hover:bg-gray-50"
                          >
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                          </NavLink>
                        </motion.div>
                      ))}

                      <motion.div
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <NavLink
                          to="https://innovstem.edumilestones.com/"
                          onClick={() => setMobileMenuOpen(false)}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-secondary hover:text-primary hover:bg-gray-50"
                        >
                          Career Guidance
                        </NavLink>
                      </motion.div>
                    </div>

                    <div className="py-6">
                      {isAuthenticated ? (
                        <>
                          {/* User info section */}
                          <div className="px-3 mb-4">
                            <div className="font-medium text-gray-900">
                              {user?.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {user?.email}
                            </div>
                            <div className="text-xs mt-1 bg-primary/10 text-primary inline-block px-2 py-0.5 rounded-full">
                              {user?.role || "Student"}
                            </div>
                          </div>

                          {/* Dashboard link */}
                          <motion.div
                            whileHover={{ x: 5 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <NavLink
                              to="/dashboard"
                              onClick={() => setMobileMenuOpen(false)}
                              className="-mx-3 flex items-center gap-2 rounded-lg px-3 py-2.5 text-base/7 font-semibold text-secondary hover:text-primary hover:bg-gray-50"
                            >
                              <LayoutDashboard size={18} />
                              My Dashboard
                            </NavLink>
                          </motion.div>

                          {/* Logout button */}
                          <motion.div
                            whileHover={{ x: 5 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <button
                              onClick={() => {
                                handleLogout();
                                setMobileMenuOpen(false);
                              }}
                              className="-mx-3 flex items-center gap-2 rounded-lg w-full text-left px-3 py-2.5 text-base/7 font-semibold text-red-600 hover:bg-gray-50"
                            >
                              <LogOut size={18} />
                              Logout
                            </button>
                          </motion.div>
                        </>
                      ) : (
                        <motion.div
                          whileHover={{ x: 5 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <NavLink
                            to="auth/login"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-secondary hover:text-primary hover:bg-gray-50"
                          >
                            Log in
                          </NavLink>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </DialogPanel>
            </Dialog>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
};

export default Header;
