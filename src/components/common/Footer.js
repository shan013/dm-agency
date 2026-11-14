import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-bg"></div>

      <div className="site-container">
        <div className="footer-top">

          {/* Brand */}
          <div className="footer-col brand">
            <div className="footer-logo">
              <span className="logo-icon">
                <i className="fa-solid fa-bullseye"></i>
              </span>
              DM Agency<span className="logo-dot">.</span>
            </div>

            <p>
              Drive sustainable online growth with AI-powered SEO strategies,
              data-driven insights, and expert.
            </p>

            <div className="socials">
              <a href="#" aria-label="Facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Dribbble">
                <i className="fa-brands fa-dribbble"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>

            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="footer-col">
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

          {/* Contact Info */}
          <div className="footer-col contact">
            <h4>Contact Info</h4>

            <div className="contact-item">
              <span className="c-icon">
                <i className="fa-solid fa-headset"></i>
              </span>

              <div>
                <strong>Need Any Help?</strong>
                <p>+(123) 456 - 789</p>
              </div>
            </div>

            <div className="contact-item">
              <span className="c-icon">
                <i className="fa-solid fa-location-dot"></i>
              </span>

              <div>
                <strong>Our Location</strong>
                <p>123 Roofing Street, Country</p>
              </div>
            </div>
          </div>

        </div>

        <div className="footer-middle">
          <span className="wh-icon">
            <i className="fa-regular fa-clock"></i>
          </span>

          Working Hours: Monday-Saturday, 9:00 AM - 5:00 PM
        </div>

        <div className="footer-bottom">
          Copyright © 2026 DMAgency. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
