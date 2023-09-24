import Layout from "@/components/Layout";
import React from "react";
import Head from "next/head"
import PrivacyPolicy from "@/components/PrivacyPolicy";
import PartnersAndSponsors from "@/components/PartnersAndSponsors";
import PrizesAndRewards from "@/components/PrizesAndRewards";
import Faq from "@/components/Faq";
import JudgingCriteria from "@/components/JudgingCriteria";
import RulesAndGuidelines from "@/components/RulesAndGuidelines";
import Introduction from "@/components/Introduction";
import Timeline from "@/components/Timeline";
import HomePageBackgroundGraphics from "@/components/HomePageBackgroundGraphics";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="w-full">
      <Head>
        <title>getLinkedai Hackathon - Emmanuel Build</title>
      </Head>
      <Layout>
        <HomePageBackgroundGraphics />

        <HeroSection />
        <Introduction />
        <RulesAndGuidelines />
        <JudgingCriteria />
        <Faq />
        <Timeline />
        <PrizesAndRewards />
        <PartnersAndSponsors />
        <PrivacyPolicy />
      </Layout>
    </main>
  );
}
