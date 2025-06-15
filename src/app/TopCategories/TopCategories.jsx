// components/TopCategories.jsx
import React from "react";
import Link from "next/link";
import "./TopCategories.css";

const categories = [
  {
    title: "Spices",
    image: "/assets/image3.png",
    link: "#",
    bg: "#e6e9fb",
  },
   {
    title: "Fruits Preserves",
    image: "/assets/image4.png",
    link: "#",
    bg: "#e1f1dc",
  },
  {
    title: "One Day Meals",
    image: "/assets/image5.png",
    link: "#",
    bg: "#fff6db",
  },
  {
    title: "Ready to Eat",
    image: "/assets/image6.png",
    link: "#",
    bg: "#dbf8ef",
  },
  {
    title: "Gronola Bars",
    image: "/assets/image6.png",
    link: "#",
    bg: "#e1f1dc",
  },
];

const TopCategories = () => {
  return (
    <section className="categories-section">
      <div className="categories-header">
        <h2>Top Categories</h2>
        <Link href="#" className="more-link">
          MORE CATEGORIES →
        </Link>
      </div>

      <div className="categories-grid">
        {categories.map((cat, index) => (
          <div className="category-card" key={index}>
            <div
              className="category-image"
              style={{ backgroundColor: cat.bg }}
            >
              <img src={cat.image} alt={cat.title} />
            </div>
            <h4>{cat.title}</h4>
            <Link href={cat.link} className="shop-link">
              SHOP NOW →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopCategories;
