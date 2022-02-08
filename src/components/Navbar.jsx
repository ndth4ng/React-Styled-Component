import styled from "styled-components";
import { FavoriteBorderOutlined, Search } from "@material-ui/icons";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import MenuIcon from "@mui/icons-material/Menu";
import { Badge } from "antd";
import { mobile } from "../responsive";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/userRedux";
import { useState } from "react";
import Sidebar from "./Mobile/Sidebar";
import { useGetAuthQuery } from "../services/user";
import { useGetCartQuery } from "../services/cart";

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({
    fontSize: "12px",
    marginLeft: "10px",
  })}
`;

const UserImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const Navbar = () => {
  //state
  const [visible, setVisible] = useState(false); // Sidebar

  //selector
  const { currentUser, isAuthenticated } = useSelector((state) => state.user);
  const { quantity } = useSelector((state) => state.cart);

  //hook
  const { data: userData, isLoading, isSuccess } = useGetAuthQuery();

  const { data: cartData } = useGetCartQuery(userData?.user._id, {
    skip: !isSuccess, // wait the first hook response
  });

  console.log(cartData);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="h-[60px] bg-gray-200">
      <div className="flex items-center justify-center h-full px-5 py-2">
        {/* Left */}
        <div className="flex-1 hidden md:flex items-center space-x-2">
          <input className="py-1 px-2" placeholder="Search" />
          <Search style={{ color: "gray", fontSize: 16, cursor: "pointer" }} />
        </div>

        {/* Mobile */}
        <div className="flex items-center flex-1 md:hidden">
          <MenuIcon className="!text-3xl" onClick={() => setVisible(true)} />
          <Sidebar visible={visible} onClose={setVisible} />
        </div>

        {/* Center */}
        <div className="flex-1 text-center">
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <span className="text-2xl font-bold cursor-pointer">DEV.</span>
          </Link>
        </div>

        {/* Right */}

        <div className="flex items-center justify-end flex-1">
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
                  <MenuItem>REGISTER</MenuItem>
                </Link>
              )}

              {!isAuthenticated && (
                <Link
                  to="/login"
                  className="hidden md:block"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <MenuItem>SIGN IN</MenuItem>
                </Link>
              )}

              {isAuthenticated && (
                <MenuItem onClick={() => handleLogout()}>LOG OUT</MenuItem>
              )}

              {isAuthenticated && (
                <Link
                  className="hidden md:block"
                  to="/profile"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <MenuItem>
                    <UserImg
                      src={currentUser.avatar}
                      alt={currentUser.firstName}
                    />
                  </MenuItem>
                </Link>
              )}

              {isAuthenticated && (
                <Link to="/wishlist" style={{ color: "inherit" }}>
                  <MenuItem>
                    <Badge count={0}>
                      <FavoriteBorderOutlined />
                    </Badge>
                  </MenuItem>
                </Link>
              )}
            </>
          )}

          <Link to="/cart" style={{ color: "inherit" }}>
            <MenuItem>
              <Badge count={quantity}>
                <ShoppingCartOutlinedIcon className="!text-2xl" />
              </Badge>
            </MenuItem>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
