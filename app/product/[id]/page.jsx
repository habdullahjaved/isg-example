import Link from "next/link";
import React from "react";
import ProductDetails from "@/app/blog/[id]/components/ProductDetails";
// import { useDispatch } from "react-redux";
// import { addToCart } from "@/app/lib/cart/cartSlice";

// Mock API function to get blog product by id
async function fetchBlogProduct(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await res.json();
  return product;
}

export default async function SinglProductPage({ params }) {
  const { id } = params;

  // Fetch the blog product data
  const product = await fetchBlogProduct(id);

  // Initialize dispatch

  // Handle adding to cart
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
      })
    );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="card p-4">
          <h1>{product.title}</h1>
          <p>{product.price} AED</p>
          <p>{product.category}</p>
          <ProductDetails post={product} />
          <Link href="/blog">Blog</Link>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  // Fetch all products to generate static paths
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  // Convert id to a string before returning
  return products.map((product) => ({
    id: product.id.toString(), // Ensure the id is a string
  }));
}

export const revalidate = 60; // Revalidate this page every 60 seconds
