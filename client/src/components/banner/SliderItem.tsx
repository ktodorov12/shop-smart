import { Link } from "react-router-dom";
export default function SliderItem({
  content: { subtitle, title, img, href },
}: {
  content: { subtitle: string; title: string; img: string; href: string };
}) {
  return (
    <div className="slider-item">
      <img src={img} alt={title} className="banner-img" />

      <div className="banner-content">
        <p className="banner-subtitle">{subtitle}</p>

        <h2 className="banner-title">{title}</h2>

        <Link to={href} className="banner-btn">
          Shop now
        </Link>
      </div>
    </div>
  );
}
