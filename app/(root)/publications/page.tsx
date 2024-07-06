import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation';
import PublicationSection from '@/components/publication/Section'
import React from "react"
import { Metadata } from "next";

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
  title: "Publications",
  description: "From curious minds to groundbreaking discoveries—your gateway to scholarly excellence",
  alternates: {
    canonical: "/publications",
    languages: {
      'en-US': '/',
    }
  },
  openGraph: {
    title: "CAIES Fondation - Publications",
    description: "From curious minds to groundbreaking discoveries—your gateway to scholarly excellence",
    url: 'https://caienvsus.org/publications',
    siteName: 'CAIES Fondation',
    images: [
      {
        url: '/assets/img/post-6.png',
        width: 1920,
        height: 1080,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots:{
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