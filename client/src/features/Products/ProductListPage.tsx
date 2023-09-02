import React from "react";
import { dummyProducts } from "./dummyData";
import ProductCard from "./components/ProductCard";
import { Link } from "react-router-dom";

const ProductListPage: React.FC = () => {
  return (
    <div className="bg-background-color min-h-screen py-10">
      <div className="container">
        <h1 className="text-3xl font-bold mb-6">The Collection</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-small">
          {dummyProducts.map((product, index) => (
            <>
              <Link key={index} to={`/products/${index}`}>
                <ProductCard key={`${product} + ${index}`} product={product} />
              </Link>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;
