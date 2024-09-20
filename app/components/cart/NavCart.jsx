"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const NavCart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const [hasMounted, setHasMounted] = useState(false);

  // Ensure this component renders only on the client after hydration
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Render nothing on the server-side to prevent hydration mismatch
  if (!hasMounted) {
    return null;
  }

  return (
    <div
      style={{
        height: "30px",
        width: "30px",
        background: "gray",
        borderRadius: "50%",
        padding: "10px",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <Link href="/cart" style={{ color: "white" }}>
        {" "}
        {cartItems.length}
      </Link>
    </div>
  );
};

export default NavCart;
