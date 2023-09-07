import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      {/* Footer information */}
      <div className="mt-16 border-t pt-10">
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="text-gray-600 hover:text-black">
              Customer Service
            </Link>
          </li>
          <li>
            <Link to="/" className="text-gray-600 hover:text-black">
              FAQ
            </Link>
          </li>
          <li>
            <Link to="/" className="text-gray-600 hover:text-black">
              Return Policy
            </Link>
          </li>
          {/* Add more essential links as needed */}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
