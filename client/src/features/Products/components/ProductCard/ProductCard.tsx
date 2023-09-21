import React from "react";
import { IProduct } from "../../../../types/index";

import { Link } from "react-router-dom";

import AddToCartButton from "../AddToCartButton/AddToCartButton";

interface ProductCardProps {
  product: IProduct;
}
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 bg-white">
      <div className="relative group">
        <Link role="link" key={product._id} to={`/products/${product._id}`}>
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105 rounded-t-lg"
          />
        </Link>
        {product.stockCount === 0 && (
          <span className="absolute top-2 left-2 bg-black text-white px-3 py-1 rounded">
            Out of Stock
          </span>
        )}
      </div>
      <Link role="link" key={product._id} to={`/products/${product._id}`}>
        <h2 className="text-black font-serif font-bold text-xl mt-4">
          {product.name}
        </h2>
      </Link>
      <p className="text-gray-600 mt-2">{product.description}</p>

      <div className="flex mt-4 items-center">
        <div className="flex-1">
          <span className="text-sm text-gray-500">
            Sizes: {product.size.join(", ")}
          </span>
        </div>
        <span className="font-serif font-bold text-lg text-black">
          £{product.price.toFixed(2)}
        </span>
      </div>

      <div className="flex mt-4 items-center">
        <AddToCartButton product={product} />
      </div>
    </div>
  );
};

export default ProductCard;
