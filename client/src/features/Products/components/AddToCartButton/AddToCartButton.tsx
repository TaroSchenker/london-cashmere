import React, { useState } from "react";
import { useAddToCart } from "../../../../hooks/useAddToCart";
import { IProduct } from "../../../../types";
import { toast } from "react-toastify";

interface AddToCartButtonProps {
  product: IProduct;
  buttonText?: string;
  onAdded?: () => void;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  product,
  buttonText = "Add to Cart",
  onAdded,
}) => {
  const [buttonLabel, setButtonLabel] = useState<string>(buttonText);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const addToCartHandler = useAddToCart(product);

  const handleAddToCart = () => {
    addToCartHandler();
    toast.success(`${product.name} added to cart`, {
      position: toast.POSITION.TOP_LEFT,
      autoClose: 1000,
    });

    if (onAdded) onAdded();

    setButtonLabel("Added!");
    setIsAnimating(true);

    setTimeout(() => {
      setButtonLabel(buttonText);
      setIsAnimating(false);
    }, 1500);
  };

  const animationStyle = isAnimating
    ? "bg-gray-800 transition-bg duration-750"
    : "bg-black transition-bg duration-300";

  return (
    <button
      className={`text-white px-6 py-2 rounded ${animationStyle} ${
        product.stockCount === 0 ? "opacity-50 cursor-not-allowed" : ""
      }`}
      disabled={product.stockCount === 0}
      onClick={handleAddToCart}
    >
      {buttonLabel}
    </button>
  );
};

export default AddToCartButton;
