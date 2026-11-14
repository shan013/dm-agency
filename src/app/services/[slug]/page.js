
import { Suspense } from "react";
import { notFound } from "next/navigation";

import Header from "@/components/common/Header";
import InnerPageBanner from "@/components/common/InnerPageBanner";
import InnerPageFooter from "@/components/common/InnerPageFooter";
import ServiceDetailLayout from "@/components/services/ServiceDetailLayout";

import { services } from "@/data/services";

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found | DM Agency",
    };
  }

  const description = service.introduction?.[0] || "";

  return {
    title: `${service.title} | DM Agency`,
    description: description.replace(/<[^>]*>/g, "").slice(0, 160),
  };
}

function ServiceContent({ slug }) {
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <div className="inner-header-and-banner">
        <Header />

        <InnerPageBanner
          title={service.title}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: service.title },
          ]}
        />
      </div>

      <ServiceDetailLayout
        service={service}
        currentSlug={slug}
        services={services}
      />
    </>
  );
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;

  return (
    <main>
      <Suspense fallback={<div className="site-container">Loading...</div>}>
        <ServiceContent slug={slug} />
      </Suspense>

      <InnerPageFooter />
    </main>
  );
}
