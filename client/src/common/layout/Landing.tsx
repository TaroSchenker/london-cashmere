/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Link } from "react-router-dom";
import video from "../assets/video/istockphoto-1194949689-640_adpp_is.mp4";

const Landing = () => {
  return (
    <div className="w-full relative h-screen flex flex-col justify-center bg-neutral-lightest text-center lg:px-8">
      <video
        style={{ filter: "brightness(40%)" }}
        poster={
          "https://images.unsplash.com/photo-1602706294170-1fed8eecd9f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
        }
        playsInline
        autoPlay
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={video} type="video/mp4" />
      </video>

      <div className="z-10 relative p-10 lg:max-w-4xl mx-auto bg-gradient-to-r from-black to-transparent bg-opacity-20 rounded-md">
        <Link to="/" className="block text-center">
          <h1
            className="text-7xl font-bold mb-6 text-white leading-tight"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            LONDON
          </h1>
          <span
            className="text-4xl text-gray-200"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Cashmere Boutique
          </span>
        </Link>

        <p
          className="mb-8 mt-6 text-white text-lg leading-relaxed font-light"
          style={{ fontFamily: "'Roboto', sans-serif" }}
        >
          Discover the epitome of warmth and sophistication. A journey crafted
          with the finest cashmere.
        </p>
        <div className="flex justify-center space-x-8">
          <Link
            to="/products"
            className="bg-black text-white border border-white py-4 px-12 rounded-lg hover:bg-white hover:text-black transition-colors duration-300 shadow-lg font-medium text-xl"
          >
            Shop Now
          </Link>
          <Link
            to="/about"
            className="text-neutral border border-neutral py-4 px-12 rounded-lg hover:bg-black hover:text-white transition-colors duration-300 shadow-lg font-medium text-xl"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
