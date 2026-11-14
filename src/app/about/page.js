
import Header from "@/components/common/Header";
import InnerPageBanner from "@/components/common/InnerPageBanner";
import InnerPageFooter from "@/components/common/InnerPageFooter";
import PageAnimations from "@/components/common/PageAnimations";

import DedicatedSection from "@/components/about/DedicatedSection";
import AboutApproach from "@/components/about/AboutApproach";
import WhoWeAre from "@/components/about/WhoWeAre";
import VideoBlock from "@/components/about/VideoBlock";
import AboutTeam from "@/components/about/AboutTeam";
import AboutWorkProcess from "@/components/about/AboutWorkProcess";
import AboutImpact from "@/components/about/AboutImpact";
import AboutSuccess from "@/components/about/AboutSuccess";
import AboutFaq from "@/components/about/AboutFaq";

export const metadata = {
  title: "About Us",
  description:
    "Learn about DM Agency, our team, our approach and how we help businesses grow through digital marketing and SEO.",
};

export default function AboutPage() {
  return (
    <main>
      <PageAnimations>
        <div className="inner-header-and-banner">
          <Header />
          <InnerPageBanner title="About Us" breadcrumb="About Us" />
        </div>

        <DedicatedSection />
        <AboutApproach />
        <WhoWeAre />
        <VideoBlock />
        <AboutTeam />
        <AboutWorkProcess />
        <AboutImpact />
        <AboutSuccess />
        <AboutFaq />
      </PageAnimations>

      <InnerPageFooter />
    </main>
  );
}
