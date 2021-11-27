import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Success from "./pages/Success";

import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Profile from "./pages/Profile";
import Wishlist from "./pages/Wishlist";

const App = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  return (
    <>
      <ReactNotification />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products/:category">
            <ProductList />
          </Route>
          <Route path="/product/:id">
            <Product />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/success">
            <Success />
          </Route>
          <Route path="/login">
            {isAuthenticated ? <Redirect to="/" /> : <Login />}
          </Route>
          <Route path="/register">
            {isAuthenticated ? <Redirect to="/" /> : <Register />}
          </Route>
          <Route path="/profile">
            {isAuthenticated ? <Profile /> : <Redirect to="/login" />}
          </Route>
          <Route path="/wishlist">
            {isAuthenticated ? <Wishlist /> : <Redirect to="/login" />}
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
