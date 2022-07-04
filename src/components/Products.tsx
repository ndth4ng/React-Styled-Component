import SingleProduct from "./SingleProduct";
import { useGetProductsQuery } from "../services/product";
import SkeletonImages from "./Skeleton/SkeletonImages";
import { useState } from "react";
import { Pagination } from "antd";
import { Product } from "../shared/interfaces/product.interface";

type PropsType = {
  category?: string;
  sort?: string;
}

const Products = ({ category, sort }: PropsType) => {
  const [page, setPage] = useState(1);

  const { data, isLoading, isSuccess } = useGetProductsQuery({   
    category: category,
    page: page,
    sort: sort,
  });

  isSuccess && console.log(data);

  return (
    <div className="py-5">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {isLoading ? (
          <SkeletonImages count={4} />
        ) : (
          data?.products.map((item: Product) => <SingleProduct key={item._id} item={item} />)
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

export default Products;
