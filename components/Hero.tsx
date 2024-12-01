"use client";

import React, { useState, useEffect } from "react";

const Hero: React.FC = () => {
  const [visibleProducts, setVisibleProducts] = useState(3);
  const frequentlySearchedProducts = [
    "iPhone 15 Pro Max",
    "Samsung S23 Ultra",
    "Samsung Galaxy S24 Ultra",
    // "MacBook Pro M2",
    // "Sony WH-1000XM5",
    // "Apple Watch Ultra",
    // "Nvidia RTX 4090",
    // "Google Pixel 8 Pro",
    // "OnePlus 11",
    // "Samsung QLED TV",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleProducts((prev) => {
        if (prev < frequentlySearchedProducts.length) {
          return prev + 3;
        }
        return prev;
      });
    }, 4000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [frequentlySearchedProducts.length]);

  return (
    <div className="dark:bg-white dark:text-white bg-black rounded-xl text-white m-1">
      <div className="dark:bg-transparent">
        <div className="mx-auto flex flex-col items-center py-12 sm:py-24">
          <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col mb-5 sm:mb-10">
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl text-center text-white font-black leading-10">
              ChinaFinds: Your One-Stop for{" "}
              <span className="text-[#ff7500] dark:text-[#ff7500]">All Products</span>.
            </h1>
            <p className="mt-5 sm:mt-10 lg:w-10/12 font-normal text-center text-xl">
              Explore products, manufacturers, and regional supplies in one place.
            </p>
          </div>
          <div className="flex space-x-6 mb-8">
            <a
              href="/products"
              className="text-lg font-semibold text-[#ff7500] hover:text-[#ff7500]"
            >
              Products
            </a>
            <a
              href="/manufacturers"
              className="text-lg font-semibold text-[#ff7500] hover:text-[#ff7500]"
            >
              Manufacturers
            </a>
            <a
              href="/regional-supplies"
              className="text-lg font-semibold text-[#ff7500] hover:text-[#ff7500]"
            >
              Regional Supplies
            </a>
          </div>
          <div className="flex w-11/12 md:w-8/12 xl:w-6/12">
            <div className="flex rounded-md w-full">
              <input
                type="text"
                name="q"
                className="w-full p-3 rounded-md rounded-r-none border border-2 border-gray-300 placeholder-current dark:bg-gray-500 dark:text-gray-300 dark:border-none"
                placeholder="Search for products, manufacturers..."
              />
              <button className="inline-flex items-center gap-2 bg-[#ff7500] text-white text-lg font-semibold py-3 px-6 rounded-r-md hover:bg-[#ff7500]">
                <span>Find</span>
                <svg
                  className="text-gray-200 h-5 w-5 p-0 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 56.966 56.966"
                >
                  <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="mt-8 w-11/12 sm:w-8/12 lg:w-6/12">
            <h3 className="text-lg font-semibold text-white mb-3">
              Frequently Searched:
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {frequentlySearchedProducts.slice(0, visibleProducts).map((product, index) => (
                <li
                  key={index}
                  className={`transform opacity-0 transition-opacity duration-1000 ease-in-out ${
                    index < visibleProducts
                      ? `opacity-100 delay-[${index * 500}ms]`
                      : ""
                  }`}
                >
                  <a
                    href={`/search/${product.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block hover:text-[#ff7500]"
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
