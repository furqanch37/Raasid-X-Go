'use client';
import React, { useState, useEffect } from 'react';
import './AddProducts.css';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { baseUrl } from '@/app/const';

const AddProducts = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [nutritions, setNutritions] = useState('');
  const [serving, setServing] = useState('');
  const [packaging, setPackaging] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetch(`${baseUrl}/products/all`)
      .then(res => res.json())
      .then(data => setProducts(data.products || []))
      .catch(err => console.error('❌ Failed to fetch products:', err));
  }, []);

  const handleSubmit = async () => {
    if (!name || !price || !category || !description) {
      alert('Please fill all required fields');
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData();
    formData.append('name', name);
    formData.append('category', category);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('packaging', packaging);
    formData.append('serving', serving);
    formData.append(
      'ingredients',
      JSON.stringify(ingredients ? ingredients.split(',').map(i => i.trim()) : [])
    );

    if (image) formData.append('image', image);

    try {
      const nutritionParts = nutritions.split(',').reduce((acc, part) => {
        if (!part.includes(':')) return acc;
        const [key, val] = part.split(':').map(str => str.trim());
        if (key && val) acc[key.toLowerCase()] = val;
        return acc;
      }, {});
      formData.append('nutritions', JSON.stringify(nutritionParts));

      let url = `${baseUrl}/products/create`;
      let method = 'POST';

      if (editingId) {
        url = `${baseUrl}/products/update/${editingId}`;
        method = 'PUT';
      }

      const res = await fetch(url, {
        method,
        body: formData,
      });

      const contentType = res.headers.get('content-type');
      let data;

      if (contentType && contentType.includes('application/json')) {
        data = await res.json();
      } else {
        const rawText = await res.text();
        console.error('❌ Non-JSON response from server:', rawText);
        alert('Unexpected server response (not JSON).');
        setIsSubmitting(false);
        return;
      }

      if (res.ok && data.success) {
        const refreshed = await fetch(`${baseUrl}/products/all`).then(res => res.json());
        setProducts(refreshed.products || []);
        resetForm();
      } else {
        console.error('❌ Server error:', data);
        alert(data.message || 'Failed to save product.');
      }
    } catch (err) {
      console.error('❌ Exception during product submission:', err);
      alert('An error occurred. Check the console for details.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (prod) => {
    setName(prod.name);
    setCategory(prod.category);
    setPrice(prod.price);
    setDescription(prod.description);
    setNutritions(
      prod.nutritions
        ? Object.entries(prod.nutritions).map(([k, v]) => `${k}: ${v}`).join(', ')
        : ''
    );
    setServing(prod.serving || '');
    setPackaging(prod.packaging || '');
    setIngredients(Array.isArray(prod.ingredients) ? prod.ingredients.join(', ') : prod.ingredients);
    setImage(null);
    setEditingId(prod._id);
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${baseUrl}/products/${id}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.success) {
        setProducts(prev => prev.filter(prod => prod._id !== id));
      } else {
        console.error('❌ Failed to delete:', data);
        alert(data.message || 'Delete failed.');
      }
    } catch (err) {
      console.error('❌ Error deleting product:', err);
    }
  };

  const resetForm = () => {
    setName('');
    setCategory('');
    setPrice('');
    setDescription('');
    setNutritions('');
    setServing('');
    setPackaging('');
    setIngredients('');
    setImage(null);
    setEditingId(null);
  };

  return (
    <div className="mp-container">
      <h2 className="mp-title">Products</h2>
      <div className="mp-wrapper">
        {/* Form */}
        <div className="mp-form">
          <label>Product Name:</label>
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter product name" />
          <label>Category:</label>
          <input value={category} onChange={(e) => setCategory(e.target.value)} type="text" placeholder="e.g. Spices" />
          <label>Price (Rs):</label>
          <input value={price} onChange={(e) => setPrice(e.target.value)} type="number" placeholder="Enter price" />
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={2} />
          <label>Nutritions:</label>
          <input value={nutritions} onChange={(e) => setNutritions(e.target.value)} placeholder="e.g. calories: 0, caffeine: 25mg" />
          <label>Serving Size:</label>
          <input value={serving} onChange={(e) => setServing(e.target.value)} placeholder="e.g. 1 tsp" />
          <label>Packaging:</label>
          <input value={packaging} onChange={(e) => setPackaging(e.target.value)} placeholder="e.g. Pouch, Box" />
          <label>Ingredients:</label>
          <textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} rows={2} placeholder="Comma separated" />
          <label>Upload Image:</label>
          <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
          {image && (
            <div style={{ marginTop: '10px' }}>
              <img src={URL.createObjectURL(image)} alt="Preview" width={100} height={100} />
            </div>
          )}
          <button className="mp-btn" onClick={handleSubmit} disabled={isSubmitting}>
            {isSubmitting ? 'Saving...' : editingId ? 'Update Product' : 'Add Product'}
          </button>
        </div>

        {/* Table */}
        <div className="mp-table-wrapper">
          <table className="mp-table">
            <thead>
              <tr>
                <th>Sr #</th>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Description</th>
                <th>Nutritions</th>
                <th>Serving</th>
                <th>Packaging</th>
                <th>Ingredients</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {products.length === 0 ? (
                <tr><td colSpan="12">No products found</td></tr>
              ) : (
                products.map((prod, idx) => (
                  <tr key={prod._id}>
                    <td>{idx + 1}</td>
                    <td>{prod.image ? <img src={prod.image} width={50} height={50} alt="img" /> : 'No Image'}</td>
                    <td>{prod.name}</td>
                    <td>{prod.category}</td>
                    <td>{prod.price}</td>
                    <td>{prod.description}</td>
                    <td>
                      {prod.nutritions
                        ? Object.entries(prod.nutritions).map(([k, v]) => `${k}: ${v}`).join(', ')
                        : ''}
                    </td>
                    <td>{prod.serving}</td>
                    <td>{prod.packaging}</td>
                    <td>{Array.isArray(prod.ingredients) ? prod.ingredients.join(', ') : prod.ingredients}</td>
                    <td>
                      <button className="mp-icon-btn" onClick={() => handleEdit(prod)}><FaEdit /></button>
                    </td>
                    <td>
                      <button className="mp-icon-btn" onClick={() => handleDelete(prod._id)}><FaTrash /></button>
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
