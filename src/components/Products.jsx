import SingleProduct from "./SingleProduct";
import { useGetProductsQuery } from "../services/products";
import SkeletonImages from "./Skeleton/SkeletonImages";
import { useState } from "react";
import { Pagination } from "antd";

const NewProducts = ({ sort }) => {
  const [page, setPage] = useState(1);

  const { data, error, isLoading } = useGetProductsQuery({ page, sort });

  !isLoading && console.log(data);

  return (
    <div className="py-5">
      <div className="grid grid-cols-2 gap-4 px-2 md:px-5 md:grid-cols-4">
        {isLoading ? (
          <SkeletonImages count={4} />
        ) : (
          data.data.map((item) => <SingleProduct key={item._id} item={item} />)
        )}
      </div>
      <Pagination
        className="!mt-5 text-center"
        defaultCurrent={page}
        onChange={(p) => setPage(p)}
        defaultPageSize={4}
        total={data?.info.count}
      />
    </div>
  );
};

export default NewProducts;
