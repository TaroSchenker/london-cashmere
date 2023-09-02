import React from "react";
// Import the image
import luxuryImage from '../assets/images/stock-photo-stack-of-white-and-gray-cozy-knitted-sweaters-on-rustic-wooden-background-469992296.jpg'; 

const ProductListHeader: React.FC = () => {
  return (
    <div className="relative h-48 bg-center bg-cover mb-3" style={{ backgroundImage: `url(${luxuryImage})` }}>
      
      {/* Overlay to make text stand out on top of the image */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="absolute top-1/4 left-1/4 text-white space-y-2 z-10"> 
        <h1 className="text-4xl font-semibold tracking-wide">Exclusive Arrival</h1>
        <p className="text-lg">Discover the essence of luxury fashion. Limited pieces, timeless elegance.</p>
      </div>
    </div>
  );
};

export default ProductListHeader;
