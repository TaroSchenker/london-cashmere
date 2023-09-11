import React, { useState } from "react";
// import { IProduct } from "../../types";
// import cashmere from "../../common/assets/images/cashmere.jpg";
import { useLoaderData, useNavigate } from "react-router-dom";
import { IProduct } from "../../types";
// interface ProductDetailPageProps {
//   product: IProduct;
// }

// const product = {
//   _id: "60684691d8e1dc23345fe7e6",
//   name: "Classic Cashmere Jumper",
//   description: "A soft, classic cashmere jumper perfect for any occasion.",
//   price: 120,
//   size: ["S", "M", "L", "XL"],
//   color: ["White", "Black", "Gray"],
//   imageUrl: cashmere,
//   stockCount: 12,
// };

const ProductDetailPage: React.FC = () => {
  const [isZoomed, setIsZoomed] = useState(false);
  const navigate = useNavigate();
  const data = useLoaderData() as { product: IProduct };
  const { product } = data;

  return (
    <div className="p-4 md:p-8 bg-background-color flex flex-col md:flex-row justify-center items-center">
      {/* go back button -  
      go back button needs to be fixed, its positioning is not correct.
      */}
      <div className="mb-4 md:mb-0 md:absolute md:top-1/2 md:-translate-y-1/2 md:left-8 bg-primary-color text-background-color px-4 py-2 rounded transform">
        <button onClick={() => navigate(-1)}>← Go Back</button>
      </div>
      <div className="max-w-full md:max-w-4xl w-full border border-gray-300 rounded-lg hover:shadow-xl transition-shadow duration-300 bg-white flex flex-col md:flex-row">
        {/* Image */}
        <div className="relative w-full md:w-1/2 p-6">
          <img
            src={product.imageUrl}
            alt={product.name}
            className={`w-full h-64 md:h-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-t-lg ${
              isZoomed ? "scale-150" : ""
            }`}
            onClick={() => setIsZoomed(!isZoomed)}
          />
          {product.stockCount === 0 && (
            <span className="absolute top-2 left-2 bg-black text-white px-3 py-1 rounded">
              Out of Stock
            </span>
          )}
        </div>

        {/* Product details */}
        <div className="p-6 w-full md:w-1/2">
          <h2 className="text-black font-serif font-bold text-2xl mb-2">
            {product.name}
          </h2>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-neutral mb-4">
            Care Instructions: Hand wash only.
          </p>

          <div className="mb-3">
            <span className="text-sm text-gray-500">
              Sizes: {product.size.join(", ")}
            </span>
          </div>

          <div className="mb-4 flex items-center flex-wrap">
            <span className="text-sm text-gray-500 mr-2">Colors:</span>
            {product.color.map((c, index) => (
              <span
                key={index}
                className="inline-block w-6 h-6 mr-1 mt-1 rounded-full"
                style={{ backgroundColor: c }}
              ></span>
            ))}
          </div>

          <div className="flex items-center justify-between mb-4">
            <span className="font-serif font-bold text-2xl text-black">
              £{product.price.toFixed(2)}
            </span>
            <button
              className={`bg-black text-white px-6 py-2 rounded transition-transform duration-300 transform ${
                product.stockCount === 0
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:scale-105"
              }`}
              disabled={product.stockCount === 0}
            >
              Add to Cart
            </button>
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
      </div>
    </div>
  );
};

export default ProductDetailPage;
