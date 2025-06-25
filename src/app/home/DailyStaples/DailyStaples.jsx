'use client';
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { addToCart } from "@/app/redux/features/cartSlice";
import "./style.css";
import { baseUrl } from "@/app/const";

export default function DailyStaples() {
  const scrollRef = useRef(null);
  const dispatch = useDispatch();
  const router = useRouter();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${baseUrl}/products/all`);
        const data = await res.json();
        if (data.success) {
          setProducts(data.products);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

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

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    router.push('/cart');
  };

  return (
    <section className="daily-wrapper">
      <div className="daily-header">
        <h2 className="daily-title">Daily Staples</h2>
        <a href="/shop" className="more-link">MORE PRODUCTS →</a>
      </div>
      <div className="scroll-container" ref={scrollRef}>
        <div className="scroll-content">
          {products.map((product, idx) => (
            <div key={product._id || idx} className="product-card">
              <Link href={`/productdetails?productId=${product._id}`}>
                <div className="product-content">
                  <div className="image-box">
                    {product.image?.startsWith("https://res.cloudinary.com/") && (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="product-image"
                    />)}
                  </div>
                  <p className="product-name">{product.name}</p>
                  <div className="product-pricing">
                    <span className="final-price numbers">{product.price} PKR</span>
                  </div>
                </div>
              </Link>
              <div className="cart-btn">
              <button className="add-cart" onClick={() => handleAddToCart(product)}>
                ADD TO CART
              </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
