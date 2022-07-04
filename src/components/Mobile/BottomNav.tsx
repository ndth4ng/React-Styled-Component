import { Link } from "react-router-dom";
import { HeartIcon, HomeIcon, PhoneIcon, UserIcon } from "../../constants";

const BottomNav = () => {
  return (
    <div className="flex items-center justify-around h-full divide-x">
      <Link to="/" className="bottom-nav-item">
        <div className="flex flex-col items-center">
          <HomeIcon className="!text-2xl" />
          Home
        </div>
      </Link>
      <Link to="/contact" className="bottom-nav-item">
        <div className="flex flex-col items-center">
          <PhoneIcon className="!text-2xl" />
          Contact
        </div>
      </Link>
      <Link to="/wishlist" className="bottom-nav-item">
        <div className="flex flex-col items-center">
          <HeartIcon className="!text-2xl" />
          Wishlist
        </div>
      </Link>
      <Link to="/profile" className="bottom-nav-item">
        <div className="flex flex-col items-center">
          <UserIcon className="!text-2xl" />
          Profile
        </div>
      </Link>
    </div>
  );
};

export default BottomNav;
