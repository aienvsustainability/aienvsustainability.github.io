import Footer from '@/components/Footer'
import AwardSection from '@/components/awards/Section'
import React from "react"
import { Metadata } from "next";
import Navigation from '@/components/Navigation';

interface CustomMetadata extends Metadata {
  canonical?: string;
}

export const metadata: CustomMetadata = {
  title: "Awards",
  description: "Explore CAIES Foundation's prestigious awards honoring unsung heroes in education and science from Indian government institutions. Nominate or apply now!",
  canonical: "https://caienvsus.org/awards",
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