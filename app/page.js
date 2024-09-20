import Image from "next/image";
import styles from "./page.module.css";
import ProductSection from "./components/products/ProductSection";

export default function Home() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <h1>Ecommerce Demo app</h1>
          <p>
            I have build this application with next js used redux toolkit and
            also add to cart functionality
          </p>
        </div>

        <ProductSection />
      </div>
    </section>
  );
}
