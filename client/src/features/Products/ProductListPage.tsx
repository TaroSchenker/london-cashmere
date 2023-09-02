import React from "react";
import { dummyProducts } from "./dummyData";
import ProductCard from "./components/ProductCard";
import { Link } from "react-router-dom";
import ProductListHeader from "../../common/layout/ProductListHeader";
import SaleBanner from "../../common/layout/SaleBanner";

const ProductListPage: React.FC = () => {
  return (
    <div className="bg-background-color min-h-screen py-10">
      <div className="container mx-auto px-6">
        <ProductListHeader />
        <SaleBanner />
        {/* Storytelling section */}
        <div className="my-10">
          <p className="text-xl text-gray-700 font-light leading-relaxed">
            Every piece in 'The Collection' is crafted with dedication to detail
            and a commitment to excellence. Experience the pinnacle of luxury
            with our curated selections.
          </p>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {dummyProducts.map((product, index) => (
            <Link key={index} to={`/products/${index}`}>
              <ProductCard key={`${product} + ${index}`} product={product} />
            </Link>
          ))}
        </div>

        {/* Footer information */}
        <div className="mt-16 border-t pt-10">
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-gray-600 hover:text-black">
                Customer Service
              </Link>
            </li>
            <li>
              <Link to="/" className="text-gray-600 hover:text-black">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/" className="text-gray-600 hover:text-black">
                Return Policy
              </Link>
            </li>
            {/* Add more essential links as needed */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;
