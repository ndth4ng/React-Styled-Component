import { Add, Remove } from "@material-ui/icons";
import ClearIcon from "@mui/icons-material/Clear";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { userRequest } from "../requestMethods";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  decreaseQuantity,
  deleteProduct,
  increaseQuantity,
} from "../redux/cartRedux";
import {
  useRemoveProductFromCartMutation,
  useUpdateProductInCartMutation,
} from "../services/cart";

const KEY =
  "pk_test_51JnbfsLs9270OQw08yXH6XcYEfNZR3BnYZCcvHmmZAUTUFrhFN6hD0Ktfikt1KuePGnpCT9g6tbjQ1AFYfzXL5lz00aVdftlvu";

const ClearProductIcon = styled(ClearIcon)`
  cursor: pointer;
  position: absolute;
  color: red;
  right: 20px;
  top: 20px;
`;

const SummaryButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  // selector
  const cart = useSelector((state) => state.cart);
  const wishlist = useSelector((state) => state.wishlist);

  // hook
  const [removeProductFromCart, { isSuccess: isRemoveSuccess }] =
    useRemoveProductFromCartMutation();
  const [updateProductInCart, { isSuccess: isUpdateSuccess }] =
    useUpdateProductInCartMutation();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [stripeToken, setStripeToken] = useState(null);
  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
        console.log(stripeToken);
        navigate("/success", { stripeData: res.data, cart: cart });
      } catch (error) {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, cart, navigate]);

  const handleRemove = (productId, color, size) => {
    removeProductFromCart({ productId, color, size });
  };

  const handleIncrease = (productId, color, size) => {
    updateProductInCart({ productId, color, size, action: "increase" });
  };

  const handleDecrease = (productId, color, size) => {
    updateProductInCart({ productId, color, size, action: "decrease" });
  };

  return (
    <div className="flex justify-center py-5 md:px-10">
      <div className="w-full px-2">
        {/* Top */}
        <h1 className="text-2xl text-center">MY CART</h1>
        <div className="flex items-center justify-between p-5 border border-gray-200 rounded-lg">
          <button className="p-2 text-white bg-teal-700 border">
            CONTINUE SHOPPING
          </button>
          {cart.quantity === 0 && (
            <span>YOU DON'T HAVE ANY ITEM IN YOUR CART</span>
          )}
          <div className="flex flex-col items-center space-x-5 md:flex-row">
            <span className="underline">Shopping Cart ({cart.quantity})</span>

            <Link
              to="/wishlist"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <span className="underline">
                Your wishlist ({wishlist.products.length})
              </span>
            </Link>
          </div>
          {cart.quantity !== 0 && (
            <button className="hidden md:block">CHECKOUT NOW</button>
          )}
        </div>

        <div className="flex flex-col justify-between py-5 xl:flex-row md:space-x-5">
          {/* Cart Items */}
          <div className="flex-auto space-y-4 max-h-[600px] overflow-y-scroll">
            {cart.products.map((cartItem) => (
              <div
                className="relative flex flex-col items-center pb-5 border-b md:flex-row md:p-0 last:border-0"
                key={`${cartItem.product._id}${cartItem.color}${cartItem.size}`}
              >
                <ClearProductIcon
                  onClick={() =>
                    handleRemove(
                      cartItem.product._id,
                      cartItem.color,
                      cartItem.size
                    )
                  }
                />

                <img
                  className="w-[250px]"
                  src={cartItem.product.images}
                  alt={cartItem.product.title}
                />
                <div className="flex flex-col items-center justify-between flex-auto space-y-5 md:flex-row md:px-5 md:space-y-0">
                  {/* Product Detail */}
                  <div className="flex flex-col items-center space-y-2 md:items-start md:space-y-5">
                    <span className="text-lg">
                      <b>Product: </b>
                      {cartItem.product.title}
                    </span>
                    <span
                      style={{ backgroundColor: cartItem.color }}
                      className="w-8 h-8 text-lg rounded-full"
                    ></span>
                    <span className="text-lg">
                      <b>Size: </b>
                      {cartItem.size}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex flex-col items-center space-y-2 md:space-y-5">
                    <div className="flex items-center justify-center space-x-5">
                      <Remove
                        className="cursor-pointer"
                        onClick={() =>
                          handleDecrease(
                            cartItem.product._id,
                            cartItem.color,
                            cartItem.size
                          )
                        }
                      />
                      <span className="px-2 text-lg border rounded-lg">
                        {cartItem.quantity}
                      </span>
                      <Add
                        className="cursor-pointer"
                        onClick={() =>
                          handleIncrease(
                            cartItem.product._id,
                            cartItem.color,
                            cartItem.size
                          )
                        }
                      />
                    </div>
                    <span className="text-xl font-semibold">
                      $ {cartItem.product.price * cartItem.quantity}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          {cart.quantity !== 0 && (
            <div className="flex-1 border rounded-lg p-4 h-[400px]">
              <p className="text-lg font-semibold text-center">ORDER SUMMARY</p>
              <div className="flex justify-between text-lg my-7">
                <span>Subtotal</span>
                <span>$ {cart.total}</span>
              </div>
              <div className="flex justify-between text-lg my-7">
                <span>Shipping</span>
                <span>$ 5.90</span>
              </div>
              <div className="flex justify-between text-lg my-7">
                <span>Shipping Discount</span>
                <span>$ -5.90</span>
              </div>
              <hr />
              <div className="flex justify-between text-lg my-7">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">$ {cart.total}</span>
              </div>

              {/* Checkout Button */}
              <StripeCheckout
                name="DEV Shop"
                billingAddress
                shippingAddress
                description={`Your total is ${cart.total}`}
                amount={cart.total * 100}
                token={onToken}
                stripeKey={KEY}
              >
                <SummaryButton>CHECKOUT NOW</SummaryButton>
              </StripeCheckout>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
