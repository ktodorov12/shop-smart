import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import ProductCategoryShowcase from "./components/product-showcase/ProductCategoryShowcase";
import Footer from "./components/footer/Footer";
import Auth from "./components/auth/Auth";

function App() {
  return (
    <>
      <Header />

      <main>
        <Banner />
        <ProductCategoryShowcase />
      </main>

      {/* <Auth></Auth> */}

      <Footer />
    </>
  );
}

export default App;
