export default function ProductCategoryListItem({ name, amount }) {
  return (
    <li className="sidebar-submenu-category">
      <a href="#" className="sidebar-submenu-title">
        <p className="product-name">{name}</p>
        <data value={amount} className="stock" title="Available Stock">
          {amount}
        </data>
      </a>
    </li>
  );
}
