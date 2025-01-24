import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation';
// import TeamPageHeader from '@/components/team/TeamPageHeader'
import TeamSection from '@/components/team/Section'
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
  title: "Team",
  description: "Discover CAIES Foundation's pioneering team leveraging ML to assess arsenicosis resilience, study cellular redox, and innovate in landslide mapping.",
  alternates: {
    canonical: "/team",
    languages: {
      'en-US': '/',
    }
  },
  openGraph: {
    title: "CAIES Fondation - Team",
    description: "Discover CAIES Foundation's pioneering team leveraging ML to assess arsenicosis resilience, study cellular redox, and innovate in landslide mapping.",
    url: 'https://caienvsus.org/team',
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

const Team = () => {
  return (
    <>
      <Navigation />
      <TeamSection />
      <Footer />
    </>
  )
}

export default Team