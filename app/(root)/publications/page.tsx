import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation';
import PublicationSection from '@/components/publication/Section'
import React from "react"
import { Metadata } from "next";

interface CustomMetadata extends Metadata {
  canonical?: string;
}

export const metadata: CustomMetadata = {
  title: "Publications",
  description: "From curious minds to groundbreaking discoveries—your gateway to scholarly excellence",
  canonical: "https://caienvsus.org/publications",
};


const Publications = () => {
  return (
    <>
        <Navigation />
        <PublicationSection />
        <Footer />
    </>
  )
}

export default Publications