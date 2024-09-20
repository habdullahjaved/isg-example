import Link from "next/link";
import React from "react";
import ProductDetails from "./components/ProductDetails";
// import { useDispatch } from "react-redux";
// import { addToCart } from "@/app/lib/cart/cartSlice";

// Mock API function to get blog post by id
async function fetchBlogPost(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const post = await res.json();
  return post;
}

export default async function BlogPostPage({ params }) {
  const { id } = params;

  // Fetch the blog post data
  const post = await fetchBlogPost(id);

  // Initialize dispatch

  // Handle adding to cart
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: post.id,
        title: post.title,
        price: post.price,
      })
    );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="card p-4">
          <h1>{post.title}</h1>
          <p>{post.price} AED</p>
          <p>{post.category}</p>
          <ProductDetails post={post} />
          <Link href="/blog">Blog</Link>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  // Fetch all posts to generate static paths
  const res = await fetch("https://fakestoreapi.com/products");
  const posts = await res.json();

  // Convert id to a string before returning
  return posts.map((post) => ({
    id: post.id.toString(), // Ensure the id is a string
  }));
}

export const revalidate = 60; // Revalidate this page every 60 seconds
