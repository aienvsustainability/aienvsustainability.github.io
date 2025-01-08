import Footer from '@/components/Footer'
import AwardSection from '@/components/awards/Section'
import React from "react"
import { Metadata } from "next";
import Navigation from '@/components/Navigation';

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
  title: "Awards",
  description: "Explore CAIES Foundation's prestigious awards honoring unsung heroes in education and science from Indian government institutions. Nominate or apply now!",
  alternates: {
    canonical: "/awards",
    languages: {
      'en-US': '/',
    }
  },
  openGraph: {
    title: "CAIES Fondation - Awards",
    description: "Explore CAIES Foundation's prestigious awards honoring unsung heroes in education and science from Indian government institutions. Nominate or apply now!",
    url: 'https://caienvsus.org/awards',
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


const Awards = () => {
    return (
        <>
            <Navigation />
            <AwardSection />
            <Footer />
        </>
    )
}

export default Awards