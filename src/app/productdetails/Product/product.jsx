'use client';
import { useState } from 'react';
import Image from 'next/image';
import { FiSearch } from 'react-icons/fi';
import './product.css';           // plain global CSS (see next section)

/**
 * Dumb data so the page renders in isolation.
 * In a real store you’d fetch this via getServerSideProps / fetch().
 */
const mock = {
  name: 'Almonds',
  price: 20,
  img: '/assets/chaat_masala.png',           // drop the file into /public
  category: 'Snacks',
  tags: ['Dry Food', 'Snacks'],
  description: `Eiusmod exercitation! Adipiscing laboriosam aliquip cras conubia
    incididunt, urna primis, habitant! Quos, mattis ultricies…`,
};

export default function ProductPage() {
  const [qty, setQty] = useState(1);

  return (
    <main className="product">
      <section className="product__imgBlock">
        
          <div className="image-wrapper">
  <Image
    src={mock.img}
    alt={mock.name}
    fill
    sizes="(max-width: 768px) 80vw, 40vw"
    style={{ objectFit: 'contain' }}
  />


          <FiSearch className="product__zoomIcon" />
        </div>
      </section>

      <section className="product__details">
        <h3 className="product__title">{mock.name}</h3>
        <p className="product__price">${mock.price.toFixed(2)}</p>

        {/* ---- Qty + Add‑to‑Cart ---- */}
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

    
        {/* ---- Meta ---- */}
        <p className="product__meta">
          <span>Category:</span> {mock.category}
        </p>
        <p className="product__meta">
          <span>Tags:</span> {mock.tags.join(', ')}
        </p>

        {/* ---- Description ---- */}
        <p className="product__desc">{mock.description}</p>
      </section>
    </main>
  );
}
