
"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const heroRef = useRef(null);

  useGSAP(
  () => {
    const tl = gsap.timeline();

    // 1. Headline lines drop from the top
    tl.fromTo(
      ".hero-content h1 span",
      {
        y: -45,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      }
    );

    // 2. Eyebrow drops from the top
    tl.fromTo(
      ".hero-content .eyebrow",
      {
        y: -30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
      },
      "+=0.1"
    );

    // 3. Description rises from the bottom
    tl.fromTo(
      ".hero-description",
      {
        y: 35,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
      },
      "-=0.1"
    );

    // 4. CTA and phone rise from the bottom
    tl.fromTo(
      ".hero-actions",
      {
        y: 35,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
      },
      "-=0.2"
    );
  },
  { scope: heroRef }
);

  return (
    <section className="hero" id="home" ref={heroRef}>
      <div className="site-container hero-inner">

        {/* Left side: Text content */}
        <div className="hero-content">

          <div className="eyebrow">
            TRUSTED SEO SOLUTIONS
          </div>

          <h1>
            <span>Creating Measurable</span>
            <span>Impact Through</span>
            <span>Smarter SEO</span>
          </h1>

          <p className="hero-description">
            AI-powered SEO strategies designed to improve
            qualified traffic, strengthen online authority.
          </p>

          <div className="hero-actions">

            <a href="#contact" className="btn-primary">
              <span>Talk to an SEO Expert</span>
              <span className="btn-arrow">→</span>
            </a>

            <div className="hero-phone">
              <div className="phone-icon">☎</div>

              <div className="phone-details">
                <small>Need help!</small>
                <strong>+123 456 789</strong>
              </div>
            </div>

          </div>
        </div>

        {/* Right side: Image and decorations */}
        <div className="hero-visual">

          <div className="graphic-label">
            Graphic Design
          </div>

          <figure className="hero-image">
            <img
              src="/images/woman.png"
              alt="Digital marketing professional"
            />
          </figure>

          <div className="circle-badge">
            <svg viewBox="0 0 100 100" className="circle-text">
              <defs>
                <path
                  id="circlePath"
                  d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                />
              </defs>

              <text>
                <textPath href="#circlePath">
                  EXPLORE MORE * EXPLORE MORE *
                </textPath>
              </text>
            </svg>

            <div className="circle-inner">↓</div>
          </div>

        </div>
      </div>
    </section>
  );
}
