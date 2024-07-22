import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import ProductCategoryShowcase from "./components/product-showcase/ProductCategoryShowcase";
import Footer from "./components/footer/Footer";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import CrateEdit from "./components/create-edit/CreateEdit";
import ProductDetails from "./components/product-details/ProductDetails";
import Profile from "./components/profile/Profile";

function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <ProductCategoryShowcase />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create-product" element={<CrateEdit />} />
          <Route path="/product/:productId/details" element={<ProductDetails />} />
          <Route path="/profile/:profileId" element={<Profile />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
