import ProductCategoryList from "./ProductCategoryList";
import useCategories from "../../../../hooks/useCategories";
import type { Category } from "../../../../types/categories";

const initialData: Category[] = [
  {
    name: "",
    img: "",
    sizeType: "",
    sublist: [],
    _id: "",
  },
];

export default function ProductCategory() {
  const { categoriesStored: categories } = useCategories(initialData);

  return (
    <div className="sidebar has-scrollbar">
      <div className="sidebar-category">
        <div className="sidebar-top">
          <h2 className="sidebar-title">Category</h2>

          <button className="sidebar-close-btn" data-mobile-menu-close-btn>
            {/* @ts-ignore */}
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
