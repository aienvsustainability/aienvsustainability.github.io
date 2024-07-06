import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation';
import ContactSection from '@/components/contact/Section'
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
  title: "Contact",
  description: "Connect with CAIES Foundation to collaborate, inquire, or support our mission. Reach out through our contact page for partnerships, inquiries, or donations.",
  alternates: {
    canonical: "/contact",
    languages: {
      'en-US': '/',
    }
  },
  openGraph: {
    title: "CAIES Fondation - Contact",
    description: "Connect with CAIES Foundation to collaborate, inquire, or support our mission. Reach out through our contact page for partnerships, inquiries, or donations.",
    url: 'https://caienvsus.org/contact',
    siteName: 'CAIES Fondation',
    images: [
      {
        url: '/assets/img/page-header-bg.jpg',
        width: 1920,
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