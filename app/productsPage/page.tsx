"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

type Product = {
  id: number;
  name: string;
  color: string;
  price: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  availableColors: {
    name: string;
    colorBg: string;
  }[];
};

const products: Product[] = [
  {
    id: 1,
    name: "Mac Book",
    color: "Black",
    price: "$35",
    href: "/product/1",
    imageSrc: "/laptop.jpg",
    imageAlt: "A sleek black Mac Book.",
    availableColors: [
      { name: "Black", colorBg: "#111827" },
      { name: "Brass", colorBg: "#FDE68A" },
      { name: "Chrome", colorBg: "#E5E7EB" },
    ],
  },
  {
    id: 2,
    name: "Bag",
    color: "Black",
    price: "$30",
    href: "/product/2",
    imageSrc: "/bag.jpg",
    imageAlt: "A stylish black bag.",
    availableColors: [
      { name: "Black", colorBg: "#111827" },
      { name: "Blue", colorBg: "#0000FF" },
      { name: "Pink", colorBg: "#FFC0CB" },
    ],
  },
  {
    id: 3,
    name: "Headphones",
    color: "Black",
    price: "$10",
    href: "/product/3",
    imageSrc: "/headphones.jpg",
    imageAlt: "Black headphones.",
    availableColors: [
      { name: "Black", colorBg: "#111827" },
      { name: "Red", colorBg: "#FF0000" },
      { name: "Pink", colorBg: "#FFC0CB" },
    ],
  },
  {
    id: 4,
    name: "Pixel-9",
    color: "Black",
    price: "$35",
    href: "/product/4",
    imageSrc: "/pixel-9.jpg",
    imageAlt: "A sleek black Pixel-9 phone.",
    availableColors: [
      { name: "Black", colorBg: "#111827" },
      { name: "Brass", colorBg: "#FDE68A" },
      { name: "Gold", colorBg: "#FFD700" },
    ],
  },
];

const ProductsPage = () => {
  const [search, setSearch] = useState("");
  const [view, setView] = useState<"grid" | "list">("grid");
  const router = useRouter();

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white">
      <div className="py-8 lg:mx-auto lg:max-w-7xl lg:px-8">
        {/* Search and View Toggle */}
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-xs p-2 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600"
          />
          <button
            onClick={() => setView(view === "grid" ? "list" : "grid")}
            className="ml-4 p-2 text-sm font-semibold text-orange-600 bg-white border border-orange-600 rounded-md hover:bg-orange-50"
          >
            Toggle {view === "grid" ? "List" : "Grid"} View
          </button>
        </div>

        {/* Products List */}
        <div className={`mt-8 grid gap-6 ${view === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" : ""}`}>
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`flex ${view === "list" ? "flex-row space-x-4" : "flex-col"} items-center border p-4 rounded-md shadow-sm`}
            >
              <div className={`${view === "grid" ? "w-full h-48" : "w-32 h-32"} rounded-md bg-gray-200`}>
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-cover object-center rounded-md"
                />
              </div>
              <div className={`${view === "grid" ? "mt-4 text-center" : "ml-4 flex-grow"}`}>
                <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.color}</p>
                <p className="text-gray-900">{product.price}</p>
                {view === "grid" && (
                  <ul className="flex items-center justify-center space-x-3 mt-2">
                    {product.availableColors.map((color) => (
                      <li
                        key={color.name}
                        className="h-4 w-4 rounded-full border border-black border-opacity-10"
                        style={{ backgroundColor: color.colorBg }}
                      >
                        <span className="sr-only">{color.name}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className={`mt-4 ${view === "list" ? "ml-auto" : "flex justify-center space-x-4"}`}>
                <button
                  onClick={() => router.push(`/product/${product.id}`)}
                  className="px-4 py-2 text-sm font-medium text-white bg-orange-600 rounded-md hover:bg-orange-500"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="mt-8 text-center text-sm text-gray-500">No products found matching your search.</p>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
