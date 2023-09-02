import React from "react";
import { Link } from "react-router-dom";
import video from '../assets/video/istockphoto-1194949689-640_adpp_is.mp4';

import cashmere from '../../common/assets/images/stock-photo-a-pile-of-warm-sweaters-on-a-wooden-table-on-a-light-background-autumn-and-winter-clothes-1173240742.jpg'
const Landing = () => {
  return (
    <div className="w-full relative h-screen flex flex-col justify-center bg-neutral-lightest text-center lg:px-8">
        <video
            style={{ filter: 'brightness(40%)' }}
            poster={cashmere}
            playsInline
            autoPlay
            muted
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
            <source src={video} type="video/mp4" />
        </video>
        <div className="z-10 relative p-10 lg:max-w-3xl mx-auto bg-black bg-opacity-20 rounded-md">
            <h1 className="text-6xl font-semibold mb-6 text-white leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                Pam's Cashmere Boutique
            </h1>
            <p className="mb-8 text-white text-lg leading-relaxed font-light" style={{ fontFamily: "'Roboto', sans-serif" }}>
                Discover the epitome of warmth and sophistication. A journey crafted with the finest cashmere.
            </p>
            <div className="flex justify-center space-x-8">
                <Link
                    to="/products"
                    className="bg-black text-white border border-white py-3 px-10 rounded-lg hover:bg-white hover:text-black transition-colors duration-300 shadow-lg font-medium text-xl"
                >
                    Shop Now
                </Link>
                <Link
                    to="/about"
                    className="text-neutral border border-neutral py-3 px-10 rounded-lg hover:bg-black hover:text-white transition-colors duration-300 shadow-lg font-medium text-xl"
                >
                    Learn More
                </Link>
            </div>
        </div>
    </div>
  );
};

export default Landing;
