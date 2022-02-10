import Products from "../components/Products";

import { useLocation } from "react-router";
import { useState } from "react";

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
    <div className="p-5">
      <h1>Dresses</h1>
      <div className="flex justify-end">
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
        <div className="flex items-center space-x-5">
          <span className="text-lg font-semibold">Sort Products</span>
          <select
            className="px-4 py-2 border border-teal-700 rounded-md"
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">Newest</option>
            <option value="asc">Price (asc)</option>
            <option value="desc">Price (desc)</option>
          </select>
        </div>
      </div>

      <Products sort={sort} />
    </div>
  );
};

export default ProductList;
