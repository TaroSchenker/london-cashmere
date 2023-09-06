import React from "react";
// Import the image
import luxuryImage from "../assets/images/stock-photo-stack-of-white-and-gray-cozy-knitted-sweaters-on-rustic-wooden-background-469992296.jpg";
const ProductListHeader: React.FC = () => {
  return (
    <div
      className="relative h-48 md:h-64 lg:h-80 bg-center bg-cover mb-3"
      style={{ backgroundImage: `url(${luxuryImage})` }}
    >
      {/* Overlay to make text stand out on top of the image */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="absolute top-1/4 left-1/4 p-4 md:p-0 text-white space-y-2 z-10">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wide">
          Exclusive Arrival
        </h1>
        <p className="text-sm md:text-lg">
          Discover the essence of luxury fashion. Limited pieces, timeless
          elegance.
        </p>
      </div>
    </div>
  );
};

export default ProductListHeader;
