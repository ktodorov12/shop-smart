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

import AuthProvider from "./contexts/AuthContext";
import EditProduct from "./components/create-edit/EditProduct";
import LikedProvider from "./contexts/LikedContext";
import ShoppingBagProvider from "./contexts/ShoppingBagContext";
("./contexts/AuthContext");

const homePaths = ["/", "/:category/:sublist", "/favourites"];

function App() {
  return (
    <AuthProvider>
      <LikedProvider>
        <ShoppingBagProvider>
          <Header />

          <main>
            <Routes>
              {homePaths.map((path) => (
                <Route
                  path={path}
                  key={path}
                  element={
                    <>
                      <Banner />
                      <ProductCategoryShowcase />
                    </>
                  }
                />
              ))}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/add-product" element={<AddProduct />} />
              <Route path="/details/:productId" element={<ProductDetails />} />
              <Route path="/edit/:productId" element={<EditProduct />} />
              <Route path="/profile/:profileId" element={<Profile />} />
            </Routes>
          </main>

          <Footer />
        </ShoppingBagProvider>
      </LikedProvider>
    </AuthProvider>
  );
}

export default App;
