import React, { useState, useEffect } from 'react';
import ApparelSearch from './ApparelSearch';

const ApparelList = () => {
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
    <div>
      <ApparelSearch onSearch={handleSearch} />
      <ul>
        {filteredApparels.map(apparel => (
          <li key={apparel.id}>{apparel.name} - {apparel.condition} - {apparel.type}</li>
        ))}
      </ul>
    </div>
  );
};

export default ApparelList;