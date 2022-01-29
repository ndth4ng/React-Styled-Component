import { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import SingleProduct from "./SingleProduct";
import { fetchProducts } from "../redux/productRedux";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const NewProducts = () => {
  const products = useSelector((state) => state.product.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Container>
      {products.slice(0, 8).map((item) => (
        <SingleProduct key={item._id} item={item} />
      ))}
    </Container>
  );
};

export default NewProducts;
