"use client"; // Mark this file as a client-side component

import React from 'react';
import '../league/league.css';

const LeaguePage = () => {
  return (
    <div className="overlay">
      <div className="league-content">
        <h1>Welcome to the League Page</h1>
        <p>Explore the latest updates, strategies, and events in the League!</p>
        <a href="/">Home</a>
      </div>
    </div>
  );
};

export default LeaguePage;


