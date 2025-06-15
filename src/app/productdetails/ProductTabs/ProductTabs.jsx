'use client';                         // keep if you’re using the app‑router

import { useState } from 'react';
import './ProductTabs.css';  // global stylesheet (next section)

/**
 * Simple demo data ─ swap in real content or add more tabs as needed.
 */
const TABS = [
  {
    id: 'description',
    label: 'Description',
    heading: 'Description',
    body: `Pharetra vivamus consectetur fuga. Expedita tellus eveniet nam corporis, 
           alias, explicabo sunt laudantium, laboriosam rerum officiis, felis auctor, 
           aliquid excepturi! Earum habitant, molestias voluptatibus erat adipiscing augue? 
           Potenti excepturi senectus mauris consequat excepturi ultricies ratione sociis 
           magnam mauris unde sint, excepteur maecenas.`,
  },
  // Example of more tabs you could add:
  // { id: 'reviews', label: 'Reviews', heading: 'Reviews', body: '...' },
  // { id: 'specs', label: 'Specifications', heading: 'Specifications', body: '...' },
];

export default function ProductTabs() {
  const [active, setActive] = useState(TABS[0].id);
  const current = TABS.find((tab) => tab.id === active);

  return (
    <section className="tabs-wrapper">
      {/* ---------- Tab strip ---------- */}
      <ul className="tabs-nav">
        {TABS.map((tab) => (
          <li
            key={tab.id}
            className={`tab-item ${tab.id === active ? 'active' : ''}`}
            onClick={() => setActive(tab.id)}
          >
            {tab.label}
          </li>
        ))}
      </ul>

      {/* ---------- Tab panel ---------- */}
      <article className="tab-content" role="tabpanel">
        <h2>{current.heading}</h2>
        <p>{current.body}</p>
      </article>
    </section>
  );
}
