import Footer from '@/components/Footer'
import HeaderBar from '@/components/HeaderBar'
import AwardSection from '@/components/awards/AwardSection'
import AwardsPageHeader from '@/components/awards/AwardsPageHeader'
import React from "react"
import { Metadata } from "next";

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
            <HeaderBar />
            <AwardsPageHeader />
            <AwardSection />
            <Footer />
        </>
    )
}

export default Awards