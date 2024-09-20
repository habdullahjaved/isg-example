// app/layout.js or app/page.js
// import Footer from "../components/sections/Footer";
import Navbar from "../components/Navbar";
import { ReduxProvider } from "../ReduxProvider";

export default function Layout({ children }) {
  return (
    <ReduxProvider>
      <Navbar />
      <main>{children}</main>
    </ReduxProvider>
  );
}
