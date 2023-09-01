import React from 'react';
import { IProduct } from '../../../types/index';

interface ProductCardProps {
  product: IProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 bg-background-color hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
        {product.stockCount === 0 && (
          <span className="absolute top-2 left-2 bg-neutral-dark text-background-color px-2 py-1 rounded">Out of Stock</span>
        )}
      </div>
      <h2 className="text-text-color font-body font-bold mt-2">{product.name}</h2>
      <p className="text-neutral-dark mt-1">{product.description}</p>
      
      <div className="flex mt-2 items-center">
        <div className="flex-1">
          <span className="text-sm text-neutral-dark">Sizes: {product.size.join(', ')}</span>
        </div>
        <span className="font-bold text-primary-color">£{product.price}</span>
      </div>

      <div className="flex mt-2 items-center">
        <div className="flex-1">
          <span className="text-sm text-neutral-dark">Colors: </span>
          {product.color.map((c, index) => (
            <span 
              key={index} 
              className="inline-block w-4 h-4 mr-1 rounded-full" 
              style={{ backgroundColor: c }}
            ></span>
          ))}
        </div>
        <button 
          className={`bg-primary-color text-background-color px-3 py-1 rounded ${product.stockCount === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={product.stockCount === 0}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};  

export default ProductCard;
