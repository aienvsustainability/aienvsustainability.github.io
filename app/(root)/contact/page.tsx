import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation';
import ContactSection from '@/components/contact/Section'
import React from "react"
import { Metadata } from "next";

interface CustomMetadata extends Metadata {
  canonical?: string;
}

export const metadata: CustomMetadata = {
  title: "Contact",
  description: "Connect with CAIES Foundation to collaborate, inquire, or support our mission. Reach out through our contact page for partnerships, inquiries, or donations.",
  canonical: "https://caienvsus.org/contact",
};


const Contact = () => {
  return (
    <>
      <Navigation />
      <ContactSection />
      <Footer />
    </>
  )
}

export default Contact