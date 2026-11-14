
"use client";

import { useState } from "react";

export default function WorkProcess() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  //Replace Video ID here in Future
  const youtubeVideoId = "N3-zrhoBx6w";

  return (
    <>
      <section className="work-process-section">
        <div className="site-container">
          <div className="wp-banner">
            <div className="wp-content">
              <div className="eyebrow light">OUR WORK PROCESS</div>

              <h2 className="fade-down">
                Our Strategic SEO Process Combines Data, Expertise, And Continuous Optimization To Deliver Growth
              </h2>
            </div>

            <button
              type="button"
              className="watch-video"
              aria-label="Watch video"
              onClick={() => setIsVideoOpen(true)}
            >
              <svg className="circle-text" viewBox="0 0 100 100">
                <defs>
                  <path
                    id="circle"
                    d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  />
                </defs>

                <text fontSize="8.5" letterSpacing="1.2">
                  <textPath href="#circle">
                    * Watch Video * Watch Video * Watch Video *
                  </textPath>
                </text>
              </svg>

              <div className="play-btn">
                <i className="fa-solid fa-play"></i>
              </div>
            </button>
          </div>
        </div>
      </section>

      {isVideoOpen && (
        <div
          className="video-modal"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="video-modal-close"
              aria-label="Close video"
              onClick={() => setIsVideoOpen(false)}
            >
              &times;
            </button>

            <div className="video-frame">
              <iframe
                src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0`}
                title="Our Work Process"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
