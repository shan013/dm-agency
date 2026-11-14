"use client";

import { useEffect, useState } from "react";

const testimonials = [
  {
    image: "/images/testimonial-image-2.jpg",
    name: "Emma Roberts",
    role: "Senior SEO Strategist",
    stars: 5,
    quote:
      "Working with this team was an amazing experience. They understood our vision perfectly",
  },
  {
    image: "/images/testimonial-image-3.jpg",
    name: "Arlene McCoy",
    role: "Senior SEO Strategist",
    stars: 5,
    quote:
      "Working with this team was an amazing experience. They understood our vision perfectly",
  },
  {
    image: "/images/testimonial-image-4.jpg",
    name: "Sophia Bennett",
    role: "Senior SEO Strategist",
    stars: 3,
    quote:
      "Working with this team was an amazing experience. They understood our vision perfectly",
  },
  {
    image: "/images/testimonial-image-1.jpg",
    name: "Alex Carter",
    role: "Senior SEO Strategist",
    stars: 3,
    quote:
      "Working with this team was an amazing experience. They understood our vision perfectly",
  },
];

export default function AboutSuccess() {
  const [items, setItems] = useState(testimonials);
  const [isAnimating, setIsAnimating] = useState(false);

  // Automatically start the next slide.
  useEffect(() => {
    if (isAnimating) return;

    const timer = setTimeout(() => {
      setIsAnimating(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, [isAnimating]);

  // After the slide finishes, move the first item to the end.
  const handleTransitionEnd = (e) => {
    if (
      e.target !== e.currentTarget ||
      e.propertyName !== "transform" ||
      !isAnimating
    ) {
      return;
    }

    setItems((current) => [
      ...current.slice(1),
      current[0],
    ]);

    setIsAnimating(false);
  };

  return (
    <section className="about-page-success-section">
      <div className="site-container">
        <div className="about-page-success-wrap">

          <div className="about-page-success-head">
            <div className="about-page-success-head-left">
              <div className="about-page-success-eyebrow light">
                <span className="about-page-success-dot"></span>
                CLIENT TESTIMONIALS
              </div>

              <h2 className="animate-letters">
                Real Success Stories from
                <br />
                Happy Clients
              </h2>
            </div>

            <div className="about-page-success-head-right">
              <p>
                Discover how our SEO strategies have helped improve search
                rankings, increase organic traffic.
              </p>

              <a href="#" className="about-page-success-pill-btn">
                View All Review
                <span>
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </a>
            </div>
          </div>

          <div className="about-page-success-slider fade-up">
            <div
              className={`about-page-success-track ${
                isAnimating ? "is-sliding" : ""
              }`}
              onTransitionEnd={handleTransitionEnd}
            >
              {[...items, items[0]].map((item, index) => (
                <div
                  className="about-page-success-card"
                  key={`${item.name}-${index}`}
                >
                  <img src={item.image} alt={item.name} />

                  <div className="about-page-success-overlay">
                    <div className="about-page-success-stars">
                      {Array.from({ length: item.stars }).map((_, i) => (
                        <i className="fa-solid fa-star" key={i}></i>
                      ))}
                    </div>

                    <p>"{item.quote}</p>

                    <div className="about-page-success-author">
                      <strong>{item.name}</strong>
                      <span>{item.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}