import React from "react";
import { Link } from "react-router-dom";
import video from '../assets/video/istockphoto-1194949689-640_adpp_is.mp4'
const Landing = () => {
  return (
    <div className="relative h-screen flex flex-col justify-start bg-neutral-lightest pt-8 px-8 text-center">
      <video
    style={{ filter: 'brightness(50%)' }}
    autoPlay
    muted
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
>
    <source src={video} type="video/mp4" />
</video>
      <div className="z-10 relative">
        <h1 className="text-4xl font-bold mb-6 text-neutral-light">
          Pam's Cashmere Boutique
        </h1>
        <p className="mb-6 text-neutral-light">
          Pam's journey into the world of cashmere is one marked by a relentless
          pursuit of quality. Every jumper has been chosen with an attention to
          detail that only true passion can bring. From the weave to the
          texture, and from its hue to its silhouette, Pam ensures that each
          piece is nothing short of perfection.
        </p>
        <p className="mb-10 text-neutral-light">
          Step into Pam's Cashmere Boutique, and experience the luxury of her
          carefully curated collection.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/products"
            className="bg-primary text-background py-2 px-6 rounded hover:bg-secondary transition-colors"
          >
            Shop Now
          </Link>
          <Link
            to="/checkout"
            className="bg-background text-primary border border-primary py-2 px-6 rounded hover:border-secondary hover:text-secondary transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
