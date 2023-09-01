import React from 'react';
import { IProduct } from '../../../types/index';

interface ProductCardProps {
  product: IProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
<div className="border rounded-lg p-4 bg-background-color">
  <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
  <h2 className="text-text-color font-body font-bold mt-2">{product.name}</h2>
  <p className="text-neutral-dark mt-1">{product.description}</p>
  <div className="mt-2 flex justify-between items-center">
    <span className="font-bold text-primary-color">${product.price}</span>
    <button className="bg-primary-color text-background-color px-3 py-1 rounded">Add to Cart</button>
  </div>
</div>

  );
};  

export default ProductCard;
