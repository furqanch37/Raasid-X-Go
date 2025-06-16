import Image from "next/image";
import "./sales.css";

const weeklySales = [
  {
    name: "Bombay Biryani",
    price: 255,
    originalPrice: 300,
    sold: 25,
    image: "/assets/bombay_biryani_masala.png",
  },
  {
    name: "Nihari",
    price: 155,
    originalPrice: 180,
    sold: 18,
    image: "/assets/nihari.png",
  },
  {
    name: "Cloves Powder",
    price: 55,
    originalPrice: 80,
    sold: 40,
    image: "/assets/cloves_powder.png",
  },
  {
    name: "Zarda",
    price: 250,
    originalPrice: 300,
    sold: 45,
    image: "/assets/zarda.png",
  },
  {
    name: "Cloves Powder",
    price: 85,
    originalPrice: 95,
    sold: 30,
    image: "/assets/cloves_powder.png",
  },
  {
    name: "Chaat Masala",
    price: 45,
    originalPrice: 55,
    sold: 25,
    image: "/assets/chaat_masala.png",
  },
  {
    name: "Zarda",
    price: 250,
    originalPrice: 300,
    sold: 45,
    image: "/assets/zarda.png",
  },
    {
    name: "Nihari",
    price: 155,
    originalPrice: 180,
    sold: 18,
    image: "/assets/nihari.png",
  },
];

export default function WeeklySales() {
  return (
    <section className="weekly-wrapper">
      <div className="weekly-header">
        <h2 className="weekly-title">Weekly Best Sales</h2>
        <a href="#" className="view-more">VIEW MORE →</a>
      </div>
      <div className="weekly-grid">
        {weeklySales.map((item, idx) => (
          <div className="weekly-card" key={idx}>
            <div className="weekly-img-box">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="weekly-img"
              />
            </div>
            <h3 className="weekly-name">{item.name}</h3>
            <p className="weekly-price">
              {item.price}PKR{" "}
              <span className="weekly-original">{item.originalPrice}PKR</span>
            </p>
            <p className="weekly-sold">Sold : <span>{item.sold}</span></p>
          </div>
        ))}
      </div>
    </section>
  );
}
