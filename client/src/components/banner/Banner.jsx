import SliderItem from "./SliderItem";

const bannerText = [
  {
    subtitle: "Trending item",
    title: "Women's latest fashion sale",
    img: "/assets/images/banner-1.jpg",
    text: "starting at $20.00",
  },
  {
    subtitle: "Trending accessories",
    title: "Modern sunglasses",
    img: "/assets/images/banner-2.jpg",
    text: "starting at $15.00",
  },
  {
    subtitle: "Sale Offer",
    title: "New fashion summer sale",
    img: "/assets/images/banner-3.jpg",
    text: "starting at $29.99",
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
