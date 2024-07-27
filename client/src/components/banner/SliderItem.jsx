export default function SliderItem({ content: { subtitle, title, img, text } }) {
  return (
    <div className="slider-item">
      <img src={img} alt={title} className="banner-img" />

      <div className="banner-content">
        <p className="banner-subtitle">{subtitle}</p>

        <h2 className="banner-title">{title}</h2>

        <p className="banner-text">{text}</p>

        <a href="#" className="banner-btn">
          Shop now
        </a>
      </div>
    </div>
  );
}
