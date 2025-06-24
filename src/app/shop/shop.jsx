'use client';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/app/redux/features/cartSlice';
import './shop.css';
import { baseUrl } from '@/app/const';

const Shop = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const itemsPerPage = 12;
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState('default');

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
    dispatch(addToCart(product));
    router.push('/cart');
  };

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;

  // Sorting logic
  const sortedProducts = [...products];
  if (sortOption === 'price-low-high') {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === 'price-high-low') {
    sortedProducts.sort((a, b) => b.price - a.price);
  } else if (sortOption === 'name-asc') {
    sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortOption === 'name-desc') {
    sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
  }

  const currentProducts = sortedProducts.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <Head>
        <title>Shop</title>
        <link rel="stylesheet" href="/css/shop.css" />
      </Head>

      <div className="shop-container-one">
        {/* Toolbar with result count and sort dropdown */}
        <div className="shop-toolbar">
          <div className="results-count">
            Showing {startIndex + 1}–{Math.min(startIndex + itemsPerPage, products.length)} of {products.length} results
          </div>

          <div className="sort-dropdown">
            <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
              <option value="default">Default Sorting</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="name-desc">Name: Z to A</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="product-grid">
          {currentProducts.map((product, index) => (
            <div key={product._id || index} className="product-card-3">
              <Link href={`/productdetails?productId=${product._id}`}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <div className="product-price">
                  <span>{product.price} PKR</span>
                </div>
              </Link>
              <button className="add-to-cart-one" onClick={() => handleAddToCart(product)}>
                ADD TO CART
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Shop;
