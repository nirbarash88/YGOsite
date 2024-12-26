"use client"; // Mark this file as a client-side component

import React from 'react';
import '../about/about.css'; // Import the CSS file

export default function About() {
  return (
    <div className="overlay">
      <div className="about-content">
        <h1>About Page</h1>
        <p>Details about this site will show here</p>
        <a href="/">Home</a>
      </div>
    </div>
  );
}
