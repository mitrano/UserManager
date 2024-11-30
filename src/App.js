import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserListPage from './pages/UserListPage';
import UserFormPage from './pages/UserFormPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UserListPage />} />
        <Route path="/add-user" element={<UserFormPage />} />
      </Routes>
    </Router>
  );
};

export default App;
