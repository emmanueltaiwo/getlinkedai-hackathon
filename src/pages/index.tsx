import Layout from "@/components/Layout";
import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
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
