'use client';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/app/redux/features/cartSlice'; // Adjust this path
import './shop.css';
import { baseUrl } from '@/app/const';

const Shop = () => {
  const router = useRouter();
  const dispatch = useDispatch(); // ✅ redux
  const itemsPerPage = 12;
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

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

  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); // ✅ Add to redux store
    router.push('/cart');         // ✅ Navigate to cart
  };

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <Head>
        <title>Shop</title>
        <link rel="stylesheet" href="/css/shop.css" />
      </Head>

      <div className="shop-container">
        {/* ... */}
        <div className="product-grid">
          {currentProducts.map((product, index) => (
            <div key={product._id || index} className="product-card">
              <Link href={`/productdetails?productId=${product._id}`}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <div className="product-price">
                  <span>{product.price} PKR</span>
                </div>
              </Link>
              <button className="add-to-cart" onClick={() => handleAddToCart(product)}>
                ADD TO CART
              </button>
            </div>
          ))}
        </div>
        {/* ... */}
      </div>
    </>
  );
};

export default Shop;
