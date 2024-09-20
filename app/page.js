import Image from "next/image";
import styles from "./page.module.css";
import ProductSection from "./components/products/ProductSection";

export default function Home() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <h1>Luxury Art Transport</h1>
          <p>
            We Provide best buses and chauffeur serive in dubai book with us{" "}
          </p>
        </div>

        <ProductSection />
      </div>
    </section>
  );
}
