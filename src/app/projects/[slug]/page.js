
import { notFound } from "next/navigation";
import { Suspense } from "react";

import Header from "@/components/common/Header";
import InnerPageBanner from "@/components/common/InnerPageBanner";
import InnerPageFooter from "@/components/common/InnerPageFooter";
import ProjectDetail from "@/components/projects/ProjectDetail";

import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | DM Agency",
    };
  }

  const description = (project.description || "")
    .replace(/<[^>]*>/g, "")
    .trim()
    .slice(0, 160);

  return {
    title: `${project.title} | DM Agency`,
    description,
    openGraph: {
      title: `${project.title} | DM Agency`,
      description,
      type: "article",
      ...(project.image && {
        images: [project.image],
      }),
    },
  };
}


async function ProjectContent({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <div className="inner-header-and-banner">
        <Header />

        <InnerPageBanner
          title={project.title}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Projects", href: "/projects" },
            { label: project.title },
          ]}
        />
      </div>

      <ProjectDetail project={project} />

      <InnerPageFooter />
    </main>
  );
}

export default function ProjectSinglePage({ params }) {
  return (
    <Suspense
      fallback={
        <div className="site-container">
          Loading project...
        </div>
      }
    >
      <ProjectContent params={params} />
    </Suspense>
  );
}

