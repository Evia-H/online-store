import Category from "../category/category-item.component";
import "./directory.styles.scss";

const Directory = ({ categories }) => {
  return (
    <div class="categories-container">
      {categories.map(({ id, ...category }) => (
        <Category key={id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
