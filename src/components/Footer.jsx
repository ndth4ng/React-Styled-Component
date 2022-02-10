import {
  images,
  LocationIcon,
  PhoneIcon,
  MailIcon,
  FacebookIcon,
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
} from "../constants";

const Footer = () => {
  return (
    <div className="flex flex-col pb-16 md:p-0 md:flex-row md:m-0">
      <div className="p-5 flex flex-1 flex-col">
        <h3 className="font-semibold text-lg">DEV.</h3>
        <span className="my-6">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </span>
        <div className="flex space-x-5">
          <div className="w-10 h-10 rounded-full flex justify-center items-center text-white bg-[#3B5999]">
            <FacebookIcon className="!text-2xl" />
          </div>
          <div className="w-10 h-10 rounded-full flex justify-center items-center text-white bg-[#E4405F]">
            <InstagramIcon className="!text-2xl" />
          </div>
          <div className="w-10 h-10 rounded-full flex justify-center items-center text-white bg-[#171515]">
            <GithubIcon className="!text-2xl" />
          </div>
          <div className="w-10 h-10 rounded-full flex justify-center items-center text-white bg-[#0077b5]">
            <LinkedinIcon className="!text-2xl" />
          </div>
        </div>
      </div>
      <div className="flex-1 p-5 hidden md:block">
        <h3 className="mb-6 font-semibold text-lg">Useful Links</h3>
        <ul className="flex-wrap flex">
          <li className="w-[50%] mb-3">Home</li>
          <li className="w-[50%] mb-3">Cart</li>
          <li className="w-[50%] mb-3">Man Fashion</li>
          <li className="w-[50%] mb-3">Woman Fashion</li>
          <li className="w-[50%] mb-3">Accessories</li>
          <li className="w-[50%] mb-3">My Account</li>
          <li className="w-[50%] mb-3">Favorite</li>
          <li className="w-[50%] mb-3">Order Tracking</li>
          <li className="w-[50%] mb-3">Wishlist</li>
          <li className="w-[50%] mb-3">Terms</li>
        </ul>
      </div>
      <div className="p-5 flex-1 bg-[#fcf5f5] md:bg-white">
        <h3 className="mb-6 font-semibold text-lg">Contact</h3>
        <div className="flex items-center mb-6 space-x-5">
          <LocationIcon className="!text-2xl" />
          <span>District 4, Ho Chi Minh City, Vietnam</span>
        </div>
        <div className="flex items-center mb-6 space-x-5">
          <PhoneIcon className="!text-2xl" />
          <span>+84 385 411 491</span>
        </div>
        <div className="flex items-center mb-6 space-x-5">
          <MailIcon className="!text-2xl" />
          <span>ndth4ng@gmail.com</span>
        </div>
        <div className="flex space-x-5">
          <img className="w-8 h-8" src={images.momo} alt="momo" />
          <img className="w-8 h-8" src={images.zaloPay} alt="zalopay" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
