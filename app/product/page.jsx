import React from "react";
import Link from "next/link"; // Link component for internal routing

// Fetching all blog products from the API
async function fetchAllProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  return products;
}

export default async function ProductPage() {
  const products = await fetchAllProducts(); // Fetch all blog products

  return (
    <div className="container">
      <h1>All Products</h1>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4" key={product.id}>
            {/* Link to the specific product page */}
            <div className="card p-4">
              <p>{product.title}</p>
              <p>{product.price} AED</p>
              <p>{product.category}</p>
              <Link href={`/product/${product.id}`}>Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Setting revalidate for incremental static regeneration
export const revalidate = 2; // Revalidate every 60 seconds
