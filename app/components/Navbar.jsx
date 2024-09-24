import Link from "next/link";
import React from "react";
import NavCart from "./cart/NavCart";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <Link href="/" style={styles.logoLink}>
          <img src="/logo.png" alt="Logo" style={styles.logoImage} />
        </Link>
      </div>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link href="/" style={styles.navLink}>
            Home
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link href="/product" style={styles.navLink}>
            Products
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link href="/myblog" style={styles.navLink}>
            Blog
          </Link>
        </li>
      </ul>
      <div style={styles.buttonContainer}>
        <NavCart />
        <button style={styles.button}>Contact Us</button>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f8f9fa",
    padding: "10px 20px",
    borderBottom: "1px solid #e7e7e7",
  },
  logo: {
    flex: 1,
  },
  logoLink: {
    textDecoration: "none",
  },
  logoImage: {
    height: "40px", // Adjust logo size as needed
  },
  navList: {
    flex: 2,
    display: "flex",
    justifyContent: "center",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: "0 20px",
  },
  navLink: {
    textDecoration: "none",
    color: "#0070f3",
    fontSize: "16px",
    fontWeight: "500",
  },
  buttonContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "justify-content-between",
    alignItems: "center",
    gap: "10px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#0070f3",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default Navbar;
