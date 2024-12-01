"use client";

import { CheckIcon, ClockIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import { useState } from 'react';

const products = [
  {
    id: 1,
    name: "Nomad Tumbler",
    href: "#",
    price: 35.0,
    colors: ["White", "Black", "Blue"],
    inStock: true,
    imageSrc: "/laptop.jpg",
    imageAlt: "Insulated bottle with white base and black snap lid.",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    price: 32.0,
    colors: ["Sienna", "Gray", "Navy"],
    inStock: true,
    size: "Large",
    imageSrc: "/headphones.jpg",
    imageAlt: "Front of men's Basic Tee in sienna.",
  },
];

export default function Cart() {
  const [cartItems, setCartItems] = useState(
    products.map((product) => ({
      ...product,
      quantity: 1,
      selectedColor: product.colors[0],
    }))
  );

  const handleQuantityChange = (id: number, increment: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + increment) }
          : item
      )
    );
  };

  const handleColorChange = (id: number, color: string) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, selectedColor: color } : item
      )
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 5.0; // Flat rate for simplicity
  const tax = (subtotal * 0.08).toFixed(2); // 8% tax for demonstration
  const total = (subtotal + shipping + parseFloat(tax)).toFixed(2);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Shopping Cart</h1>

        <form className="mt-12">
          <div>
            <h2 className="sr-only">Items in your shopping cart</h2>

            <ul role="list" className="divide-y divide-gray-200 border-b border-t border-gray-200">
              {cartItems.map((item, idx) => (
                <li key={item.id} className="flex py-6 sm:py-10">
                  <div className="flex-shrink-0">
                    <img
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      className="h-24 w-24 rounded-lg object-cover object-center sm:h-32 sm:w-32"
                    />
                  </div>

                  <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                    <div>
                      <div className="flex justify-between sm:grid sm:grid-cols-2">
                        <div className="pr-6">
                          <h3 className="text-sm">
                            <Link href={item.href} className="font-medium text-gray-700 hover:text-gray-800">
                              {item.name}
                            </Link>
                          </h3>
                          <div className="flex items-center mt-2">
                            <label htmlFor={`color-${idx}`} className="mr-2 text-sm font-medium text-gray-700">
                              Color:
                            </label>
                            <select
                              id={`color-${idx}`}
                              name={`color-${idx}`}
                              value={item.selectedColor}
                              onChange={(e) => handleColorChange(item.id, e.target.value)}
                              className="rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                            >
                              {item.colors.map((color) => (
                                <option key={color} value={color}>
                                  {color}
                                </option>
                              ))}
                            </select>
                          </div>
                          {item.size && <p className="mt-1 text-sm text-gray-500">Size: {item.size}</p>}
                        </div>

                        <p className="text-right text-sm font-medium text-gray-900">${item.price.toFixed(2)}</p>
                      </div>

                      <div className="mt-4 flex items-center">
                        <button
                          type="button"
                          onClick={() => handleQuantityChange(item.id, -1)}
                          className="px-2 text-sm font-medium text-gray-500 hover:text-gray-900"
                        >
                          -
                        </button>
                        <span className="px-4 text-sm font-medium text-gray-700">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => handleQuantityChange(item.id, 1)}
                          className="px-2 text-sm font-medium text-gray-500 hover:text-gray-900"
                        >
                          +
                        </button>
                        <button
                          type="button"
                          onClick={() => handleRemoveItem(item.id)}
                          className="ml-4 text-sm font-medium text-red-600 hover:text-red-800"
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    <p className="mt-4 flex space-x-2 text-sm text-gray-700">
                      {item.inStock ? (
                        <CheckIcon className="h-5 w-5 flex-shrink-0 text-green-500" aria-hidden="true" />
                      ) : (
                        <ClockIcon className="h-5 w-5 flex-shrink-0 text-gray-300" aria-hidden="true" />
                      )}
                      <span>{item.inStock ? 'In stock' : 'Out of stock'}</span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Order summary */}
          <div className="mt-10 sm:ml-32 sm:pl-6">
            <div className="rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:p-8">
              <h2 className="sr-only">Order summary</h2>

              <div className="flow-root">
                <dl className="-my-4 divide-y divide-gray-200 text-sm">
                  <div className="flex items-center justify-between py-4">
                    <dt className="text-gray-600">Subtotal</dt>
                    <dd className="font-medium text-gray-900">${subtotal.toFixed(2)}</dd>
                  </div>
                  <div className="flex items-center justify-between py-4">
                    <dt className="text-gray-600">Shipping</dt>
                    <dd className="font-medium text-gray-900">${shipping.toFixed(2)}</dd>
                  </div>
                  <div className="flex items-center justify-between py-4">
                    <dt className="text-gray-600">Tax</dt>
                    <dd className="font-medium text-gray-900">${tax}</dd>
                  </div>
                  <div className="flex items-center justify-between py-4">
                    <dt className="text-base font-medium text-gray-900">Order total</dt>
                    <dd className="text-base font-medium text-gray-900">${total}</dd>
                  </div>
                </dl>
              </div>
            </div>

            <div className="mt-6 flex gap-2">
              <Link
                href="/chat"
                className="w-full rounded-md bg-white border border-gray-300 px-4 py-3 text-black text-center hover:bg-orange-500 hover:text-white"
              >
                Chat
              </Link>
              <Link
                href="/checkout"
                className="w-full rounded-md bg-orange-500 px-4 py-3 text-center text-white hover:bg-orange-700"
              >
                Checkout
              </Link>
            </div>

            <div className="mt-6 text-center text-sm text-gray-500">
              <p>
                or{' '}
                <Link href="/" className="font-medium text-orange-500 hover:text-orange-700">
                  Continue Shopping
                  <span aria-hidden="true"> &rarr;</span>
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
