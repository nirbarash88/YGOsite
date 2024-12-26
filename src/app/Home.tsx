"use client"; // Mark this file as a client-side component

import React, { useState } from 'react';
import './Styles.css'; // Import the CSS file

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Welcome to YGO Herzliya site!</h2>
      <h6>Here you will get all the news and information about new products at our OTS local store!</h6>
      {/* You can add a button or other elements here */}
    </div>
  );
}
