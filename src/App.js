import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Success from "./pages/Success";

import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Wishlist from "./pages/Wishlist";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./pages/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="product">
            <Route index element={<ProductList />} />
            <Route path=":id" element={<Product />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
