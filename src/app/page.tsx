// pages/index.tsx
"use client"; // Mark this file as a client-side component

import React from "react";
import "./styles.css"; // Import the CSS file

export default function Home() {
  return (
    <div className="background-image">
      <div className="content">
        <h1>Welcome to YGO Herzliya</h1>
        <p>Click below to go to the League page:</p>
        <button className="league-button">
          <a href="/league">League</a>
        </button>
        <button className="about-button">
          <a href="/about">about</a>
        </button>
      </div>
    </div>
  );
}
