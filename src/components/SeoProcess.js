
"use client";

import { useState } from "react";

const tabs = [
  {
    name: "Discover",
    items: ["SEO Audit & Analysis", "Optimize & Implement"],
  },
  {
    name: "Strategize",
    items: ["Optimize & Implement", "SEO Audit & Analysis"],
  },
  {
    name: "Grow",
    items: ["SEO Audit & Analysis", "Optimize & Implement"],
  },
];

const description =
  "We begin by understanding your business, goals, target audience, industry, competitors, and current online presence. Our team analyzes your existing SEO performance to uncover valuable opportunities.";

export default function SeoProcess() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="seo-process-section">
      <div className="site-container">
        <div className="seo-process-grid">

          <div className="process-img-wrap">
            <img src="/images/our-process-image-1-elite.jpg" alt="SEO Growth" />
          </div>

          <div className="process-content fade-up">
            <div className="eyebrow">OUR SEO PROCESS</div>

            <h2>
              Our Proven Process For
              <br />
              Smarter SEO Growth
            </h2>

            <div className="process-tabs" role="tablist">
              {tabs.map((tab, index) => (
                <button
                  key={tab.name}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === index}
                  className={`tab-btn ${activeTab === index ? "active" : ""}`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab.name}
                </button>
              ))}

              <div
                className={`tab-indicator tab-${activeTab + 1}`}
              ></div>
            </div>

            <div className="tab-pane" role="tabpanel">
              <p className="tab-desc">{description}</p>

              <div className="growth-box">
                <div className="growth-box-left">
                  <i className="fa-regular fa-chart-bar"></i>

                  <h4>
                    SEO Growth
                    <br />
                    Process
                  </h4>
                </div>

                <div className="growth-box-right">
                  <p>
                    Our proven SEO growth process combines strategic planning
                  </p>

                  <ul>
                    {tabs[activeTab].items.map((item) => (
                      <li key={item}>
                        <i className="fa-solid fa-circle-check"></i>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <a href="#" className="demo-btn">
              Book Free Demo
              <span>
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
