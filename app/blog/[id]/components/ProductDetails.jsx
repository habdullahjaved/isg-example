// app/blog/[id]/ProductDetails.jsx (Client Component)
"use client";

import { useDispatch } from "react-redux";
import { addToCart } from "@/app/lib/cart/cartSlice";
import { useState } from "react";

export default function ProductDetails({ post }) {
  const dispatch = useDispatch();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    dispatch(
      addToCart({
        id: post.id,
        title: post.title,
        price: post.price,
      })
    );
    setTimeout(() => setIsAdding(false), 500); // Reset button state after adding
  };

  return (
    <div>
      <button onClick={handleAddToCart} className="btn btn-primary">
        {isAdding ? "Adding to Cart..." : "Add to Cart"}
      </button>
    </div>
  );
}
