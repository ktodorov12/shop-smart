import ProductCategoryList from "./ProductCategoryList";

const categories = [
  {
    img: "./assets/images/icons/dress.svg",
    name: "Clothes",
    sublist: [
      {
        name: "shorts & jeans",
        amount: 60,
      },
      {
        name: "jacket",
        amount: 50,
      },
      {
        name: "dress & frock",
        amount: 87,
      },
    ],
  },
  {
    img: "./assets/images/icons/shoes.svg",
    name: "Footwear",
    sublist: [
      {
        name: "Sports",
        amount: 45,
      },
      {
        name: "Formal",
        amount: 75,
      },
      {
        name: "Casual",
        amount: 35,
      },
    ],
  },
  {
    img: "./assets/images/icons/jewelry.svg",
    name: "Jewelry",
    sublist: [
      {
        name: "Earrings",
        amount: 46,
      },
      {
        name: "Couple Rings",
        amount: 73,
      },
      {
        name: "Necklace",
        amount: 14,
      },
    ],
  },
  {
    img: "./assets/images/icons/perfume.svg",
    name: "Perfume",
    sublist: [
      {
        name: "Clothes Perfume",
        amount: 12,
      },
      {
        name: "Deodorant",
        amount: 32,
      },
      {
        name: "Tan Spray",
        amount: 14,
      },
    ],
  },
];

export default function ProductCategory() {
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
              key={category.name}
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
