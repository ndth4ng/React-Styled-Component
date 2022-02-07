import SingleProduct from "./SingleProduct";
import { useGetProductsQuery } from "../services/product";
import SkeletonImages from "./Skeleton/SkeletonImages";

const NewProducts = () => {
  const { data, error, isLoading } = useGetProductsQuery();

  return (
    <div className="py-5">
      <h1 className="py-2 text-2xl tracking-widest text-center text-white uppercase bg-teal-700 md:text-3xl text-semibold">
        New Products
      </h1>
      <div className="grid grid-cols-2 gap-4 px-2 md:px-5 md:grid-rows-2 md:grid-cols-4">
        {isLoading ? (
          <SkeletonImages count={8} />
        ) : (
          data.data
            .slice(0, 8)
            .map((item) => <SingleProduct key={item._id} item={item} />)
        )}
      </div>
    </div>
  );
};

export default NewProducts;
