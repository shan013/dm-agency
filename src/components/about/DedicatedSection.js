import Counter from "@/components/Counter";

export default function DedicatedSection() {
  return (
    <section className="about-page-dedicated">
      <div className="site-container">
        <div className="about-page-dedicated-grid">

          <div className="about-page-image-wrap fade-up">
            <img
              src="/images/about-us-image.jpg"
              alt="About our agency"
            />

            <div className="about-page-revenue-card fade-up">
              <div className="about-page-revenue-top">
                <strong>43.179</strong>
                <span>
                  <i className="fa-solid fa-arrow-trend-up"></i>
                </span>
                <span>Customer Revenue</span>
              </div>

              <div className="about-page-avatars">
                <img src="https://i.pravatar.cc/100?img=1" alt="" />
                <img src="https://i.pravatar.cc/100?img=2" alt="" />
                <img src="https://i.pravatar.cc/100?img=3" alt="" />
              </div>

              <div className="about-page-revenue-bottom">
                <div>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <b>4.9/5</b>
                <span>Trusted By 58,900+ Users</span>
              </div>
            </div>
          </div>

          <div className="about-page-dedicated-content">
            <div className="about-page-eyebrow">
              <span className="about-page-dot"></span>
              ABOUT US
            </div>

            <h2 className="animate-letters">Dedicated to Growing Your Digital Presence</h2>

            <p className="about-page-muted">
              We help businesses strengthen their online visibility through
              data-driven SEO strategies, quality content, and technical
              optimization.
            </p>

            <div className="about-page-stats">
              <div className="about-page-stat">
                <strong>
                  <Counter value={25} suffix="+" />
                </strong>
                <span>Projects Successfully Completed</span>
              </div>

              <ul className="about-page-list">
                <li>
                  <i className="fa-solid fa-check"></i>
                  On-Page SEO Optimization
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  Technical SEO Optimization
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  Internal Linking Strategy
                </li>
              </ul>
            </div>

            <div className="about-page-stats about-page-stats-second">
              <div className="about-page-stat">
                <strong>
                  <Counter value={98} suffix="%" />
                </strong>
                <span>Client Satisfaction Rate</span>
              </div>
              <div>
                <a href="#contact" className="about-page-button">
                  Contact Us Now
                  <span>
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </span>
                </a>
              </div>
            </div>

            
          </div>

        </div>
      </div>
    </section>
  );
}
