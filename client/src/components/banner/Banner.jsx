import SliderItem from "./SliderItem";

const bannerText = [
  {
    subtitle: "Trending item",
    title: "Man's latest fashion",
    img: "/assets/images/c.jpg",
    href: "/men's-clothing/jackets"
  },
  {
    subtitle: "Trending accessories",
    title: "Modern beauty",
    img: "/assets/images/s.jpg",
    href: "/beauty/fragrances"
  },
  {
    subtitle: "Sale Offer",
    title: "Woman's fashion",
    img: "/assets/images/banner-3.jpg",
    href: "/women's-clothing/shirts"
  },
];

export default function Banner() {
  return (
    <div className="banner">
      <div className="container">
        <div className="slider-container has-scrollbar">
          {bannerText.map((banner) => (
            <SliderItem key={banner.title} content={banner} />
          ))}
        </div>
      </div>
    </div>
  );
}
