import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ApparelForm = () => {
  const [apparel, setApparel] = useState({
    name: '',
    condition: '',
    type: ''
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
        navigate('/apparels');
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
        <label>Condition:</label>
        <input type="text" name="condition" value={apparel.condition} onChange={handleChange} required />
      </div>
      <div>
        <label>Type:</label>
        <input type="text" name="type" value={apparel.type} onChange={handleChange} required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ApparelForm;