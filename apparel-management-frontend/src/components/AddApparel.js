import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/AddApparel.css';

const AddApparel = () => {
  const [apparel, setApparel] = useState({
    name: '',
    status: '',
    category: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setApparel({ ...apparel, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/apparel', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(apparel)
      });
      if (response.ok) {
        alert('Apparel submitted successfully');
        navigate('/');
      } else {
        alert('Failed to submit apparel');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit apparel');
    }
  };

  return (
    <div className="add-apparel-container">
      <div className="add-apparel-form">
        <h2>Add Apparel</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={apparel.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Status</label>
            <select name="status" value={apparel.status} onChange={handleChange} required>
              <option value="">-- Select Status --</option>
              <option value="unused">Unused</option>
              <option value="worn-out">Worn-out</option>
            </select>
          </div>
          <div className="form-group">
            <label>Category</label>
            <select name="category" value={apparel.category} onChange={handleChange} required>
              <option value="">-- Select Category --</option>
              <option value="disposal">Disposal</option>
              <option value="donation">Donation</option>
              <option value="recycling">Recycling</option>
            </select>
          </div>
          <button type="submit" className="add-apparel-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddApparel;