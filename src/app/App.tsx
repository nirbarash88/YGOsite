"use client"; // Mark this file as a client-side component

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './page';
import League from './League';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        {/* Sidebar navigation */}
        <nav className="sidebar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/league">League</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>
        </nav>

        {/* Main content */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/league" element={<League />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
