import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header.js";
import Banner from "./components/banner/Banner.js";
import ProductCategoryShowcase from "./components/product-showcase/ProductCategoryShowcase.js";
import Login from "./components/auth/Login.js";
import Register from "./components/auth/Register.js";
import AddProduct from "./components/create-edit/AddProduct.js";
import ProductDetails from "./components/product-details/ProductDetails.js";
import Profile from "./components/profile/Profile.js";
import OrderCompletion from "./components/order-completion/OrderCompletion.js";
import Footer from "./components/footer/Footer.js";

import AuthProvider from "./contexts/AuthContext.js";
import EditProduct from "./components/create-edit/EditProduct.js";
import LikedProvider from "./contexts/LikedContext.js";
import ShoppingBagProvider from "./contexts/ShoppingBagContext.js";
import PrivateRoute from "./components/routes/PrivateRoute.js";
import PublicRoute from "./components/routes/PublicRoutes.js";
import NotFoundPage from "./components/notFound/NotFoundPage.js";
("./contexts/AuthContext");

const homePaths = ["/", "/:category/:sublist", "/favourites"];

function App() {
  return (
    <AuthProvider>
      <LikedProvider>
        <ShoppingBagProvider>
          <Header />

          <main className="main-content">
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
              <Route path="/details/:productId" element={<ProductDetails />} />

              <Route element={<PublicRoute />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Route>

              <Route element={<PrivateRoute />}>
                <Route path="/add-product" element={<AddProduct />} />
                <Route path="/edit/:productId" element={<EditProduct />} />
                <Route path="/profile/:profileId" element={<Profile />} />
                <Route path="/order-completion" element={<OrderCompletion />} />
              </Route>

              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>

          <Footer />
        </ShoppingBagProvider>
      </LikedProvider>
    </AuthProvider>
  );
}

export default App;
