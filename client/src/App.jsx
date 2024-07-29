import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import ProductCategoryShowcase from "./components/product-showcase/ProductCategoryShowcase";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import AddProduct from "./components/create-edit/AddProduct";
import ProductDetails from "./components/product-details/ProductDetails";
import Profile from "./components/profile/Profile";
import Footer from "./components/footer/Footer";

import AuthProvider from "./contexts/AuthContext"; "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
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
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/product/:productId/details" element={<ProductDetails />} />
          <Route path="/profile/:profileId" element={<Profile />} />
        </Routes>
      </main>

      <Footer />
    </AuthProvider>
  );
}

export default App;