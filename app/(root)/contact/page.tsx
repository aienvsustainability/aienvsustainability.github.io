import Footer from '@/components/Footer'
import HeaderBar from '@/components/HeaderBar'
import ContactPageHeader from '@/components/contact/ContactPageHeader'
import ContactSection from '@/components/contact/ContactSection'
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
      <HeaderBar />
      <ContactPageHeader />
      <ContactSection />
      <Footer />
    </>
  )
}

export default Contact