
export default function AboutApproach() {
  return (
    <section className="about-page-approach-section">
      <div className="about-page-approach-wrap">

        <div className="about-page-approach-heading">
          <div className="about-page-eyebrow about-page-eyebrow-light">
            <span className="about-page-dot"></span>
            OUR APPROACH
          </div>

          <h2 className="animate-letters">Our Proven Growth Approach</h2>

          <p>
            From discovery to execution, we follow a collaborative process that transforms ideas
            <br />
            into powerful digital solutions designed for sustainable growth.
          </p>
        </div>

        <div className="about-page-approach-grid">

          {/* First column */}
          <div className="about-page-approach-column">

            <div className="about-page-approach-image-card fade-up">
              <img
                src="/images/approach-item-image.png"
                alt="Our team working on digital strategies"
              />
            </div>

            <div className="about-page-approach-dark-card about-page-approach-small fade-up">
              <strong>50+ Projects Delivered</strong>
              <p>
                We analyze your business goals, audience behavior, and market
                opportunities to build a strong foundation for success.
              </p>
            </div>

          </div>

          {/* Second column */}
          <div className="about-page-approach-purple-card fade-up">
            <strong>100%</strong>

            <div className="about-page-approach-card-bottom">
              <b>Oriented Execution</b>
              <p>
                Every campaign is with a focus on outcomes.
              </p>
            </div>
          </div>

          {/* Third column */}
          <div className="about-page-approach-dark-card about-page-approach-map-card fade-up">
            <strong>24/7 Optimization</strong>
            <p>
              We monitor performance strategies growth.
            </p>

            <div className="about-page-approach-map-dots"></div>
          </div>

        </div>

        <div className="about-page-approach-free-line">
          Free <span>Let's make something great work together.</span>
          <a href="#contact">Get Free Quote</a>
        </div>

      </div>
    </section>
  );
}
