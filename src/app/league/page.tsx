"use client"; // Mark this file as a client-side component

import React from "react";
import "../league/league.css";
import { Title } from "@/components/common/title/title";
import Link from "next/link";

const LeaguePage = () => {
  return (
    <div className="overlay">
      <div className="league-content">
        <Title value=">Welcome to the League Page" />
        <p>Explore the latest updates, strategies, and events in the League!</p>
        <Link href="/">Home</Link>
      </div>
    </div>
  );
};

export default LeaguePage;
