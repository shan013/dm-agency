
export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="site-container">
        <div className="about-grid">

          {/* LEFT CONTENT */}
          <div className="about-left">
            <div className="eyebrow">ABOUT US</div>

            <h2 className="about-title animate-letters">
              Helping Businesses Transform Search Visibility Into
              Meaningful Traffic, Leads, And Sustainable Digital Growth
            </h2>

            <div className="about-features">

              <div className="feature fade-up">
                <div className="feature-head">
                  <div className="icon-box">
                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                      <rect
                        x="2" y="6" width="32" height="22" rx="3"
                        stroke="#0f172a" strokeWidth="1.2"
                      />
                      <circle
                        cx="20" cy="26" r="8"
                        stroke="#7c4dff" strokeWidth="1.5"
                      />
                      <path
                        d="M26 32L32 38"
                        stroke="#7c4dff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  <h4>Making SEO Simple</h4>
                </div>

                <p>
                  We simplify complex search engine optimization through.
                </p>
              </div>

              <div className="feature fade-up">
                <div className="feature-head">
                  <div className="icon-box">
                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                      <path
                        d="M12 6H32V20H12z"
                        stroke="#0f172a"
                        strokeWidth="1.2"
                      />
                      <path
                        d="M8 28L12 20H32L36 28L22 34L8 28Z"
                        stroke="#0f172a"
                        strokeWidth="1.2"
                      />
                    </svg>
                  </div>

                  <h4>A Future Where Every Brand</h4>
                </div>

                <p>
                  Our vision is to help businesses build stronger digital identities.
                </p>
              </div>

            </div>

            <button className="about-btn">
              More About Us <span>→</span>
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="about-right">
            <div className="about-img-wrap">
              <img src="/images/about-image-elite.jpg" alt="About SEO" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
