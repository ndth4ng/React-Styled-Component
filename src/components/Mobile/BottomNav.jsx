import React from "react";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import PersonIcon from "@mui/icons-material/Person";
import StoreIcon from "@mui/icons-material/Store";

const BottomNav = () => {
  return (
    <div className="flex items-center justify-around h-full divide-x">
      <Link to="/" className="bottom-nav-item">
        <div className="flex flex-col items-center">
          <StoreIcon />
          Home
        </div>
      </Link>
      <Link to="/contact" className="bottom-nav-item">
        <div className="flex flex-col items-center">
          <PhoneAndroidIcon />
          Contact
        </div>
      </Link>
      <Link to="/wishlist" className="bottom-nav-item">
        <div className="flex flex-col items-center">
          <FavoriteIcon />
          Wishlist
        </div>
      </Link>
      <Link to="/profile" className="bottom-nav-item">
        <div className="flex flex-col items-center">
          <PersonIcon />
          Profile
        </div>
      </Link>
    </div>
  );
};

export default BottomNav;
