import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useGetProductQuery } from "../services/product";
import { useAddProductToCartMutation } from "../services/cart";
import { MinusIcon, PlusIcon } from "../constants";
import { useAppSelector } from "../hooks/hook";

type ProductType = "decrease" | "increase";

const Product = () => {
  const currentUser = useAppSelector((state) => state.user.currentUser);
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState<number>(1);
  const [chosenColor, setChosenColor] = useState<string>("");
  const [chosenSize, setChosenSize] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<boolean>(false);

  const params = useParams();
  const productId = params.productId;

  // hook
  const { data } = useGetProductQuery(productId);
  const [addProductToCart] = useAddProductToCartMutation();

  const handleQuantity = (type: ProductType) => {
    if (type === "decrease") {
      quantity > 1 && setQuantity(quantity - 1);
    } else if (type === "increase") {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    if (!currentUser) {
      navigate("/login", { state: `product/${productId}` });
    }
    
    if (chosenColor !== "" && chosenSize !== "") {
      const productInfo = {
        product: data?._id,
        quantity,
        color: chosenColor,
        size: chosenSize,
      };
      console.log(productInfo);

      addProductToCart(productInfo);
    } else {
      setErrorMessage(true);
    }
  };

  return (
    <div className="flex flex-col p-3 md:flex-row md:py-10 md:px-24">
      <div className="flex items-center justify-center flex-1">
        <img
          className="object-cover w-full"
          src={data?.images}
          alt={data?.title}
        />
      </div>

      <div className="flex-1 p-3 md:py-10 md:px-20">
        {/* Title Price Desc */}
        <p className="text-2xl text-center md:text-4xl md:font-bold md:text-left">
          {data?.title.toUpperCase()}
        </p>
        <p className="text-lg font-bold text-center md:font-light md:text-3xl md:text-left">
          $ {data?.price}
        </p>
        <p className="text-xl text-center md:font-light md:text-left">
          {data?.description}
        </p>

        {/* Filter Container Start */}
        <div className="flex justify-between w-full my-5 ">
          {/* Color */}
          <div className="flex items-center space-x-3">
            <span className="text-lg">Color:</span>
            {data?.colors.map((color: string) => (
              <span
                style={{ backgroundColor: `${color}` }}
                className={`w-5 h-5 rounded-full cursor-pointer ${
                  color === chosenColor
                    ? "-translate-y-2 transition duration-300"
                    : ""
                } `}
                key={color}
                onClick={() => setChosenColor(color)}
              />
            ))}
          </div>

          {/* Size */}
          <div className="flex items-center space-x-2">
            <span className="text-lg">Size:</span>
            <select
              className="px-4 py-2 border border-teal-700 rounded-md"
              onChange={(e) => setChosenSize(e.target.value)}
            >
              <option></option>
              {data?.sizes.map((size: string) => (
                <option key={size}>{size}</option>
              ))}
            </select>
          </div>
        </div>
        {/* Filter Container End */}

        {/* Stock Start */}
        {/* <p className="text-left text-red-500 ">Stock</p> */}

        {/* Stock End */}

        {/* Amount & Add Start */}
        <div className="flex flex-col items-center justify-between my-5 space-y-5 md:space-x-5 md:space-y-0 md:flex-row">
          <div className="flex items-center space-x-5">
            <MinusIcon
              className="
              !text-xl cursor-pointer"
              onClick={() => handleQuantity("decrease")}
            />
            <span className="flex items-center justify-center w-8 h-8 text-black border border-teal-700 rounded-xl">
              {quantity}
            </span>
            <PlusIcon
              className="!text-xl cursor-pointer"
              onClick={() => handleQuantity("increase")}
            />
          </div>
          <button
            className="w-full py-2 text-white bg-teal-700 rounded-full cursor-pointer text-semibold"
            onClick={handleClick}
          >
            ADD TO CART
          </button>
        </div>
        {/* Amount & Add End */}
        {errorMessage === true && (
          <span>Please choose both color and size</span>
        )}
      </div>
    </div>
  );
};

export default Product;
