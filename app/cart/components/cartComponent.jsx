"use client";

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "@/app/lib/cart/cartSlice";
import CounterComponent from "@/app/components/counter/CounterComponent";

const CartComponent = () => {
  // Get cart items from the Redux store
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Ensure the component is mounted before rendering the cart
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Return nothing while mounting
  }

  return (
    <div style={styles.cartContainer}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} style={styles.cartItem}>
              {/* <img src={item.image} alt={item.title} style={styles.image} /> */}
              <div style={styles.itemDetails}>
                <h4>{item.title}</h4>
                <p>Price: {item.price} AED</p>
                <p>Quantity: {item.quantity}</p>
                <button
                  style={styles.removeButton}
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <h3>Total Price: {totalPrice.toFixed(2)} AED</h3>

          <hr />
          <CounterComponent />
        </div>
      )}
    </div>
  );
};

const styles = {
  cartContainer: {
    padding: "20px",
    backgroundColor: "#f8f9fa",
    borderRadius: "10px",
    maxWidth: "600px",
    margin: "0 auto",
  },
  cartItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },
  image: {
    width: "50px",
    height: "50px",
    marginRight: "20px",
  },
  itemDetails: {
    display: "flex",
    flexDirection: "column",
  },
  removeButton: {
    backgroundColor: "#ff4d4d",
    color: "white",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default CartComponent;
