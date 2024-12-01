import { UserIcon } from '@heroicons/react/24/outline';

const products = [
  {
    id: 1,
    name: "Women's Basic Tee",
    href: '#',
    price: '$32.00',
    color: 'Gray',
    size: 'S',
    imageSrc: '/bag.jpg',
    imageAlt: "Front of women's basic tee in heather gray.",
  },
  // More products...
];

export default function Checkout() {
  return (
    <div className="bg-white">
      <header className="flex items-center justify-between px-4 py-10 sm:px-6 sm:py-8 lg:px-8">
        <a href="#">
          <span className="sr-only">Your Company</span>
          <img
            src="https://tailwindui.com/img/logos/mark.svg?color=orange&shade=600"
            alt="China finds"
            className="h-8 w-auto"
          />
        </a>
        <div className="hidden sm:flex sm:items-center sm:space-x-8">
          <a href="#" className="text-sm font-medium text-gray-700">
            Contact support
          </a>
          <a href="#" className="-m-2 p-2 text-gray-400 hover:text-gray-500">
            <span className="sr-only">Account</span>
            <UserIcon className="h-6 w-6" aria-hidden="true" />
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 pb-16 pt-4 sm:px-6 sm:pb-24 sm:pt-8 lg:px-8 xl:px-2 xl:pt-14">
        <h1 className="sr-only">Checkout</h1>

        <div className="mx-auto grid max-w-lg grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          {/* Order Summary */}
          <div className="mx-auto w-full max-w-lg">
            <h2 className="sr-only">Order summary</h2>

            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {products.map((product) => (
                <li key={product.id} className="flex space-x-6 py-6">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-24 w-24 flex-none rounded-md bg-gray-100 object-cover object-center"
                  />
                  <div className="flex-auto">
                    <h3 className="text-gray-900">
                      <a href={product.href}>{product.name}</a>
                    </h3>
                    <p className="text-gray-900">{product.price}</p>
                    <p className="hidden text-gray-500 sm:block">{product.color}</p>
                    <p className="hidden text-gray-500 sm:block">{product.size}</p>
                  </div>
                </li>
              ))}
            </ul>

            <dl className="mt-10 space-y-6 text-sm font-medium text-gray-500">
              <div className="flex justify-between">
                <dt>Subtotal</dt>
                <dd className="text-gray-900">$104.00</dd>
              </div>
              <div className="flex justify-between">
                <dt>Taxes</dt>
                <dd className="text-gray-900">$8.32</dd>
              </div>
              <div className="flex justify-between">
                <dt>Shipping</dt>
                <dd className="text-gray-900">$14.00</dd>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-6 text-gray-900">
                <dt className="text-base">Total</dt>
                <dd className="text-base">$126.32</dd>
              </div>
            </dl>
          </div>

          {/* Payment and Shipping Details */}
          <div className="mx-auto w-full max-w-lg">
            <form>
              <h2 className="text-lg font-medium text-gray-900">Payment Details</h2>

              <div className="mt-6">
                <label htmlFor="payment-method" className="block text-sm font-medium text-gray-700">
                  Select Payment Method
                </label>
                <select
                  id="payment-method"
                  name="payment-method"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                >
                  <option>Flutterwave</option>
                  <option>MasterCard / Visa</option>
                  <option>M-Pesa</option>
                </select>
              </div>

              <div className="mt-6">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number (for M-Pesa)
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                />
              </div>

              <h2 className="mt-10 text-lg font-medium text-gray-900">Shipping Details</h2>

              <div className="mt-6">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Shipping Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  rows={3}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                />
              </div>

              <button
                type="submit"
                className="mt-6 w-full rounded-md bg-orange-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                Complete Payment
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
