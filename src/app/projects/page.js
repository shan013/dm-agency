
import Header from "@/components/common/Header";
import InnerPageBanner from "@/components/common/InnerPageBanner";
import InnerPageFooter from "@/components/common/InnerPageFooter";
import PageAnimations from "@/components/common/PageAnimations";
import ProjectGrid from "@/components/projects/ProjectGrid";

export const metadata = {
  title: "Our Projects | DM Agency",
  description:
    "Explore DM Agency's portfolio of website design, development and digital marketing projects. See how we help businesses build their online presence.",
};

export default function ProjectsPage() {
  return (
    <main>
      <PageAnimations>
        <div className="inner-header-and-banner">
          <Header />
          <InnerPageBanner
            title="Our Projects"
            breadcrumb="Projects"
          />
        </div>

        <ProjectGrid />
      </PageAnimations>

      <InnerPageFooter />
    </main>
  );
}
