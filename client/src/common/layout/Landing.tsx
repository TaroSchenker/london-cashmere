import React from "react";
import { Link } from "react-router-dom";
import video from '../assets/video/istockphoto-1194949689-640_adpp_is.mp4';

const Landing = () => {
  return (
<div className="w-full relative h-screen flex flex-col justify-center bg-neutral-lightest text-center lg:px-8">
    <video
        style={{ filter: 'brightness(40%)' }}
        autoPlay
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
    >
        <source src={video} type="video/mp4" />
    </video>
    <div className="z-10 relative p-5 lg:max-w-3xl mx-auto bg-black bg-opacity-20 rounded-md shadow-lg">
        <h1 className="text-5xl font-extrabold mb-6 text-neutral-light leading-tight">
            Pam's Cashmere Boutique
        </h1>
        <p className="mb-6 text-neutral-light text-lg leading-relaxed">
            Pam's journey into the world of cashmere... short of perfection.
        </p>
        <p className="mb-10 text-neutral-light text-lg leading-relaxed">
            Step into Pam's Cashmere Boutique...
        </p>
        <div className="flex justify-center space-x-4">
            <Link
                to="/products"
                className="bg-primary text-background py-2 px-6 rounded-lg hover:bg-secondary transition-colors shadow-md"
            >
                Shop Now
            </Link>
            <Link
                to="/checkout"
                className="bg-background text-primary border border-primary py-2 px-6 rounded-lg hover:border-secondary hover:text-secondary transition-colors shadow-md"
            >
                Learn More
            </Link>
        </div>
    </div>
</div>

  );
};

export default Landing;
