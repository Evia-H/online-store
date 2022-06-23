import Category from "./containers/category/category-item.component";
import "./categories.styles.scss";
const App = () => {
  const categories = [
    { id: 1, title: "HATS" },
    { id: 2, title: "JACKETS" },
    { id: 3, title: "SNEAKERS" },
    { id: 4, title: "WOMENS" },
    { id: 5, title: "MENS" },
  ];

  return (
    <div class="categories-container">
      {categories.map(({ id, title }) => (
        <Category id={id} title={title} />
      ))}
    </div>
  );
};

export default App;
