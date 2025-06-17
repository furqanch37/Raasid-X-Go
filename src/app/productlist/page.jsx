'use client';
import React, { useEffect, useState } from 'react';
import './ProductList.css';
import jsPDF from 'jspdf';
import Barcode from 'react-barcode';
import bwipjs from 'bwip-js';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    fetch('https://raasid.com/api/products?size=126')
      .then((res) => res.json())
      .then((data) => setProducts(data.products || []))
      .catch((err) => console.error('Error fetching products:', err));
  }, []);

  const generateBarcodeDataURL = (text) => {
    return new Promise((resolve, reject) => {
      const canvas = document.createElement('canvas');
      bwipjs.toCanvas(
        canvas,
        {
          bcid: 'code128',
          text: text,
          scale: 3,
          height: 10,
          includetext: false,
          paddingwidth: 0,
        },
        function (err) {
          if (err) return reject(err);
          resolve(canvas.toDataURL('image/png'));
        }
      );
    });
  };

  const handleDownload = async () => {
    if (!products.length) return alert('No products to export!');
    setDownloading(true);

    const product = products[0]; // Only the first product
    const pdf = new jsPDF('p', 'mm', 'a4');
    let y = 20;

    pdf.setFontSize(16);
    pdf.text('Product Preview', 105, y, { align: 'center' });
    y += 10;
    pdf.setFontSize(12);

    const name = product.name || '';
    const price = product.price ? `Rs. ${product.price}` : '—';
    const label = `1. ${name} - ${price}`;

    pdf.text(label, 10, y);
    y += 6;

    try {
      const barcodeText = `${name} - ${price}`;
      const barcodeImage = await generateBarcodeDataURL(barcodeText);
      pdf.addImage(barcodeImage, 'PNG', 10, y, 80, 20);
      y += 25;
    } catch (err) {
      console.error('Barcode Error:', err);
      pdf.text('(Barcode Error)', 10, y);
    }

    pdf.save('product-preview.pdf');
    setDownloading(false);
  };

  return (
    <div className="product-wrapper">
      <h2 className="product-heading">Product Names</h2>
      <ol className="product-list">
        {products.map((product, idx) => (
          <li key={product.id || idx} className="product-item">
            <div>
              <span>{product.name}</span>
              {product.price && (
                <span className="product-price">Rs. {product.price}</span>
              )}
              <div style={{ marginTop: '5px', width: '180px', overflow: 'hidden' }}>
                <Barcode
                  value={`${product.name} - Rs. ${product.price}`}
                  height={40}
                  width={2} // Adjust for total ~180px
                  format="CODE128"
                  displayValue={false}
                  background="#ffffff"
                  margin={0}
                />
              </div>
            </div>
          </li>
        ))}
      </ol>
      
    </div>
  );
};

export default ProductList;
