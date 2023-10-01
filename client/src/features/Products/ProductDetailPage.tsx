import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { IProduct } from "../../types";
import ImageDisplay from "./components/ImageDisplay/ImageDisplay";
import ProductInfo from "./components/ProductInfo/ProductInfo";

const ProductDetailPage: React.FC = () => {
  const [isZoomed, setIsZoomed] = useState(false);
  const navigate = useNavigate();
  const data = useLoaderData() as { product: IProduct };

  if (!data || !data.product) {
    return <div>Error loading product</div>;
  }

  const { product } = data;

  return (
    <div className="relative pb-10 md:p-8 bg-background-color flex flex-col md:flex-row justify-center items-start">
      {/* Go Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="m-4 bg-primary-color text-background-color px-4 py-2 rounded relative top-4 left-4 md:relative md:top-auto md:left-auto md:mb-4"
      >
        ← Go Back
      </button>

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
