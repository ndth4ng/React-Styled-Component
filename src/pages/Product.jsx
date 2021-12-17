import { Add, Remove } from "@material-ui/icons";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router";
import { useHistory } from "react-router-dom";
import styled, { css } from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import { publicRequest } from "../requestMethods";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../redux/apiCalls";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;

  ${mobile({
    padding: "10px",
    flexDirection: "column",
  })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;

  ${mobile({
    height: "40vh",
  })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;

  ${mobile({
    padding: "10px",
  })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  display: flex;
  margin: 30px 0px;
  justify-content: space-between;

  ${mobile({
    width: "100%",
  })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;

  ${(props) =>
    props.isChoose.isClick === true && props.isChoose.color === props.color
      ? css`
          border: 3px solid teal;
          background-clip: content-box;
        `
      : css`
          width: 20px;
          height: 20px;
        `}
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const AddContainer = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: space-between;

  ${mobile({
    width: "100%",
  })}
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 10px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;

  &:hover {
    background-color: #f8f4f4;
  }
`;

const FilterSizeOption = styled.option``;

const ErrorMessage = styled.span`
  color: red;
`;

const Product = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const location = useLocation();
  const history = useHistory();
  const id = location.pathname.split("/")[2];
  const path = location.pathname;

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [chosenColor, setChosenColor] = useState({
    color: "",
    isClick: null,
  });
  const [chosenSize, setChosenSize] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else if (type === "inc") {
      setQuantity(quantity + 1);
    }
  };

  const onColorClick = (color) => {
    setChosenColor({ color: color, isClick: true });
  };

  const handleClick = () => {
    if (!currentUser) {
      return history.push("/login", { path: path });
    }
    if (chosenColor.color !== "" && chosenSize !== "") {
      addProductToCart(
        dispatch,
        {
          ...product,
          quantity,
          color: chosenColor.color,
          size: chosenSize,
        },
        currentUser._id
      );
    } else {
      setErrorMessage(true);
    }
  };

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>$ {product.price}</Price>

          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color &&
                product.color.map((c) => (
                  <FilterColor
                    color={c}
                    key={c}
                    onClick={() => onColorClick(c)}
                    isChoose={chosenColor}
                  />
                ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setChosenSize(e.target.value)}>
                <FilterSizeOption></FilterSizeOption>
                {product.size &&
                  product.size.map((s) => (
                    <FilterSizeOption key={s}>{s}</FilterSizeOption>
                  ))}
              </FilterSize>
            </Filter>
          </FilterContainer>

          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("inc")} />
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </AddContainer>

          {errorMessage === true && (
            <ErrorMessage>Please choose both color and size</ErrorMessage>
          )}
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
