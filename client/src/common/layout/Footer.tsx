import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-lightest text-neutral-dark py-6 mt-0 hidden md:block">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4 items-center">
          <Link
            to="https://github.com/taroschenker"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-lg hover:text-gray-400"
            />
          </Link>
          <Link
            to="https://github.com/taroschenker"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              className="text-lg hover:text-gray-400"
            />
          </Link>
          <Link
            to="https://github.com/taroschenker"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faFacebookF}
              className="text-lg hover:text-gray-400"
            />
          </Link>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} London Cashmere Boutique. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
