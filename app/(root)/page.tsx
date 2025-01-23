import React from "react";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Counter from '@/components/home/Counter';
import Event from '@/components/home/Event';
import Hero from '@/components/home/Hero';
import ImageSlider from '@/components/home/ImageSlider';
import PublicationSubSection from "@/components/home/Publication";

interface CustomMetadata {
  title: string;
  description: string;
  alternates?: {
    canonical?: string;
    languages?: {
      'en-US': string;
    };
  };
}

export const metadata: CustomMetadata = {
  title: "Home",
  description: "CAIES Foundation pioneers sustainable solutions via advanced research, employing AI, ML, and geospatial tech for multidimensional impact.",
  alternates: {
    canonical: "/",
    languages: {
      'en-US': '/',
    }
  },
};


const Home = () => {
  return (
    <>
      <Navigation />
      <ImageSlider />
      <Hero />
      <Counter />
      <PublicationSubSection />
      <Event />
      <Footer />
    </>
  );
};

export default Home;
