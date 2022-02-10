import { Link } from "react-router-dom";

const SingleProduct = ({ item }) => {
  return (
    <Link
      to={`/product/${item._id}`}
      className="relative flex-1 bg-teal-700 aspect-square"
    >
      <div className="flex items-center justify-center w-full h-full cursor-pointer ">
        <div className="w-1/2 h-1/2 rounded-full bg-white absolute" />
        <div className="z-10 p-5 transition-all duration-500 ease hover:scale-110">
          <img src={item.images} alt={item.title} />
        </div>
      </div>
    </Link>
  );
};

export default SingleProduct;
