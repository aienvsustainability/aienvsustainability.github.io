import Footer from '@/components/Footer'
import HeaderBar from '@/components/HeaderBar'
import PublicationPageHeader from '@/components/publication/PublicationPageHeader'
import PublicationSection from '@/components/publication/PublicationSection'
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
        <HeaderBar />
        <PublicationPageHeader />
        <PublicationSection />
        <Footer />
    </>
  )
}

export default Publications