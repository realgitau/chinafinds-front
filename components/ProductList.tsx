"use client";
import React from "react";
import { useRouter } from "next/navigation"; // Import the useRouter hook

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
    href: "/products", // Link updated to /products
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
    href: "/products", // Link updated to /products
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
    href: "/products", // Link updated to /products
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
    href: "/products", // Link updated to /products
    imageSrc: "/pixel-9.jpg",
    imageAlt: "A sleek black Pixel-9 phone.",
    availableColors: [
      { name: "Black", colorBg: "#111827" },
      { name: "Brass", colorBg: "#FDE68A" },
      { name: "Gold", colorBg: "#FFD700" },
    ],
  },
];

const ProductList = () => {
  const router = useRouter();

  return (
    <div className="bg-white">
      <div className="py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Trending products</h2>
          <a
            href="/productsPage" // Link updated to /productsPage for "See everything"
            className="hidden text-sm font-semibold text-orange-600 hover:text-orange-500 sm:block"
          >
            See everything
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div className="relative mt-8">
          <div className="relative -mb-6 w-full overflow-x-auto pb-6">
            <ul
              role="list"
              className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0"
            >
              {products.map((product) => (
                <li key={product.id} className="inline-flex w-64 flex-col text-center lg:w-auto">
                  <div className="group relative">
                    <div className="w-full h-48 overflow-hidden rounded-md bg-gray-200">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>

                    <div className="mt-6">
                      <p className="text-sm text-gray-500">{product.color}</p>
                      <h3 className="mt-1 font-semibold text-gray-900">
                        <a href={product.href}>
                          <span className="absolute inset-0" />
                          {product.name}
                        </a>
                      </h3>
                      <p className="mt-1 text-gray-900">{product.price}</p>
                    </div>
                  </div>

                  <h4 className="sr-only">Available colors</h4>
                  <ul
                    role="list"
                    className="mt-auto flex items-center justify-center space-x-3 pt-6"
                  >
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

                  <div className="mt-4 flex space-x-4 justify-center">
                    <button
                      className="px-4 py-2 text-sm font-medium text-white bg-orange-600 rounded-md hover:bg-orange-500"
                      onClick={() => router.push(`/cart?product=${product.id}`)} // Redirect to cart
                    >
                      Add to Cart
                    </button>
                    <button
                      className="px-4 py-2 text-sm font-medium text-orange-600 bg-white border border-orange-600 rounded-md hover:bg-orange-50"
                      onClick={() => router.push(`/chat?product=${product.id}`)} // Redirect to chat
                    >
                      Chat
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex px-4 sm:hidden">
          <a href="/productsPage" className="text-sm font-semibold text-orange-600 hover:text-orange-500">
            See everything
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
