import { Badge } from "antd";
import { Link } from "react-router-dom";
import { logout } from "../redux/userRedux";
import { useState } from "react";
import { useGetAuthQuery } from "../services/user";
import { useGetCartQuery } from "../services/cart";

import {
  HeartIconOutline,
  CartIconOutline,
  HamburgerMenuIcon,
} from "../constants";
import Sidebar from "./Mobile/Sidebar";
import { useAppDispatch, useAppSelector } from "../hooks/hook";

const Navbar = () => {
  //state
  const [visible, setVisible] = useState<boolean>(false); // Sidebar

  //selector
  const { currentUser, isAuthenticated } = useAppSelector((state) => state.user);
  const { quantity } = useAppSelector((state) => state.cart);

  //hook
  const { data: userData, isLoading, isSuccess } = useGetAuthQuery();

  useGetCartQuery(userData?.user._id, {
    skip: !isSuccess, // wait the first hook response
  });

  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="h-[60px] bg-gray-200">
      <div className="flex items-center justify-center h-full px-5 py-2">
        {/* Left */}
        <div className="items-center flex-1 hidden space-x-2 md:flex">
          <input className="px-2 py-1" placeholder="Search" />
        </div>

        {/* Mobile */}
        <div className="flex items-center flex-1 md:hidden">
          <HamburgerMenuIcon
            className="!text-3xl"
            onClick={() => setVisible(true)}
          />
          <Sidebar visible={visible} onClose={() => setVisible(false)} />
        </div>

        {/* Center */}
        <div className="flex-1 text-center">
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <span className="text-2xl font-bold cursor-pointer">DEV.</span>
          </Link>
        </div>

        {/* Right */}

        <div className="flex items-center justify-end flex-1 space-x-5">
          {isLoading ? (
            <span>Loading...</span>
          ) : (
            <>
              {!isAuthenticated && (
                <Link
                  className="hidden md:block"
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/register"
                >
                  <span>REGISTER</span>
                </Link>
              )}

              {!isAuthenticated && (
                <Link
                  to="/login"
                  className="hidden md:block"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <span>SIGN IN</span>
                </Link>
              )}

              {isAuthenticated && (
                <span className="cursor-pointer" onClick={() => handleLogout()}>
                  LOG OUT
                </span>
              )}

              {isAuthenticated && (
                <Link
                  className="hidden md:block"
                  to="/profile"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <img
                    className="w-8 h-8 rounded-full"
                    src={currentUser.avatar}
                    alt={currentUser.firstName}
                  />
                </Link>
              )}

              {isAuthenticated && (
                <Badge count={0}>
                  <Link to="/wishlist" style={{ color: "inherit" }}>
                    <HeartIconOutline className="!text-2xl" />
                  </Link>
                </Badge>
              )}
            </>
          )}

          <Badge count={quantity}>
            <Link to="/cart" style={{ color: "inherit" }}>
              <CartIconOutline className="!text-2xl" />
            </Link>
          </Badge>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
