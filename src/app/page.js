
import { Suspense } from "react";

import Header from "@/components/common/Header";
import PageAnimations from "@/components/common/PageAnimations";

import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import About from "@/components/About";
import Services from "@/components/Services";
import Impact from "@/components/Impact";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import WorkProcess from "@/components/WorkProcess";
import SeoProcess from "@/components/SeoProcess";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";

import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <main>
      <PageAnimations>
        <div className="header-and-banner">
          <Header />
          <Hero />
          <Brands />
        </div>

        <About />
        <Services />
        <Impact />
        <Suspense fallback={null}>
  <Projects />
</Suspense>
        <Suspense fallback={null}>
  <Team />
</Suspense>
        <WorkProcess />
        <SeoProcess />
        <Testimonials />
        <Suspense fallback={null}>
  <Blog />
</Suspense>
      </PageAnimations>

      <Footer />
    </main>
  );
}
