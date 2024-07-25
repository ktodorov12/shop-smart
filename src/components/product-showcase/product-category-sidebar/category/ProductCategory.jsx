import { useEffect, useState } from "react";
import ProductCategoryList from "./ProductCategoryList";
import { getAllCategoriesAndSublists } from "../../../../api/apiCategories";

export default function ProductCategory() {
  const [categories, setCategoires] = useState([]);

  useEffect(() => {
    (async function () {
      const results = await getAllCategoriesAndSublists();
      setCategoires(results);
      console.log(results);
    })();
  }, []);

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
            <ProductCategoryList 
              key={category.objectId}
              name={category.name}
              img={category.img}
              sublist={category.sublist} 
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
