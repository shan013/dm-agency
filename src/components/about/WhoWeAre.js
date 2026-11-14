
export default function WhoWeAre() {
  return (
    <section className="about-page-who-we-are">
      <div className="site-container">
        <div className="about-page-who-grid">

          {/* Left: Content */}
          <div className="about-page-who-content">

            <div className="about-page-eyebrow">
              <span className="about-page-dot"></span>
              WHO WE ARE
            </div>

            <h2 className="animate-letters">The Creative Minds Behind Digital Growth</h2>

            <p className="about-page-who-muted">
              We are a passionate digital agency that helps businesses grow
              through data-driven strategies, creative thinking, and
              innovative technology.
            </p>

            <div className="about-page-icon-box-row">

              <div className="about-page-icon-box fade-up">
                <i className="fa-regular fa-handshake"></i>
                <span>Global Digital Reach</span>
              </div>

              <div className="about-page-icon-box fade-up">
                <i className="fa-solid fa-arrow-up-right-dots"></i>
                <span>Client-First Mindset</span>
              </div>

            </div>

            <ul className="about-page-check-list">
              <li>
                <i className="fa-solid fa-check"></i>
                Delivering innovative solutions with precision and purpose.
              </li>

              <li>
                <i className="fa-solid fa-check"></i>
                Working alongside you to achieve shared goals.
              </li>
            </ul>

            <a href="#contact" className="about-page-button">
              Get Started
              <span>
                <i className="fa-solid fa-arrow-right-long"></i>
              </span>
            </a>

          </div>

          {/* Right: Image */}
          <div className="about-page-who-image fade-up">
            <img
              src="/images/who-we-image.jpg"
              alt="Our digital agency"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
