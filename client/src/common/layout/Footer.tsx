import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter, faFacebookF } from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-6 mt-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4 items-center">
          {/* You can add other social media icons similarly */}
          <a href="https://instagram.com/cashmerestore" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="text-lg hover:text-gray-400" />
          </a>
          <a href="https://twitter.com/cashmerestore" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="text-lg hover:text-gray-400" />
          </a>
          <a href="https://facebook.com/cashmerestore" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} className="text-lg hover:text-gray-400" />
          </a>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Cashmere Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
