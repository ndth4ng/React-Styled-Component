import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <div className="flex items-center justify-center w-screen">
        <div className="flex flex-col justify-center w-full p-5 md:py-10 md:w-3/4 md:flex-row">
          <div className="space-y-2">
            {/* User */}
            <div className="flex items-center px-5 py-3 space-x-5 bg-teal-700 rounded-lg">
              <img
                className="w-10 h-10 rounded-full"
                src="https://firebasestorage.googleapis.com/v0/b/shop-2edcf.appspot.com/o/163664544026275519312_2575922042638572_6888852351344443392_n.jpg?alt=media&token=26bc9b04-1554-4fef-9c7b-9ea30c2d3775"
                alt=""
              />
              <div className="flex flex-col ">
                <span className="text-lg font-semibold text-white">
                  Thang Nguyen
                </span>
                <span className="font-light text-white">Gold Member</span>
              </div>

              <button className="px-3 py-1 mx-auto text-black bg-white rounded-lg">
                Log out
              </button>
            </div>
            <div className="p-5 text-lg text-white bg-teal-700 rounded-lg ">
              <ul className="m-0 space-y-5 text-center">
                <li>My Orders</li>
                <li>
                  <Link className="text-inherit" to="/wishlist">
                    <li>Wishlist</li>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
