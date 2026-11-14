
import Link from "next/link";
import { services } from "@/data/services";

function getServiceIcon(slug) {
  if (slug.includes("google-business-profile")) {
    return "/images/icon-1.svg";
  }

  if (slug.includes("keyword-research")) {
    return "/images/icon-2.svg";
  }

  if (slug.includes("voice-search")) {
    return "/images/icon-3-6.svg";
  }

  if (slug.includes("on-page-seo")) {
    return "/images/icon-4.svg";
  }

  if (slug.includes("performance-tracking")) {
    return "/images/icon-5.svg";
  }

  if (slug.includes("ranking-improvement")) {
    return "/images/icon-3-6.svg";
  }

  return "/images/icon-1.svg";
}

export default function ServicesGrid() {
  return (
    <section className="services-page-grid-section">
      <div className="site-container">
        <div className="services-page-grid">
          {services.map((service) => (
            <div
              className="services-page-card fade-up"
              key={service.slug}
            >
              <div className="services-page-icon">
                <img src={getServiceIcon(service.slug)} alt="" />
              </div>

              <h3>{service.title}</h3>

              <div className="services-page-divider"></div>

              <Link
                href={`/services/${service.slug}`}
                className="services-page-read"
              >
                Read More
                <span>
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
