import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import { IProduct } from "../../../../types";

interface ProductGridProps {
  products: IProduct[];
  // addToCart: (product: IProduct, quantity: number) => void;
}
const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div role="grid">
      {/* Products grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <Link role="link" key={product._id} to={`/products/${product._id}`}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
