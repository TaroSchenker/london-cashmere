import React from "react";
import { IProduct } from "../../../../types";
import AddToCartButton from "../AddToCartButton/AddToCartButton";

interface ProductInfoProps {
  product: IProduct;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  return (
    <div className="p-6 w-full md:w-1/2">
      <h2 className="text-black font-serif font-bold text-2xl mb-2">
        {product.name}
      </h2>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <p className="text-neutral mb-4">Care Instructions: Hand wash only.</p>

      <div className="mb-3">
        <span className="text-sm text-gray-500">
          Sizes: {product.size.join(", ")}
        </span>
      </div>

      <div className="flex items-center justify-between mb-4">
        <span className="font-serif font-bold text-2xl text-black">
          £{product.price.toFixed(2)}
        </span>
        <AddToCartButton product={product} />
      </div>

      <div className="border-t pt-4 mb-4">
        <h3 className="font-serif font-bold mb-2">Customer Reviews:</h3>
        <p>No reviews yet. Be the first to review this product!</p>
      </div>

      {/* Save for Later & Share buttons */}
      <div className="flex items-center justify-between flex-wrap">
        <button className="bg-neutral text-background-color px-6 py-2 rounded mb-2 md:mb-0">
          Save for Later
        </button>
        <button className="bg-neutral text-background-color px-6 py-2 rounded">
          Share
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
