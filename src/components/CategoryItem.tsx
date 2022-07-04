import { Link } from "react-router-dom";
import { Category } from "../shared/interfaces/category.interface";

type PropsType = {
  item: Category;
}

const CategoryItem = ({ item } : PropsType) => {
  return (
    <div className="relative flex-1 h-[70vh] m-1">
      <img
        className="object-cover w-full h-full"
        src={item.image}
        alt={item.title}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-white">{item.title}</h1>
        <Link to={`/products/${item.cate}`}>
          <button className="p-3 text-black bg-white">SHOP NOW</button>
        </Link>
      </div>
    </div>
  );
};

export default CategoryItem;
