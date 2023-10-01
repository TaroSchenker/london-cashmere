/* eslint-disable react/no-unescaped-entities */
import React from "react";

const ContactPage: React.FC = () => {
  return (
    <div className="p-8 bg-background-color">
      <div className="max-w-5xl mx-auto border border-gray-300 rounded-lg hover:shadow-xl transition-shadow duration-300 bg-white">
        <div className="relative group">
          <img
            src="https://fakeimg.pl/600x420/ad6b6b/8f3838?text=Contact&font=bebas"
            alt="Contact Us"
            className="w-full h-96 object-cover rounded-t-lg"
          />
          <h2 className="absolute bottom-10 left-10 text-5xl text-white font-serif font-bold">
            Contact Us
          </h2>
        </div>

        <div className="p-6">
          <h2 className="text-black font-serif font-bold text-xl mb-2">
            We'd love to hear from you!
          </h2>
          <p className="text-gray-600 mb-4">
            Have a question about our cashmere products or need help with your
            order? Fill out the form below or give us a call.
          </p>

          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Your Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={5}
                required
                className="mt-1 p-2 w-full border rounded-md"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="bg-black text-white px-6 py-2 rounded hover:scale-105 transition-transform duration-300"
              >
                Submit
              </button>
            </div>
          </form>

          <div className="mt-12">
            <h2 className="text-black font-serif font-bold text-xl mb-2">
              Other ways to reach us:
            </h2>
            <p className="text-gray-600 mb-2">
              Phone:{" "}
              <a
                href="tel:+1234567890"
                className="text-primary-color hover:underline"
              >
                +44 (0) 1234 567890
              </a>
            </p>
            <p className="text-gray-600">
              Email:{""}
              <a
                href="mailto:info@LondonCashmereBoutique.com"
                className="text-primary-color hover:underline"
              >
                info@LondonCashmereBoutique.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
