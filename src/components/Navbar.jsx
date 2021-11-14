import React, { useEffect } from "react";
import styled from "styled-components";
import {
  FavoriteBorderOutlined,
  Search,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { mobile } from "../responsive";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchWishlist } from "../redux/apiCalls";

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

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;

  ${mobile({
    display: "none",
  })}
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

const Input = styled.input`
  border: none;
  outline: none;

  ${mobile({
    width: "70px",
  })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({
    fontSize: "24px",
  })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({
    flex: 2,
    justifyContent: "center",
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
  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user.currentUser);
  const wishlist = useSelector((state) => state.wishlist.products);

  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      fetchWishlist(dispatch, user._id);
    }
    return null;
  }, [user, dispatch, user?._id]);

  const handleLogout = () => {
    user.currentUser = null;
    user.isFetching = false;
    user.error = false;
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Logo>DEV.</Logo>
          </Link>
        </Center>
        <Right>
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to="/register"
          >
            <MenuItem style={user && { display: "none" }}>REGISTER</MenuItem>
          </Link>
          <Link
            to="/login"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <MenuItem style={user && { display: "none" }}>SIGN IN</MenuItem>
          </Link>
          <MenuItem
            style={user ? { display: "block" } : { display: "none" }}
            onClick={() => handleLogout()}
          >
            LOG OUT
          </MenuItem>
          {user && (
            <MenuItem>
              <Link
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
          {user && (
            <MenuItem>
              <Link to="/wishlist" style={{ color: "inherit" }}>
                <Badge badgeContent={wishlist.length} color="secondary">
                  <FavoriteBorderOutlined />
                </Badge>
              </Link>
            </MenuItem>
          )}
          <MenuItem>
            <Link to="/cart" style={{ color: "inherit" }}>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};
export default Navbar;
