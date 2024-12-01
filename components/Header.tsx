"use client";

import { Fragment, useState } from "react";
import { Menu, Popover, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  User as UserIcon,
  MessageCircle,
  ShoppingCart,
  Bell as NotificationIcon,
} from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";

const navigation = [
  { name: "Dashboard", href: "#" },
  { name: "Orders", href: "#" },
  { name: "Messages", href: "#" },
  { name: "FAQs", href: "#" },
];

const currencies = ["USD", "EUR", "GBP", "JPY", "AUD", "CAD", "CHF", "CNY", "INR"];

const Header = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [menuOpen, setMenuOpen] = useState(false);

  function classNames(...classes: (string | boolean | undefined)[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <Popover as="header" className="bg-white text-black sticky top-1 m-2 z-40 w-full shadow-xl rounded-xl">
      {({ }) => (
        <>
          <div className="mx-auto max-w-7xl p-6 mb-8 px-4 sm:px-6 lg:px-8">
            <div className="relative flex justify-between items-center lg:gap-8 xl:grid xl:grid-cols-12">
              {/* Logo Section */}
              <div className="flex md:absolute md:inset-y-0 md:left-0 lg:static xl:col-span-2">
                <Link href="/" className="flex items-center">
                  China Finds
                </Link>
              </div>

              {/* Search Bar */}
              <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
                <div className="flex items-center px-6 py-4 lg:max-w-none xl:px-0">
                  <div className="relative w-full">
                    <input
                      id="search"
                      name="search"
                      type="search"
                      placeholder="Search"
                      className="block w-full rounded-md border-0 bg-gray-100 py-1.5 pl-10 pr-3 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm"
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Section */}
              <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4 space-x-4">
                {/* Notification Icon */}
                <Link href="/notification" className="text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-orange-500">
                  <NotificationIcon className="h-6 w-6" />
                </Link>

                {/* Chat Icon */}
                <Link href="/chat" className="text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-orange-500">
                  <MessageCircle className="h-6 w-6" />
                </Link>

                {/* Currency Selector */}
                <Menu as="div" className="relative">
                  <Menu.Button className="rounded-md bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500">
                    {selectedCurrency}
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                      {currencies.map((currency) => (
                        <Menu.Item key={currency}>
                          {({ active }) => (
                            <button
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block w-full px-4 py-2 text-sm text-gray-700"
                              )}
                              onClick={() => setSelectedCurrency(currency)}
                            >
                              {currency}
                            </button>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>

                {/* Cart Icon */}
                <Link href="/cart" className="text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-orange-500">
                  <ShoppingCart className="h-6 w-6" />
                </Link>

                {/* User Menu */}
                <Menu as="div" className="relative">
                  <Menu.Button className="text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-orange-500">
                    <UserIcon className="h-6 w-6" />
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/sign-in"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Sign In
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/sign-up"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Sign Up
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>

                {/* Dark Mode Toggle */}
                <ModeToggle />
              </div>

              {/* Hamburger Menu for Mobile */}
              <div className="lg:hidden flex items-center ml-4">
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="text-gray-500 focus:ring-2 focus:ring-orange-500"
                  aria-label="Toggle menu"
                >
                  {menuOpen ? (
                    <XMarkIcon className="h-6 w-6" />
                  ) : (
                    <Bars3Icon className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <Transition
              show={menuOpen}
              enter="transition duration-200 ease-in-out"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition duration-150 ease-in-out"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <div className="lg:hidden bg-white shadow-md p-4">
                <nav className="space-y-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block text-gray-800 hover:text-orange-600"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </Transition>
          )}
        </>
      )}
    </Popover>
  );
};

export default Header;
