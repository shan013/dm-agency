"use client";

import { useState } from "react";

const faqItems = [
  {
    question: "What services do you offer?",
    answer:
      "We offer SEO, website design and development, content strategy, and digital solutions to help businesses improve their online presence.",
  },
  {
    question: "Do you provide SEO services?",
    answer:
      "Yes, we offer complete SEO services to help your website rank higher on search engine & attract organic traffic.",
  },
  {
    question: "Can I update my website after it's built?",
    answer:
      "Yes. You can update your website content, images, and pages after it is built. We can also help you understand how to manage your website.",
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    answer:
      "Yes, we can help with website updates, technical fixes, performance checks, and ongoing maintenance.",
  },
];

export default function AboutFaq() {
  const [activeIndex, setActiveIndex] = useState(1);

  const toggleFaq = (index) => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="about-page-faq-section">
      <div className="site-container">
        <div className="about-page-faq-grid">

          <div className="about-page-faq-left">
            <div className="about-page-faq-img fade-up">
              <img src="/images/our-faqs-image.jpg" alt="Frequently asked questions" />
            </div>

            <div className="about-page-faq-contacts">
              <div className="about-page-faq-contact-item fade-up">
                <span className="about-page-faq-contact-icon">
                  <i className="fa-solid fa-phone"></i>
                </span>

                <div>
                  <small>Phone Number</small>
                  <strong>123-456-789</strong>
                </div>
              </div>

              <div className="about-page-faq-contact-divider"></div>

              <div className="about-page-faq-contact-item fade-up">
                <span className="about-page-faq-contact-icon">
                  <i className="fa-regular fa-envelope"></i>
                </span>

                <div>
                  <small>Email Address</small>
                  <strong>info@domain.com</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="about-page-faq-right">
            <div className="about-page-faq-eyebrow">
              <span className="about-page-faq-dot"></span>
              FREQUENTLY ASKED QUESTIONS
            </div>

            <h2 className="animate-letters">
              Common Questions About
              <br />
              our Services
            </h2>

            <p className="about-page-faq-sub">
              We are a creative team dedicated to delivering high-quality
              digital solutions that help businesses grow and stand out. With
              a focus on innovation,
            </p>

            <div className="about-page-faq-list">
              {faqItems.map((item, index) => {
                const isActive = activeIndex === index;

                return (
                  <div
                    className={`about-page-faq-item ${
                      isActive ? "active" : ""
                    }`}
                    key={item.question}
                  >
                    <button
                      type="button"
                      className="about-page-faq-question"
                      onClick={() => toggleFaq(index)}
                      aria-expanded={isActive}
                    >
                      <span>
                        {index + 1}. {item.question}
                      </span>

                      <i
                        className={`fa-solid ${
                          isActive ? "fa-minus" : "fa-plus"
                        }`}
                      ></i>
                    </button>

                    <div
                      className={`about-page-faq-answer-wrap ${
                        isActive ? "open" : ""
                      }`}
                    >
                      <div className="about-page-faq-answer-inner">
                        <div className="about-page-faq-answer">
                          {item.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}