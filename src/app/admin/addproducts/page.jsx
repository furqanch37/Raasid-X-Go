'use client';
import React, { useState } from 'react';
import './AddProducts.css';
import { FaEdit, FaTrash } from 'react-icons/fa';

const initialProducts = [
  {
    _id: '1',
    name: 'Chaat Masala',
    category: 'Spices',
    price: '200',
    description: 'Tangy and spicy masala mix for snacks',
  },
  {
    _id: '2',
    name: 'Biryani Masala',
    category: 'Food',
    price: '250',
    description: 'Perfect blend of spices for biryani lovers',
  },
];

const AddProducts = () => {
  const [products, setProducts] = useState(initialProducts);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [editingId, setEditingId] = useState(null);

  const handleSubmit = () => {
    if (!name || !price || !category || !description) {
      alert('Please fill all fields');
      return;
    }

    const newProduct = {
      _id: editingId || Date.now().toString(),
      name,
      category,
      price,
      description,
    };

    if (editingId) {
      setProducts(prev =>
        prev.map(prod => (prod._id === editingId ? newProduct : prod))
      );
    } else {
      setProducts(prev => [...prev, newProduct]);
    }

    resetForm();
  };

  const handleEdit = (prod) => {
    setName(prod.name);
    setCategory(prod.category);
    setPrice(prod.price);
    setDescription(prod.description);
    setEditingId(prod._id);
  };

  const handleDelete = (id) => {
    setProducts(prev => prev.filter(prod => prod._id !== id));
  };

  const resetForm = () => {
    setName('');
    setCategory('');
    setPrice('');
    setDescription('');
    setImage(null);
    setEditingId(null);
  };

  return (
    <div className="mp-container">
      <h2 className="mp-title">Products</h2>

      <div className="mp-wrapper">
        {/* Left Form */}
        <div className="mp-form">
          <label>Product Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter product name"
          />

          <label>Category:</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="e.g. Spices, Food"
          />

          <label>Price (Rs):</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter price"
          />

          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter product description"
            rows={3}
          ></textarea>

          <label>Upload Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />

          <button className="mp-btn" onClick={handleSubmit}>
            {editingId ? 'Update Product' : 'Add Product'}
          </button>
        </div>

        {/* Right Table */}
        <div className="mp-table-wrapper">
          <table className="mp-table">
            <thead>
              <tr>
                <th>Sr #</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price (Rs)</th>
                <th>Description</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {products.length === 0 ? (
                <tr>
                  <td colSpan="7" style={{ textAlign: 'center', padding: '1rem', color: 'gray' }}>
                    No products found.
                  </td>
                </tr>
              ) : (
                products.map((prod, idx) => (
                  <tr key={prod._id}>
                    <td>{idx + 1}</td>
                    <td>{prod.name}</td>
                    <td>{prod.category}</td>
                    <td>{prod.price}</td>
                    <td>{prod.description}</td>
                    <td>
                      <button className="mp-icon-btn" onClick={() => handleEdit(prod)}>
                        <FaEdit />
                      </button>
                    </td>
                    <td>
                      <button className="mp-icon-btn" onClick={() => handleDelete(prod._id)}>
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
