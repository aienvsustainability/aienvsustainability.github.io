import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation';
import AboutSection from '@/components/about/Section'
import React from "react"
import { Metadata } from "next";
import Head from 'next/head';

interface CustomMetadata extends Metadata {
  canonical?: string;
}

export const metadata: CustomMetadata = {
  title: "About Us",
  description: "CAIES Foundation employs ML to assess social resilience to arsenicosis, studies arsenic's impact on cellular redox, and creates a hybrid algorithm for landslide mapping.",
  canonical: "https://caienvsus.org/about",
};

const About = () => {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://caienvsus.org/about" />
      </Head>
      <Navigation />
      <AboutSection />
      <Footer />
    </>
  )
}

export default About