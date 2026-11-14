
"use client";

import { useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "From ideation to deployment, they worked like partners-not just vendors. Their AI solution saved us hundreds of hours.",
    name: "- Sarah L",
    role: "COO, TechNova Inc.",
    image: "/images/author-1.jpg",
  },
  {
    quote:
      "From ideation to deployment, they worked like partners-not just vendors. Their AI solution saved us hundreds of hours.",
    name: "- Priya M",
    role: "CTO, MarketSync",
    image: "/images/author-3.jpg",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const [animate, setAnimate] = useState(false);

  const previousIndex =
    (activeIndex - 1 + testimonials.length) % testimonials.length;

  const nextIndex = (activeIndex + 1) % testimonials.length;

  const visibleTestimonials =
    direction === "next"
      ? [
          testimonials[activeIndex],
          testimonials[nextIndex],
          testimonials[activeIndex],
        ]
      : direction === "prev"
        ? [
            testimonials[previousIndex],
            testimonials[activeIndex],
            testimonials[nextIndex],
          ]
        : [
            testimonials[activeIndex],
            testimonials[nextIndex],
            testimonials[activeIndex],
          ];

  useEffect(() => {
    if (!direction) return;

    // Start the previous slide from the middle position.
    setAnimate(false);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setAnimate(true);
      });
    });
  }, [direction]);

  const showNext = () => {
    if (direction) return;
    setDirection("next");
  };

  const showPrevious = () => {
    if (direction) return;
    setDirection("prev");
  };

  const handleTransitionEnd = (event) => {
    if (
      event.target !== event.currentTarget ||
      event.propertyName !== "transform" ||
      !direction
    ) {
      return;
    }

    if (direction === "next") {
      setActiveIndex(nextIndex);
    } else {
      setActiveIndex(previousIndex);
    }

    setAnimate(false);
    setDirection(null);
  };

  const trackPosition =
    direction === "prev" && !animate
      ? "translateX(calc(-33.333333% - 7.333px))"
      : direction === "next" && animate
        ? "translateX(calc(-33.333333% - 7.333px))"
        : "translateX(0)";

  return (
    <section className="testimonials-section">
      <div className="site-container">
        <div className="testimonials-grid">

          <div className="testimonials-left">
            <div className="eyebrow">
              <span className="dot"></span>
              TESTIMONIALS
            </div>

            <h2 className="animate-letters">
              Clients Share
              <br />
              Their Experience
              <br />
              With Our AI
            </h2>

            <div className="clients-stack">
              <div className="stack-avatars">
                <img src="/images/author-1.jpg" alt="" />
                <img src="/images/author-2.jpg" alt="" />
                <img src="/images/author-3.jpg" alt="" />
              </div>

              <div className="stack-text">
                <span>5.5k+</span> Satisfice Client
                <br />
                in the world
              </div>
            </div>
          </div>

          <div className="testimonials-right">
            <div className="t-cards">
              <div
                className="t-track"
                style={{
                  transform: trackPosition,
                  transition: animate
                    ? "transform 0.55s ease-in-out"
                    : "none",
                }}
                onTransitionEnd={handleTransitionEnd}
              >
                {visibleTestimonials.map((testimonial, index) => (
                  <div
                    className="t-card"
                    key={`${testimonial.name}-${index}`}
                  >
                    <div className="t-stars">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <i
                          className="fa-solid fa-star"
                          key={starIndex}
                        ></i>
                      ))}
                    </div>

                    <p className="t-quote">“{testimonial.quote}”</p>

                    <div className="t-footer">
                      <img src={testimonial.image} alt="" />
                      <div>
                        <strong>{testimonial.name}</strong>
                        <small>{testimonial.role}</small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="t-arrows">
              <button
                type="button"
                className="t-arrow"
                onClick={showPrevious}
                disabled={direction !== null}
                aria-label="Previous testimonials"
              >
                <i className="fa-solid fa-arrow-left-long"></i>
              </button>

              <button
                type="button"
                className="t-arrow"
                onClick={showNext}
                disabled={direction !== null}
                aria-label="Next testimonials"
              >
                <i className="fa-solid fa-arrow-right-long"></i>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
