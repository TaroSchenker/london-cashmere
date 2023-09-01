import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="h-screen flex flex-col justify-start bg-neutral-lightest pt-8 px-8 text-center">
      <h1 className="text-4xl font-bold mb-6 text-text-color">Pam's Cashmere Boutique</h1>
      <p className="mb-6 text-text-color">
        Pam's journey into the world of cashmere is one marked by a relentless pursuit of quality. Every jumper has been chosen with an attention to detail that only true passion can bring. From the weave to the texture, and from its hue to its silhouette, Pam ensures that each piece is nothing short of perfection.
      </p>
      <p className="mb-10 text-text-color">
        Step into Pam's Cashmere Boutique, and experience the luxury of her carefully curated collection.
      </p>
      <div className="flex justify-center space-x-4">
        <Link 
          to="/shop" 
          className="bg-primary text-background py-2 px-6 rounded hover:bg-secondary transition-colors"
        >
          Shop Now
        </Link>
        <Link 
          to="/about" 
          className="bg-background text-primary border border-primary py-2 px-6 rounded hover:border-secondary hover:text-secondary transition-colors"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default Landing;
