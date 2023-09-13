import React from "react";
import { IProduct } from "../../../../types";

interface ImageDisplayProps {
  product: IProduct;
  isZoomed: boolean;
  toggleZoom: () => void;
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({
  product,
  isZoomed,
  toggleZoom,
}) => {
  return (
    <div className="relative w-full md:w-1/2 p-6">
      <img
        src={product.imageUrl}
        alt={product.name}
        className={`w-full h-64 md:h-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-t-lg ${
          isZoomed ? "scale-150" : ""
        }`}
        onClick={toggleZoom}
      />
      {product.stockCount === 0 && (
        <span className="absolute top-2 left-2 bg-black text-white px-3 py-1 rounded">
          Out of Stock
        </span>
      )}
    </div>
  );
};

export default ImageDisplay;
