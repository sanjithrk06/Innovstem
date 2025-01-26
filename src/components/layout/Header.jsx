import { useState } from "react";
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
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { ChevronDownIcon } from "lucide-react";

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

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-50 sticky top-0 z-20 font-outfit drop-shadow shadow-secondary/5">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-screen-2xl items-center justify-between p-6 lg:px-16"
      >
        <div className="flex lg:flex-1">
          <NavLink to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Innovstem</span>
            <img alt="" src={logo} className="h-10 w-auto" />
          </NavLink>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12 z-40">
          <NavLink
            to="services"
            className="text-base/6 font-medium text-secondary/90 hover:text-primary "
          >
            Services
            <span
              className={`absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ease-out 
                                 hover:w-full xl:opacity-0 xl:hover:opacity-100 `}
            ></span>
          </NavLink>
          <Link
            to="https://innovstem.edumilestones.com/"
            target="_blank"
            className="text-base/6 font-medium text-secondary/90 hover:text-primary "
          >
            Career Guidance
            <span
              className={`absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ease-out 
                                 hover:w-full xl:opacity-0 xl:hover:opacity-100 `}
            ></span>
          </Link>
          <NavLink
            to="courses"
            className="text-base/6 font-medium text-secondary/90 hover:text-primary "
          >
            Courses
            <span
              className={`absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ease-out 
                                 hover:w-full xl:opacity-0 xl:hover:opacity-100 `}
            ></span>
          </NavLink>
          {/* <NavLink
            to="resources-blogs"
            className="text-base/6 font-medium text-secondary/90 hover:text-primary "
          >
            Resources & Blogs
            <span
              className={`absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ease-out 
                                 hover:w-full xl:opacity-0 xl:hover:opacity-100 `}
            ></span>
          </NavLink> */}
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-base/6 font-medium outline-none text-secondary/90 group hover:text-primary">
              Resources
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 flex-none text-secondary group-hover:text-primary"
              />
            </PopoverButton>
            <PopoverPanel
              transition
              className="absolute top-full -left-8 -z-10 mt-3 w-screen max-w-64 overflow-hidden rounded-2xl bg-white ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-base/6 hover:bg-gray-50"
                  >
                    {/* <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon
                        aria-hidden="true"
                        className="size-6 text-gray-600 group-hover:text-indigo-600"
                      />
                    </div> */}
                    <div className="flex-auto">
                      <NavLink
                        to={item.href}
                        
                        className="block font-semibold text-secondary/90 hover:text-primary"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </NavLink>
                      {/* <p className="mt-1 text-gray-600 line-clamp-1">
                        {item.description}
                      </p> */}
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <NavLink
            to="#"
            className="text-base/6 font-medium text-secondary/90 hover:text-primary "
          >
            About Us
            <span
              className={`absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ease-out 
                                 hover:w-full xl:opacity-0 xl:hover:opacity-100 `}
            ></span>
          </NavLink>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <NavLink
            to="#"
            className="text-base/6 font-medium text-secondary/90 hover:text-primary"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </NavLink>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <DialogPanel className="fixed inset-y-0 right-0 z-30 w-full overflow-y-auto bg-gray-100/5 backdrop-blur-3xl px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <NavLink to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Innovstem</span>
              <img alt="Innovstem" src={logo} className="h-8 w-auto" />
            </NavLink>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <NavLink
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-secondary hover:text-primary hover:bg-gray-50"
                >
                  Home
                </NavLink>

                <NavLink
                  to="services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-secondary hover:text-primary hover:bg-gray-50"
                >
                  Services
                </NavLink>

                <Disclosure>
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg -mx-3 py-2 pr-3.5 pl-3 text-base/7 font-semibold text-secondary hover:text-primary hover:bg-gray-50">
                    Resources
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-open:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {products.map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-secondary hover:text-primary hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>

                <NavLink
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-secondary hover:text-primary hover:bg-gray-50"
                >
                  Our Connections
                </NavLink>
              </div>
              <div className="py-6">
                <NavLink
                  to="#"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-secondary hover:text-primary hover:bg-gray-50"
                >
                  Log in
                </NavLink>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Header;
