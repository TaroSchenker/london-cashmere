import React, { useState } from 'react';
import { IProduct } from '../../types';
import cashmere from '../../common/assets/images/cashmere.jpg'; 
import { useNavigate } from 'react-router-dom';
interface ProductDetailPageProps {
  product: IProduct;
}

const product = {
  _id: '60684691d8e1dc23345fe7e6',
  name: 'Classic Cashmere Jumper',
  description: 'A soft, classic cashmere jumper perfect for any occasion.',
  price: 120,
  size: ['S', 'M', 'L', 'XL'],
  color: ['White', 'Black', 'Gray'],
  imageUrl: cashmere,
  stockCount: 12,
}
const ProductDetailPage: React.FC = () => {
  const [isZoomed, setIsZoomed] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="p-8 bg-background-color">
      <button 
        onClick={() => navigate(-1)}
        className="mb-4 bg-primary-color text-background-color px-4 py-2 rounded"
      >
        ← Go Back
      </button>

      <div className="max-w-2xl mx-auto border rounded-lg overflow-hidden shadow-lg bg-white">

        {/* Image */}
        <div className="relative">
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className={`w-full h-96 object-cover cursor-pointer transition-transform duration-500 ${isZoomed ? 'scale-150' : ''}`} 
            onClick={() => setIsZoomed(!isZoomed)}
          />
          {product.stockCount === 0 && (
            <span className="absolute top-2 left-2 bg-neutral-dark text-background-color px-2 py-1 rounded">Out of Stock</span>
          )}
        </div>

        {/* Product details */}
        <div className="p-6">
          <h2 className="text-text-color font-body font-bold text-xl mb-2">{product.name}</h2>
          <p className="text-neutral-dark mb-4">{product.description}</p>

          {/* Placeholder for Care Instructions */}
          <p className="text-neutral mb-4">Care Instructions: Hand wash only.</p>
          
          <div className="mb-3">
            <span className="text-neutral-dark">Sizes: {product.size.join(', ')}</span>
          </div>

          <div className="mb-4 flex items-center">
            <span className="text-neutral-dark mr-2">Colors:</span>
            {product.color.map((c, index) => (
              <span 
                key={index} 
                className="inline-block w-6 h-6 mr-1 rounded-full" 
                style={{ backgroundColor: c }}
              ></span>
            ))}
          </div>

          <div className="flex items-center justify-between mb-4">
            <span className="font-bold text-primary-color text-2xl">£{product.price}</span>
            <button 
              className={`bg-primary-color text-background-color px-6 py-2 rounded ${product.stockCount === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={product.stockCount === 0}
            >
              Add to Cart
            </button>
          </div>

          {/* Placeholder for Customer Reviews */}
          <div className="border-t pt-4 mb-4">
            <h3 className="font-body font-bold mb-2">Customer Reviews:</h3>
            <p>No reviews yet. Be the first to review this product!</p>
          </div>

          {/* Save for Later & Share buttons */}
          <div className="flex items-center justify-between">
            <button className="bg-neutral text-background-color px-6 py-2 rounded">
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
