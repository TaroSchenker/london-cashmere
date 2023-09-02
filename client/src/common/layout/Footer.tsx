import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-lightest text-neutral-dark py-6 mt-0 hidden md:block">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4 items-center">
          {/* You can add other social media icons similarly */}
          <Link to="https://instagram.com/cashmerestore" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="text-lg hover:text-gray-400" />
          </Link>
          <Link to="https://twitter.com/cashmerestore" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="text-lg hover:text-gray-400" />
          </Link>
          <Link to="https://facebook.com/cashmerestore" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} className="text-lg hover:text-gray-400" />
          </Link>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Cashmere Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
