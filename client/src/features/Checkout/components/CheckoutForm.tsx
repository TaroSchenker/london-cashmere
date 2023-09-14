import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCreditCard } from "@fortawesome/free-solid-svg-icons";

const CheckoutForm = () => {
  return (
    <>
      {/* Customer Information */}
      <div className="mb-12 p-8 border-2 border-gray-300 rounded-lg bg-white">
        <div className="flex items-center mb-8">
          <FontAwesomeIcon
            icon={faUser}
            className="mr-4 text-3xl text-neutral-dark"
          />
          <h3 className="text-3xl font-bold">Customer Information</h3>
        </div>
        <form>
          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700">
              Name
            </label>
            <input
              className="mt-2 p-2 w-full border-2 rounded-md focus:border-black"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700">
              Email
            </label>
            <input
              className="mt-2 p-2 w-full border-2 rounded-md focus:border-black"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700">
              Address
            </label>
            <textarea
              className="mt-2 p-2 w-full border-2 rounded-md focus:border-black"
              rows={3}
              placeholder="Enter your address"
            ></textarea>
          </div>
          {/* Product Selection */}
          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700">
              Product
            </label>
            <select className="mt-2 p-2 w-full border-2 rounded-md focus:border-black">
              {/* Map over products to generate options */}
              {/* <option value="{product._id}">{product.name} - £{product.price}</option> */}
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700">
              Size
            </label>
            <select className="mt-2 p-2 w-full border-2 rounded-md focus:border-black">
              {/* Map over product sizes to generate options */}
              {/* <option value="{size}">{size}</option> */}
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700">
              Color
            </label>
            <select className="mt-2 p-2 w-full border-2 rounded-md focus:border-black">
              {/* Map over product colors to generate options */}
              {/* <option value="{color}">{color}</option> */}
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700">
              Quantity
            </label>
            <input
              className="mt-2 p-2 w-full border-2 rounded-md focus:border-black"
              type="number"
              min="1"
              placeholder="Enter quantity"
            />
          </div>
          <button
            type="submit"
            className="bg-black text-white px-8 py-3 mt-4 rounded-full shadow hover:bg-gray-800 transition ease-in-out duration-300"
          >
            Save Information and Continue
          </button>
        </form>
      </div>
      {/* Payment Section */}
      <div className="p-8 border-2 border-gray-300 rounded-lg bg-white">
        <div className="flex items-center mb-8">
          <FontAwesomeIcon
            icon={faCreditCard}
            className="mr-4 text-3xl text-neutral-dark"
          />
          <h3 className="text-3xl font-bold">Payment</h3>
        </div>
        <button className="bg-black text-white w-full px-8 py-4 rounded-full shadow hover:bg-gray-800 transition ease-in-out duration-300">
          Pay with PayPal
        </button>
      </div>
    </>
  );
};

export default CheckoutForm;
