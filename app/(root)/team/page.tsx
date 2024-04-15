import Footer from '@/components/Footer'
import HeaderBar from '@/components/HeaderBar'
import TeamPageHeader from '@/components/team/TeamPageHeader'
import TeamSection from '@/components/team/TeamSection'
import React from "react"
import { Metadata } from "next";

interface CustomMetadata extends Metadata {
  canonical?: string;
}

export const metadata: CustomMetadata = {
  title: "Team",
  description: "Discover CAIES Foundation's pioneering team leveraging ML to assess arsenicosis resilience, study cellular redox, and innovate in landslide mapping.",
  canonical: "https://caienvsus.org/team",
};

const Team = () => {
  return (
    <>
    <HeaderBar />
    <TeamPageHeader />
    <TeamSection />
    <Footer />
    </>
  )
}

export default Team