
export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="site-container">

        <div className="services-head">
          <div className="eyebrow">OUR SERVICES</div>
          <h2 className="animate-letters">
            Complete SEO Services For<br />
            Lasting Online Growth
          </h2>
        </div>

        <div className="services-grid">

          {/* Card 1 */}
          <div className="s-card">
            <div className="s-icon fade-up">
              <img src="/images/service-icon-1.svg" alt="" />
            </div>

            <div className="s-content">
              <h4>Google Business</h4>
              <p>
                Improve website structure speed, crawlability,
                indexing, and technical performance.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="s-card fade-up">
            <div className="s-icon">
              <img src="/images/service-icon-2.svg" alt="" />
            </div>

            <div className="s-content">
              <h4>Research &amp; Planning</h4>
              <p>
                Optimize titles, headings, content, internal links,
                and page structure for better search visibility.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="s-card fade-up">
            <div className="s-icon">
              <img src="/images/service-icon-3.svg" alt="" />
            </div>

            <div className="s-content">
              <h4>Voice Search Optimisation</h4>
              <p>
                Create search-focused content that answers
                customer questions while supporting rankings.
              </p>
            </div>
          </div>

          {/* Card 4 - Help Card */}
          <div className="s-card help-card fade-up">
            <div className="help-top">
              <p>Need any Help!</p>
              <a href="tel:1232543202">
                <span>📞</span> 123-2543-202
              </a>
            </div>

            <div className="robot-wrap">
              <img src="/images/service-item-image-elite.png" alt="Robot" />
            </div>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="services-bottom">
          <span className="free-badge">Free</span>
          <p>
            Let's make something great work together.{" "}
            <a href="#contact">Get Free Quote</a>
          </p>
        </div>

      </div>
    </section>
  );
}
