import React, { useState } from 'react';

const SubmitApparel = () => {
  const [apparel, setApparel] = useState({
    name: '',
    status: 'disposal', // default status
    category: ''
  });

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
      } else {
        alert('Failed to submit apparel');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit apparel');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={apparel.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Status:</label>
        <select name="status" value={apparel.status} onChange={handleChange}>
          <option value="disposal">Disposal</option>
          <option value="donation">Donation</option>
          <option value="recycling">Recycling</option>
        </select>
      </div>
      <div>
        <label>Category:</label>
        <input type="text" name="category" value={apparel.category} onChange={handleChange} required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SubmitApparel;