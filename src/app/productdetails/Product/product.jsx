'use client';
import { useState } from 'react';
import Image from 'next/image';
import { FiSearch } from 'react-icons/fi';
import './product.css';

export default function ProductPage({ product }) {
  const [qty, setQty] = useState(1);

  return (
    <main className="product">
      <section className="product__imgBlock">
        <div className="image-wrapper">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 80vw, 40vw"
            style={{ objectFit: 'contain' }}
          />
          <FiSearch className="product__zoomIcon" />
        </div>
      </section>

      <section className="product__details">
        <h3 className="product__title">{product.name}</h3>
        <p className="product__price">{product.price.toFixed(2)} PKR</p>

        <div className="product__buyRow">
          <input
            type="number"
            min="1"
            value={qty}
            onChange={e => setQty(+e.target.value)}
            className="product__qty"
          />
          <button className="product__btn">Add to Cart</button>
        </div>

        <p className="product__meta">
          <span>Category:</span> {product.category}
        </p>
      </section>
    </main>
  );
}
