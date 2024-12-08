"use client";

import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { 
  User as UserIcon, 
  MessageCircle, 
  ShoppingCart, 
  Bell as NotificationIcon 
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

  return (
    <header className="bg-white text-black sticky top-0 z-40 w-full shadow-md rounded-lg p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold">
          China Finds
        </Link>

        {/* Search Bar */}
        <div className="flex-1 mx-8">
          <div className="relative">
            <input
              type="search"
              placeholder="Search"
              className="w-full rounded-md bg-gray-100 py-2 pl-10 pr-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-orange-500 sm:text-sm"
            />
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Action Icons */}
        <div className="flex items-center space-x-4">
          <Link href="/notification" className="text-gray-500 hover:text-gray-700">
            <NotificationIcon className="h-6 w-6" />
          </Link>
          <Link href="/chat" className="text-gray-500 hover:text-gray-700">
            <MessageCircle className="h-6 w-6" />
          </Link>
          <div className="relative">
            <button
              onClick={() => setSelectedCurrency((prev) => (prev === "USD" ? "EUR" : "USD"))}
              className="rounded-md bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              {selectedCurrency}
            </button>
          </div>
          <Link href="/cart" className="text-gray-500 hover:text-gray-700">
            <ShoppingCart className="h-6 w-6" />
          </Link>
          <Link href="/profile" className="text-gray-500 hover:text-gray-700">
            <UserIcon className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
