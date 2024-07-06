import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation';
import AboutSection from '@/components/about/Section'
import React from "react"

interface CustomMetadata {
  title: string;
  description: string;
  alternates?: {
    canonical?: string;
    languages?: {
      'en-US': string;
    };
  };
  openGraph?: {
    title: string;
    description: string;
    url: string;
    siteName: string;
    images: {
      url: string;
      width: number;
      height: number;
    }[];
    locale: string;
    type: string;
  };
  robots?: {
    index: boolean;
    follow: boolean;
    nocache: boolean;
    googleBot: {
      index: boolean;
      follow: boolean;
      noimageindex: boolean;
      'max-video-preview': number;
      'max-image-preview': string;
      'max-snippet': number;
    };
  };
}

export const metadata: CustomMetadata = {
  title: "About Us",
  description: "CAIES Foundation employs ML to assess social resilience to arsenicosis, studies arsenic's impact on cellular redox, and creates a hybrid algorithm for landslide mapping.",
  alternates: {
    canonical: "/about",
    languages: {
      'en-US': '/',
    }
  },
  openGraph: {
    title: "CAIES Fondation - About Us",
    description: "CAIES Foundation employs ML to assess social resilience to arsenicosis, studies arsenic's impact on cellular redox, and creates a hybrid algorithm for landslide mapping.",
    url: 'https://caienvsus.org/about',
    siteName: 'CAIES Fondation',
    images: [
      {
        url: '/assets/img/about.png',
        width: 1080,
        height: 1080,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
};

const About = () => {
  return (
    <>
      <Navigation />
      <AboutSection />
      <Footer />
    </>
  )
}

export default About