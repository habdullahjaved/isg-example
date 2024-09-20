import React from "react";
import Link from "next/link"; // Link component for internal routing

// Fetching all blog posts from the API
async function fetchAllPosts() {
  const res = await fetch("https://fakestoreapi.com/products");
  const posts = await res.json();
  return posts;
}

export default async function BlogPage() {
  const posts = await fetchAllPosts(); // Fetch all blog posts

  return (
    <div className="container">
      <h1>Blog Posts</h1>
      <div className="row">
        {posts.map((post) => (
          <div className="col-md-4" key={post.id}>
            {/* Link to the specific post page */}
            <div className="card p-4">
              <p>{post.title}</p>
              <p>{post.price} AED</p>
              <p>{post.category}</p>
              <Link href={`/blog/${post.id}`}>Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Setting revalidate for incremental static regeneration
export const revalidate = 2; // Revalidate every 60 seconds
