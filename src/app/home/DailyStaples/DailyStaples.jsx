"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";
import "./style.css";

const products = [
  { name: "Tamrind", price: 300, image: "/assets/tamrind.png", onSale: false },
  { name: "Bombay Biryani", price: 250, image: "/assets/bombay_biryani_masala.png", onSale: false },
  { name: "Chaat Masala", price: 300, image: "/assets/chaat_masala.png", onSale: false },
  { name: "Cloves Powder", price: 300, image: "/assets/cloves_powder.png", onSale: false },
  { name: "Bombay Biryani", price: 250, image: "/assets/bombay_biryani_masala.png", onSale: false },
  { name: "Zarda", price: 450, image: "/assets/zarda.png", onSale: false },
  { name: "Nihari", price: 100, image: "/assets/nihari.png", onSale: false },
  { name: "Bombay Biryani", price: 250, image: "/assets/bombay_biryani_masala.png", onSale: false },
];

export default function DailyStaples() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const slider = scrollRef.current;
    let isDown = false;
    let startX;
    let scrollLeft;

    const mouseDown = (e) => {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const mouseLeave = () => {
      isDown = false;
      slider.classList.remove("active");
    };

    const mouseUp = () => {
      isDown = false;
      slider.classList.remove("active");
    };

    const mouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.5;
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener("mousedown", mouseDown);
    slider.addEventListener("mouseleave", mouseLeave);
    slider.addEventListener("mouseup", mouseUp);
    slider.addEventListener("mousemove", mouseMove);

    return () => {
      slider.removeEventListener("mousedown", mouseDown);
      slider.removeEventListener("mouseleave", mouseLeave);
      slider.removeEventListener("mouseup", mouseUp);
      slider.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <section className="daily-wrapper">
      <div className="daily-header">
        <h2 className="daily-title">Daily Staples</h2>
        <a href="/shop" className="more-link">MORE PRODUCTS →</a>
      </div>
      <div className="scroll-container" ref={scrollRef}>
        <div className="scroll-content">
          {products.map((product, idx) => (
            <div key={idx} className="product-card">
              {product.onSale && <span className="sale-badge">Sale!</span>}
              <div className="product-content">
                <div className="image-box">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="product-image"
                  />
                </div>
                <p className="product-name">{product.name}</p>
                <div className="product-pricing">
                  {product.originalPrice && (
                    <span className="original-price">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                  <span className="final-price">{product.price}PKR</span>
                </div>
                <button className="add-cart">ADD TO CART</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
