import ProductCategoryListItem from "./ProductSubmenuCategoryListItem";

export default function ProductCategoryList({ name, img, sublist }) {
  return (
    <li className="sidebar-menu-category">
      <button className="sidebar-accordion-menu" data-accordion-btn>
        <div className="menu-title-flex">
          <img src={img} alt={name} className="menu-title-img" width="20" height="20" />

          <p className="menu-title">{name}</p>
        </div>

        <div>
          <ion-icon name="add-outline" className="add-icon"></ion-icon>
          <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
        </div>
      </button>

      <ul className="sidebar-submenu-category-list" data-accordion>
        {sublist.map((sub) => (
          <ProductCategoryListItem 
                key={sub.name}
                name={sub.name}
                amount={sub.amount}
          />
        ))}
      </ul>
    </li>
  );
}
