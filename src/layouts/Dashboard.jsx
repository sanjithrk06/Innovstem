import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { ChevronDownIcon, LogOut, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useAuthStore } from "../store/authStore";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "Resources", href: "/dashboard/resources" },
];

const userNavigation = [{ name: "Logout", href: "/" }];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Dashboard = () => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Get auth state from your auth store
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    setUserMenuOpen(false);
    navigate("/");
  };

  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-whiteDim shadow border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0 py-2">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <Link to={"/"} className="shrink-0">
                  <img alt="Innovstem" src={logo} className="h-10 w-auto" />
                </Link>
                <div className="hidden md:block">
                  <div className="ml-16 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        end
                        className={({ isActive }) =>
                          classNames(
                            isActive
                              ? "bg-orange-50 text-primary"
                              : "text-secondary hover:bg-orange-50 hover:text-primary",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )
                        }
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  {/* Profile dropdown */}
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
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-orange-50 hover:text-primary focus:outline-hidden">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon
                    aria-hidden="true"
                    className="block size-6 group-data-open:hidden"
                  />
                  <XMarkIcon
                    aria-hidden="true"
                    className="hidden size-6 group-data-open:block"
                  />
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.current
                      ? "bg-orange-50 text-primary"
                      : "text-secondary hover:bg-orange-50 hover:text-primary",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
            <div className="border-t border-gray-200 pt-4 pb-3">
              <div className="flex items-center px-5">
                <div className="shrink-0">
                  <img
                    alt=""
                    src={user.imageUrl}
                    className="size-10 rounded-full"
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">
                    {user.name}
                  </div>
                  <div className="text-sm font-medium text-gray-500">
                    {user.email}
                  </div>
                </div>
                <button
                  type="button"
                  className="relative ml-auto shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-orange-500 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:outline-hidden"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon aria-hidden="true" className="size-6" />
                </button>
              </div>
              <div className="mt-3 space-y-1 px-2">
                {/* User info section */}
                <div className="px-3 mb-4">
                  <div className="font-medium text-gray-900">{user?.name}</div>
                  <div className="text-sm text-gray-500">{user?.email}</div>
                  <div className="text-xs mt-1 bg-primary/10 text-primary inline-block px-2 py-0.5 rounded-full">
                    {user?.role || "Student"}
                  </div>
                </div>

                {/* Logout button */}
                <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.98 }}>
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
              </div>
            </div>
          </DisclosurePanel>
        </Disclosure>

        <Outlet />
      </div>
    </>
  );
};

export default Dashboard;
