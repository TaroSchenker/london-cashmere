import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { IProduct } from "../../types";
import ImageDisplay from "./components/ImageDisplay/ImageDisplay";
import ProductInfo from "./components/ProductInfo/ProductInfo";

const ProductDetailPage: React.FC = () => {
  const [isZoomed, setIsZoomed] = useState(false);
  const navigate = useNavigate();
  const data = useLoaderData() as { product: IProduct };
  const { product } = data;

  return (
    <div className="p-4 md:p-8 bg-background-color flex flex-col md:flex-row justify-center items-center">
      {/* go back button */}
      <div className="mb-4 md:mb-0 md:absolute md:top-1/2 md:-translate-y-1/2 md:left-8 bg-primary-color text-background-color px-4 py-2 rounded transform">
        <button onClick={() => navigate(-1)}>← Go Back</button>
      </div>
      <div className="max-w-full md:max-w-4xl w-full border border-gray-300 rounded-lg hover:shadow-xl transition-shadow duration-300 bg-white flex flex-col md:flex-row">
        <ImageDisplay
          product={product}
          isZoomed={isZoomed}
          toggleZoom={() => setIsZoomed(!isZoomed)}
        />
        <ProductInfo product={product} />
      </div>
    </div>
  );
};

export default ProductDetailPage;
