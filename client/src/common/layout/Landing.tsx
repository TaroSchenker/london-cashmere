import React from "react";
import { Link } from "react-router-dom";
import video from '../assets/video/istockphoto-1194949689-640_adpp_is.mp4';

const Landing = () => {
  return (
<div className="w-full relative h-screen flex flex-col justify-center bg-neutral-lightest text-center lg:px-8" style={{ fontFamily: 'Roboto, sans-serif' }}>
    <video
        style={{ filter: 'brightness(40%)' }}
        autoPlay
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
    >
        <source src={video} type="video/mp4" />
    </video>
    <div className="z-10 relative p-10 lg:max-w-3xl mx-auto bg-black bg-opacity-20 rounded-md">
        <h1 className="text-6xl font-semibold mb-8 text-white leading-tight">
            Pam's Cashmere Boutique
        </h1>
        <p className="mb-8 text-white text-lg leading-relaxed">
            Discover the epitome of warmth and sophistication. A journey crafted with the finest cashmere.
        </p>
        <div className="flex justify-center space-x-6">
            <Link
                to="/products"
                className="bg-black text-white border border-white py-3 px-8 rounded-lg hover:bg-white hover:text-black transition-colors shadow-lg font-medium text-xl"
            >
                Shop Now
            </Link>
            <Link
                to="/checkout"
                className="text-black border border-white py-3 px-8 rounded-lg hover:bg-black hover:text-white transition-colors shadow-lg font-medium text-xl"
            >
                Learn More
            </Link>
        </div>
    </div>
</div>

  );
};

export default Landing;
