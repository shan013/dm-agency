import { Suspense } from "react";

import Header from "@/components/common/Header";
import InnerPageBanner from "@/components/common/InnerPageBanner";
import InnerPageFooter from "@/components/common/InnerPageFooter";
import PageAnimations from "@/components/common/PageAnimations";

import ServicesGrid from "@/components/services/ServicesGrid";
import WhoWeAre from "@/components/about/WhoWeAre";
import VideoBlock from "@/components/about/VideoBlock";
import AboutWorkProcess from "@/components/about/AboutWorkProcess";
import AboutImpact from "@/components/about/AboutImpact";
import AboutSuccess from "@/components/about/AboutSuccess";
import AboutFaq from "@/components/about/AboutFaq";

export const metadata = {
  title: "Our Services | DM Agency",
  description:
    "Explore DM Agency's SEO services, including Google Business Profile optimization, keyword research and strategies to improve your online visibility.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageAnimations>
        <div className="inner-header-and-banner">
          <Header />
          <InnerPageBanner title="Services" breadcrumb="Services" />
        </div>

        <Suspense fallback={null}>
          <ServicesGrid />
        </Suspense>
        <VideoBlock />
        <WhoWeAre />
        <AboutWorkProcess />
        <AboutImpact />
        <AboutSuccess />
        <AboutFaq />
      </PageAnimations>

      <InnerPageFooter />
    </main>
  );
}
