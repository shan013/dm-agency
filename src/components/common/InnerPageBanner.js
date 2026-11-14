import Link from "next/link";

export default function InnerPageBanner({
  title,
  breadcrumb,
  breadcrumbs = [],
}) {
  const breadcrumbItems = breadcrumbs.length
    ? breadcrumbs
    : [
        { label: "Home", href: "/" },
        { label: breadcrumb || title },
      ];

  return (
    <section className="about-hero">
      <div className="site-container">
        <div className="hero-inner-sub">
          <h1>{title}</h1>

          <div className="breadcrumb">
            {breadcrumbItems.map((item, index) => (
              <span key={`${item.label}-${index}`}>
                {index > 0 && <span>/</span>}

                {item.href ? (
                  <Link href={item.href}>{item.label}</Link>
                ) : (
                  <span>{item.label}</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}