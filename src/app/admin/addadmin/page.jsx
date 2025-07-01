'use client';

import React, { useState } from 'react';
import './addadmin.css';

const AdminPage = () => {
  const [admins, setAdmins] = useState([]);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [editId, setEditId] = useState(null);

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert('Please fill all fields.');
      return;
    }

    if (editId !== null) {
      // Update admin
      setAdmins(
        admins.map((admin) =>
          admin.id === editId ? { ...admin, ...formData } : admin
        )
      );
      setEditId(null);
    } else {
      // Add new admin
      const newAdmin = {
        id: Date.now(),
        email: formData.email,
        password: formData.password,
      };
      setAdmins([...admins, newAdmin]);
    }

    setFormData({ email: '', password: '' });
  };

  const handleDelete = (id) => {
    setAdmins(admins.filter((admin) => admin.id !== id));
  };

  const handleEdit = (admin) => {
    setFormData({ email: admin.email, password: admin.password });
    setEditId(admin.id);
  };

  return (
    <div className="admin-wrapper">
      <h1>Admin Management</h1>

      <form className="admin-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Admin Email"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
        />
        <input
          type="password"
          placeholder="Admin Password"
          value={formData.password}
          onChange={(e) => handleChange('password', e.target.value)}
        />
        <button type="submit">{editId ? 'Update Admin' : 'Add Admin'}</button>
      </form>

      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Password</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {admins.map((admin, index) => (
              <tr key={admin.id}>
                <td>{index + 1}</td>
                <td>{admin.email}</td>
                <td>{admin.password}</td>
                <td>
                  <button className="btn-edit" onClick={() => handleEdit(admin)}>
                    Edit
                  </button>
                  <button className="btn-delete" onClick={() => handleDelete(admin.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {admins.length === 0 && (
              <tr>
                <td colSpan="4" style={{ textAlign: 'center', padding: '1rem' }}>
                  No admins added yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPage;
