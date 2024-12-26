"use client"; // Mark this file as a client-side component

import React from "react";
import "../about/about.css"; // Import the CSS file
import { PageLayout } from "@/components/common/page-layout/layout";

export default function About() {
  return (
    <PageLayout title="About Page" className="about-content" withBackToHome>
      <p>Details about this site will show here</p>
    </PageLayout>
  );
}
