import Link
 from "next/link";
export default function InnerPageFooter() {
  return (
    <footer className="inner-footer-section">
      <div className="site-container">

        {/* TOP NEWSLETTER ROW */}
        <div className="inner-footer-top">
          <div className="inner-footer-logo">
            <span className="inner-footer-logo-icon">
              <i className="fa-solid fa-bullseye"></i>
            </span>
            <strong>DM Agency<span>.</span></strong>
          </div>

          <div className="inner-footer-newsletter">
            <div className="inner-footer-nl-text">
              <h3>Subscribe Newsletter</h3>
              <p>
                Subscribe to our newsletter to get the latest updates, news,
                and special offers directly in your inbox.
              </p>
            </div>

            <form
              className="inner-footer-nl-form"
            >
              <input
                type="email"
                placeholder="Email Address"
                aria-label="Email Address"
                required
              />
              <button type="submit" aria-label="Subscribe">
                <i className="fa-regular fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>

        <div className="inner-footer-divider"></div>

        {/* MIDDLE LINKS */}
        <div className="inner-footer-grid">

          <div className="inner-footer-col about">
            <h4>About Company</h4>
            <p>
              We are dedicated to delivering innovative digital solutions
              that help businesses grow, build strong brands,
            </p>

            <div className="inner-footer-social">
              <a href="#"><i className="fa-brands fa-pinterest-p"></i></a>
              <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
              <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
            </div>
          </div>

          <div className="inner-footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="inner-footer-col">
            <h4>Our Services</h4>
            <ul>
              <li>
                <Link href="/services/google-business-profile">
                  Business Profile Optimization
                </Link>
              </li>
              <li>
                <Link href="/services/keyword-research">
                  Advanced Keyword Research
                </Link>
              </li>
              <li>
                <Link href="/services/voice-search">
                  Voice Search Optimisation
                </Link>
              </li>
              <li>
                <Link href="/services/ranking-improvement">
                  Search Engine Improvement
                </Link>
              </li>
              <li>
                <Link href="/services/performance-tracking">
                  Performance Tracking
                </Link>
              </li>
              <li>
                <Link href="/services/on-page-seo">
                  On-Page SEO Optimization
                </Link>
              </li>
            </ul>
          </div>

          <div className="inner-footer-col contact">
            <h4>Contact Information</h4>

            <div className="inner-footer-contact-item">
              <small>
                <i className="fa-solid fa-phone"></i>
                Phone Number
              </small>
              <strong>123-456-789</strong>
            </div>

            <div className="inner-footer-contact-line"></div>

            <div className="inner-footer-contact-item">
              <small>
                <i className="fa-regular fa-envelope"></i>
                Email Address
              </small>
              <strong><a href="mailto:support@domainname.com">support@domainname.com</a></strong>
            </div>
          </div>

        </div>

        <div className="inner-footer-divider"></div>

        <div className="inner-footer-copyright">
          Copyright © 2026 Seoai. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}
