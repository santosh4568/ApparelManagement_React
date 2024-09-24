import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './components/LandingPage';
import Login from './components/Login';
import SignUp from './components/SignUp';
import AddApparel from './components/AddApparel';
import ViewApparel from './components/ViewApparel';
import Logout from './components/Logout';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/AddApparel" element={<AddApparel />} />
        <Route path="/ViewApparel" element={<ViewApparel />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
};

export default App;