import Link from "next/link";

export default function ServiceDetailLayout({ service, currentSlug, services }) {
  return (
    <section className="service-detail-page">
      <div className="site-container">
        <div className="service-detail-layout">

          {/* LEFT SIDEBAR */}
          <aside className="service-detail-sidebar">

            <div className="service-detail-menu">
              <div className="service-detail-menu-head">
                Discover Our Services
              </div>

              <ul>
                {services.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/services/${item.slug}`}
                      className={currentSlug === item.slug ? "active" : ""}
                    >
                      {item.title}
                      <span>→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="service-detail-cta">
              <div className="service-detail-cta-icon">
                <img src="/images/cta-icon.svg" alt="" />
              </div>

              <h4>Let's Build Something Great Together</h4>

              <p>
                Connect with our team and discuss your next digital project.
              </p>

              <Link href="/contact" className="service-detail-cta-btn">
                Contact US <span>→</span>
              </Link>
            </div>

          </aside>

          {/* RIGHT CONTENT */}
          <main className="service-detail-main">

            <div className="service-detail-hero-img">
              {service.image && (
  <img src={service.image} alt={service.title} />
)}
            </div>

            <div className="service-detail-text">
              {service.introduction.map((paragraph, index) => (
                <div
                  key={index}
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
            </div>

            {/* KEY BENEFITS */}
            <div className="service-detail-block">
              <h2>{service.benefits.title}</h2>
              <div
                className="service-detail-desc"
                dangerouslySetInnerHTML={{ __html: service.benefits.description }}
              />

              <div className="service-detail-benefits-grid">
                {service.benefits.items.map((item, index) => (
                  <div className="service-detail-benefit-card" key={index}>
                    {item.icon && <img src={item.icon} alt="" />}

                    <div>
                      <strong>{item.title}</strong>
                      <div dangerouslySetInnerHTML={{ __html: item.description }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* WHAT WE OPTIMISE */}
            <div className="service-detail-block">
              <h2>{service.optimisation.title}</h2>

              <div
                className="service-detail-desc"
                dangerouslySetInnerHTML={{ __html: service.benefits.description }}
              />

              <ul className="service-detail-check-grid">
                {service.optimisation.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>

              <div className="service-detail-two-img">
                {service.optimisation.images.map((image, index) => (
                  <img src={image} alt="" key={index} />
                ))}
              </div>
            </div>

            {/* PROCESS */}
            <div className="service-detail-block">
              <h2>{service.process.title}</h2>

              <div
  className="service-detail-desc"
  dangerouslySetInnerHTML={{ __html: service.optimisation.description }}
/>

              <div className="service-detail-process-grid">
                {service.process.items.map((item, index) => (
                  <div className="service-detail-process-item" key={index}>
                    {item.icon && <img src={item.icon} alt="" />}
                    <strong>{item.title}</strong>
                    <div dangerouslySetInnerHTML={{ __html: item.description }} />
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="service-detail-block">
              <h2>Frequently Asked Questions</h2>

              <div className="service-detail-faq">
                {service.faqs.map((item, index) => (
                  <details
                    className="service-detail-faq-item"
                    key={index}
                    open={index === 0}
                  >
                    <summary>
                      {index + 1}. {item.question}
                      <span>+</span>
                    </summary>

                    <div
  className="service-detail-faq-body"
  dangerouslySetInnerHTML={{ __html: item.answer }}
/>
                  </details>
                ))}
              </div>
            </div>

          </main>
        </div>
      </div>
    </section>
  );
}