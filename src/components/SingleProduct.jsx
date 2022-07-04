import { Link } from "react-router-dom";

const SingleProduct = ({ item }) => {
  return (
    <div className="flex flex-col">
      <Link
        to={`/product/${item._id}`}
        className="relative flex-1 bg-teal-700 aspect-square"
      >
        <div className="flex items-center justify-center w-full h-full cursor-pointer ">
          <div className="absolute w-1/2 bg-white rounded-full h-1/2" />
          <div className="z-10 p-5 transition-all duration-500 ease hover:scale-110">
            <img src={item.images} alt={item.title} />
          </div>
        </div>
      </Link>
      <div className="p-2 text-center">
        <h5 className="text-lg">{item.title}</h5>
        <span className="">{item.price}</span>
      </div>
    </div>
  );
};

export default SingleProduct;
