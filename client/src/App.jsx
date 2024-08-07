import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import ProductCategoryShowcase from "./components/product-showcase/ProductCategoryShowcase";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import AddProduct from "./components/create-edit/AddProduct";
import ProductDetails from "./components/product-details/ProductDetails";
import Profile from "./components/profile/Profile";
import OrderCompletion from "./components/order-completion/OrderCompletion";
import Footer from "./components/footer/Footer";

import AuthProvider from "./contexts/AuthContext";
import EditProduct from "./components/create-edit/EditProduct";
import LikedProvider from "./contexts/LikedContext";
import ShoppingBagProvider from "./contexts/ShoppingBagContext";
import PrivateRoute from "./components/routes/PrivateRoute";
import PublicRoute from "./components/routes/PublicRoutes";
import NotFoundPage from "./components/notFound/NotFoundPage.jsx";
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
