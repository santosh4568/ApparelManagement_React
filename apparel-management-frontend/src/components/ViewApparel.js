import React, { useState, useEffect } from 'react';
import ApparelSearch from './ApparelSearch';
import './CSS/ViewApparel.css';

const ViewApparel = () => {
  const [apparels, setApparels] = useState([]);
  const [filteredApparels, setFilteredApparels] = useState([]);

  useEffect(() => {
    fetchApparels();
  }, []);

  const fetchApparels = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/apparel');
      const data = await response.json();
      setApparels(data);
      setFilteredApparels(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSearch = (query) => {
    const filtered = apparels.filter(apparel =>
      apparel.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredApparels(filtered);
  };

  return (
    <div className="view-apparel-container">
      <div className="view-apparel-content">
        <h2>View Apparel</h2>
        <ApparelSearch onSearch={handleSearch} />
        <ul className="apparel-list">
          {filteredApparels.map(apparel => (
            <li key={apparel.id} className="apparel-item">
              <span className="apparel-name">{apparel.name}</span>
              <span className="apparel-status">{apparel.status}</span>
              <span className="apparel-category">{apparel.category}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ViewApparel;