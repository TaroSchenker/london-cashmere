import React from "react";
// Import the image

const ProductListHeader: React.FC = () => {
  return (
    <div
      className="relative h-28 md:h-40 lg:h-48 bg-center bg-cover mb-3"
      style={{
        backgroundImage: `url(${"https://images.unsplash.com/photo-1672175367991-2700cfbc0aa3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"})`,
      }}
    >
      {/* Overlay to make text stand out on top of the image */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 md:p-4 text-white space-y-2 z-10">
        <h1 className="text-xl pt-5 mt-5  sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wide break-words">
          Exclusive Arrival
        </h1>
        <p className="text-xs sm:text-sm md:text-lg break-words">
          Discover the essence of luxury fashion. Limited pieces, timeless
          elegance.
        </p>
      </div>
    </div>
  );
};

export default ProductListHeader;
