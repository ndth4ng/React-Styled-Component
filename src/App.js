import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Wishlist from "./pages/Wishlist";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./pages/Layout";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="products">
              {/* <Route index element={<ProductList />} /> */}
              <Route path=":category" element={<ProductList />} />
            </Route>

            <Route path="product">
              <Route index element={<ProductList />} />
              <Route path=":productId" element={<Product />} />
            </Route>

            {/* Protected Routes */}
            <Route
              path="wishlist"
              element={
                <ProtectedRoute redirectTo="wishlist">
                  <Wishlist />
                </ProtectedRoute>
              }
            />
            <Route
              path="cart"
              element={
                <ProtectedRoute redirectTo="cart">
                  <Cart />
                </ProtectedRoute>
              }
            />
            <Route
              path="profile"
              element={
                <ProtectedRoute redirectTo="profile">
                  <Profile />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
