import React, { useEffect } from "react";
import styled from "styled-components";
import { FavoriteBorderOutlined, Search } from "@material-ui/icons";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import { Drawer } from "antd";

import MenuIcon from "@mui/icons-material/Menu";
import { Badge } from "antd";
import { mobile } from "../responsive";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchData, logout } from "../redux/apiCalls";
import { useState } from "react";
import Sidebar from "./Mobile/Sidebar";

const Container = styled.div`
  height: 60px;
  ${mobile({
    height: "50px",
  })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({
    marginLeft: "0px",
  })}
`;

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
  const cart = useSelector((state) => state.cart);
  const { currentUser, isAuthenticated } = useSelector((state) => state.user);
  // const wishlist = useSelector((state) => state.wishlist.products);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      fetchData(dispatch, currentUser._id);
    }
  }, [isAuthenticated, dispatch, currentUser]);

  const handleLogout = () => {
    logout(dispatch);
  };

  return (
    <div className="h-[60px] bg-gray-200">
      <div className="flex items-center justify-center h-full px-5 py-2">
        {/* Left */}
        <div className="flex items-center flex-1 md:invisible">
          {/* <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search
              style={{ color: "gray", fontSize: 16, cursor: "pointer" }}
            />
          </SearchContainer> */}

          {/* Mobile */}
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
          <Link
            className="hidden"
            style={{ textDecoration: "none", color: "inherit" }}
            to="/register"
          >
            <MenuItem style={currentUser && { display: "none" }}>
              REGISTER
            </MenuItem>
          </Link>
          <Link
            to="/login"
            className="hidden"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <MenuItem style={currentUser && { display: "none" }}>
              SIGN IN
            </MenuItem>
          </Link>
          <MenuItem
            style={currentUser ? { display: "block" } : { display: "none" }}
            onClick={() => handleLogout()}
          >
            LOG OUT
          </MenuItem>
          {isAuthenticated && (
            <MenuItem>
              <Link
                className="hidden"
                to="/profile"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <UserImg
                  src="https://firebasestorage.googleapis.com/v0/b/shop-2edcf.appspot.com/o/163664544026275519312_2575922042638572_6888852351344443392_n.jpg?alt=media&token=26bc9b04-1554-4fef-9c7b-9ea30c2d3775"
                  alt=""
                />
              </Link>
            </MenuItem>
          )}
          {currentUser && (
            <MenuItem>
              <Link to="/wishlist" style={{ color: "inherit" }}>
                <Badge badgeContent={0} color="secondary">
                  <FavoriteBorderOutlined />
                </Badge>
              </Link>
            </MenuItem>
          )}
          <MenuItem>
            <Link to="/cart" style={{ color: "inherit" }}>
              <Badge count={5}>
                <ShoppingCartOutlinedIcon className="!text-2xl" />
              </Badge>
            </Link>
          </MenuItem>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
