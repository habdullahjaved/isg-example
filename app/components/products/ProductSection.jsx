import React from "react";
import Link from "next/link"; // Link component for internal routing

// Fetching all products from the API
async function fetchAllProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  return products;
}

export default async function ProductSection() {
  const products = await fetchAllProducts(); // Fetch all products

  return (
    <div className="container">
      <h1>Our Products</h1>
      <div className="row">
        {products.slice(0, 9)?.map((product) => (
          <div className="col-md-4 mb-2" key={product.id}>
            {/* Each product should be linked to its detail page */}
            <div className="card p-4 mb-2" style={styles.card}>
              <div style={styles.imageContainer}>
                <img
                  src={product.image}
                  alt={product.title}
                  style={styles.image}
                />
              </div>
              <p>{product.title}</p>
              <p>{product.price} AED</p>
              <p>{product.category}</p>
              <Link href={`/product/${product.id}`}>View Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Setting revalidate for incremental static regeneration (ISR)
export const revalidate = 60; // Revalidate every 60 seconds

// Styles for consistent card height and layout
const styles = {
  card: {
    height: "100%", // Full height card
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  imageContainer: {
    height: "200px", // Fixed height for image container
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden", // Ensures the image fits within the container
  },
  image: {
    maxHeight: "100%", // Ensure the image scales properly
    maxWidth: "100%", // Keep aspect ratio and avoid distortion
    objectFit: "cover", // Ensures the image covers the container fully
  },
};
