import { categories } from "../data";
import { Category } from "../shared/interfaces/category.interface";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  return (
    <div className="flex flex-col justify-between md:flex-row md:p-5">
      {categories.map((item: Category) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Categories;
