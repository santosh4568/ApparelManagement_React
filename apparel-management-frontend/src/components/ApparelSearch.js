import React, { useState } from 'react';

const ApparelSearch = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch}>
      <div>
        <label>Search Apparel:</label>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      </div>
      <button type="submit">Search</button>
    </form>
  );
};

export default ApparelSearch;