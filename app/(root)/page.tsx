import React from "react";
import Header from '@/components/HeaderBar';
import Footer from '@/components/Footer';
import Counter from '@/components/home/Counter';
import Event from '@/components/home/Event';
import Hero from '@/components/home/Hero';
import ImageSlider from '@/components/home/ImageSlider';
import { Metadata } from "next";

interface CustomMetadata extends Metadata {
  canonical?: string;
}

export const metadata: CustomMetadata = {
  title: "Home",
  description: "CAIES Foundation pioneers sustainable solutions via advanced research, employing AI, ML, and geospatial tech for multidimensional impact.",
  canonical: "https://caienvsus.org/",
};

const Home = () => {
  return (
    <>
      <Header />
      <ImageSlider />
      <Hero />
      <Counter />
      <Event />
      <Footer />
    </>
  );
};

export default Home;