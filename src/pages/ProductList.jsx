import styled from "styled-components";

import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router";
import { useState } from "react";
import { useGetProductsQuery } from "../services/products";

import { Pagination } from "antd";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Filter = styled.div`
  margin: 20px;

  ${mobile({
    margin: "0px 20px",
    display: "flex",
    flexDirection: "column",
  })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;

  ${mobile({
    marginRight: "0px",
  })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({
    margin: "10px 0px",
  })}
`;

const Option = styled.option`
  padding: 10px;
`;

const ProductList = () => {
  const location = useLocation();
  const cate = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});

  const [sort, setSort] = useState(""); // newest

  const handleFilters = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container>
      <Title>Dresses</Title>
      <FilterContainer>
        {/* <Filter>
          <FilterText>Filter Products:</FilterText>
          <select
            className="px-4 py-2 border border-teal-700 rounded-md"
            name="size"
            defaultValue={""}
            onChange={handleFilters}
          >
            <option value="" disabled>
              Size
            </option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </Filter> */}
        <Filter>
          <FilterText>Sort Products</FilterText>
          <select
            className="px-4 py-2 border border-teal-700 rounded-md"
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">Newest</option>
            <option value="asc">Price (asc)</option>
            <option value="desc">Price (desc)</option>
            <option value="le">Hoa</option>
          </select>
        </Filter>
      </FilterContainer>

      <Products sort={sort} />
    </Container>
  );
};

export default ProductList;
