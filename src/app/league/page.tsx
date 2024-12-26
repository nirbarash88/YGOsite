"use client"; // Mark this file as a client-side component

import React from 'react';
import '../league/league.css';
import { Title } from '@/components/common/title/title';

const LeaguePage = () => {
  return (
    <div className="overlay">
      <div className="league-content">
        <Title value=">Welcome to the League Page"/>
        <p>Explore the latest updates, strategies, and events in the League!</p>
        <a href="/">Home</a>
      </div>
    </div>
  );
};

export default LeaguePage;


