import ProductCategoryList from "./ProductCategoryList";
import useGetCategories from "../../../../hooks/useGetCategories";

const initialData = [
  {
    name: "",
    img: "",
    sublist: [],
  },
];

export default function ProductCategory() {
  const { categoriesStored: categories } = useGetCategories(initialData);

  return (
    <div className="sidebar has-scrollbar">
      <div className="sidebar-category">
        <div className="sidebar-top">
          <h2 className="sidebar-title">Category</h2>

          <button className="sidebar-close-btn" data-mobile-menu-close-btn>
            <ion-icon name="close-outline"></ion-icon>
          </button>
        </div>

        <ul className="sidebar-menu-category-list">
          {categories.map((category) => (
            <ProductCategoryList key={category._id} category={category} />
          ))}
        </ul>
      </div>
    </div>
  );
}
