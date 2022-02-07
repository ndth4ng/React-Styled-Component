import { Link } from "react-router-dom";

import styled from "styled-components";

const Circle = styled.div`
  width: 50%;
  height: 50%;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const SingleProduct = ({ item }) => {
  return (
    <Link
      to={`/product/${item._id}`}
      className="relative flex-1 bg-teal-700 aspect-square"
    >
      <div className="flex items-center justify-center w-full h-full cursor-pointer ">
        <Circle />
        <div className="z-10 p-5 transition-all duration-500 ease hover:scale-110">
          <img src={item.images} alt={item.title} />
        </div>
      </div>
    </Link>
  );
};

export default SingleProduct;
