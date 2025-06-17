'use client';
import React, { useState } from 'react';
import './ManageCategories.css';
import { FaHome, FaEdit, FaTrash } from 'react-icons/fa';

const initialCategories = [
  {
    _id: '1',
    name: 'Spices',
    icon: 'FaPaintBrush',
  },
  {
    _id: '2',
    name: 'Food',
    icon: 'FaCode',
  },
];

const ManageCategories = () => {
  const [categories, setCategories] = useState(initialCategories);
  const [popupData, setPopupData] = useState(null);

  const [name, setName] = useState('');
  const [icon, setIcon] = useState('');
  const [image, setImage] = useState(null);
  const [subcategories, setSubcategories] = useState('');
  const [editingId, setEditingId] = useState(null);

  const handleSubmit = () => {
    const subCatsArray = subcategories.split(',').map(s => s.trim());

    if (editingId) {
      setCategories(prev =>
        prev.map(cat =>
          cat._id === editingId
            ? { ...cat, name, icon, subcategories: subCatsArray }
            : cat
        )
      );
    } else {
      setCategories(prev => [
        ...prev,
        {
          _id: Date.now().toString(),
          name,
          icon,
          subcategories: subCatsArray,
          gigCount: 0,
        },
      ]);
    }
    resetForm();
  };

  const handleEdit = (cat) => {
    setName(cat.name);
    setIcon(cat.icon);
    setSubcategories(cat.subcategories.join(', '));
    setEditingId(cat._id);
  };

  const handleDelete = (id) => {
    setCategories(prev => prev.filter(cat => cat._id !== id));
  };

  const resetForm = () => {
    setName('');
    setIcon('');
    setImage(null);
    setSubcategories('');
    setEditingId(null);
  };

  return (
    <div className="manage-categories">
      <h2>
        Categories
      </h2>

  
      <div className="content-wrapper">
        {/* Left Form */}
        <div className="form-section">
          <label>Category Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Category Name" />


          <label>Upload Image:</label>
          <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />

    

          <button className="add-btn" onClick={handleSubmit}>
            {editingId ? 'Update Category' : 'Add Category'}
          </button>
        </div>

        {/* Right Table */}
        <div className="table-section">
          <table>
            <thead>
              <tr>
                <th>Sr #</th>
                <th>Category Name</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {categories.length === 0 ? (
                <tr>
                  <td colSpan="5" style={{ textAlign: 'center', padding: '1rem', color: 'gray' }}>
                    No categories found.
                  </td>
                </tr>
              ) : (
                categories.map((cat, idx) => (
                  <tr key={cat._id}>
                    <td>{idx + 1}</td>
                    <td className="clickable" onClick={() => setPopupData(cat)}>
                      {cat.name}
                    </td>
        
                    <td>
                      <button className="icon-button" onClick={() => handleEdit(cat)}>
                        <FaEdit />
                      </button>
                    </td>
                    <td>
                      <button className="icon-button" onClick={() => handleDelete(cat._id)}>
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

      {/* Subcategory Popup */}
      {popupData && (
        <div className="subcategory-popup">
          <div className="popup-content">
            <h4>Subcategories for {popupData.name}</h4>
            <ul>
              {popupData.subcategories.map((sub, i) => (
                <li key={i}>{sub}</li>
              ))}
            </ul>
            <button onClick={() => setPopupData(null)} className="add-btn">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageCategories;
