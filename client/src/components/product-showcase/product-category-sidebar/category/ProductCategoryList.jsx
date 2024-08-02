import { useState } from "react";

export default function ProductCategoryList({ category }) {
  const [active, setActive] = useState(false);

  const handleActive = () => setActive((oldState) => !oldState);
  const isActive = active ? "active" : null;

  return (
    <li className="sidebar-menu-category" onClick={handleActive}>
      <button className={`sidebar-accordion-menu ${isActive}`} data-accordion-btn>
        <div className="menu-title-flex">
          <img src={category.img} alt={category.name} className="menu-title-img" width="20" height="20" />

          <p className="menu-title">{category.name}</p>
        </div>

        <div>{isActive ? <ion-icon name="remove-outline" className="remove-icon"></ion-icon> : <ion-icon name="add-outline" className="add-icon"></ion-icon>}</div>
      </button>

      <ul className={`sidebar-submenu-category-list ${isActive}`} data-accordion>
        {category.sublist.map((sub) => (
          <li key={sub._id} className="sidebar-submenu-category">
            <a href="#" className="sidebar-submenu-title">
              <p className="product-name">{sub.name}</p>
              <data value={sub.amount} className="stock" title="Available Stock">
                {sub.amount}
              </data>
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
}
