import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ApparelForm from './components/ApparelForm';
import ApparelList from './components/ApparelList';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Apparel Management</h1>
        <Routes>
          <Route path="/" element={<ApparelForm />} />
          <Route path="/apparels" element={<ApparelList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;