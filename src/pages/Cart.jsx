import { Add, Remove } from "@material-ui/icons";
import ClearIcon from "@mui/icons-material/Clear";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
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

const KEY =
  "pk_test_51JnbfsLs9270OQw08yXH6XcYEfNZR3BnYZCcvHmmZAUTUFrhFN6hD0Ktfikt1KuePGnpCT9g6tbjQ1AFYfzXL5lz00aVdftlvu";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;

  ${mobile({
    padding: "10px",
  })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};

  ${mobile({
    display: "none",
  })}
`;

const TopTexts = styled.div`
  ${mobile({
    display: "none",
  })}
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;

  ${mobile({
    flexDirection: "column",
  })}
`;

const Info = styled.div`
  flex: 3;
  padding: 0px 20px;

  ${mobile({
    padding: 0,
  })}
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  position: relative;

  ${mobile({
    flexDirection: "column",
  })}
`;

const ClearProductIcon = styled(ClearIcon)`
  cursor: pointer;
  position: absolute;
  color: red;
  right: 20px;
  top: 20px;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const ProductName = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.span`
  font-size: 24px;
  margin: 5px;

  ${mobile({
    margin: "5px 15px",
  })}
`;

const ProductPrice = styled.span`
  font-size: 30px;
  font-weight: 200;

  ${mobile({
    marginBottom: "20px",
  })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const SummaryButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Error = styled.span``;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const wishlist = useSelector((state) => state.wishlist);
  const currentUser = useSelector((state) => state.user.currentUser);

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

  const handleClear = (productId, color, size) => {
    dispatch(deleteProduct({ productId, color, size }));
  };

  const handleIncrease = (productId, color, size) => {
    dispatch(increaseQuantity({ productId, color, size }));
  };

  const handleDecrease = (productId, color, size) => {
    dispatch(decreaseQuantity({ productId, color, size }));
  };

  return (
    <Container>
      <Wrapper>
        <Title>MY CART</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          {cart.quantity === 0 && (
            <span>YOU DON'T HAVE ANY ITEM IN YOUR CART</span>
          )}
          <TopTexts>
            <TopText>Shopping Cart ({cart.quantity})</TopText>
            <Link
              to="/wishlist"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <TopText>Your wishlist ({wishlist.products.length})</TopText>
            </Link>
          </TopTexts>
          {cart.quantity !== 0 && (
            <TopButton type="filled">CHECKOUT NOW</TopButton>
          )}
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <Product key={`${product._id}${product.color}${product.size}`}>
                <ClearProductIcon
                  onClick={() =>
                    handleClear(product._id, product.color, product.size)
                  }
                />
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Product: </b>
                      {product.title}
                    </ProductName>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b>Size: </b>
                      {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Remove
                      onClick={() =>
                        handleDecrease(product._id, product.color, product.size)
                      }
                    />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Add
                      onClick={() =>
                        handleIncrease(product._id, product.color, product.size)
                      }
                    />
                  </ProductAmountContainer>
                  <ProductPrice>
                    $ {product.price * product.quantity}
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>
          {cart.quantity !== 0 && (
            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Estimated Shipping</SummaryItemText>
                <SummaryItemPrice>$ 5.90</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Shipping Discount</SummaryItemText>
                <SummaryItemPrice>$ -5.90</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
              </SummaryItem>
              {currentUser ? (
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
              ) : (
                <Error>Please sign in to check out!</Error>
              )}
            </Summary>
          )}
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Cart;
