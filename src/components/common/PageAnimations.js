
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function PageAnimations({ children }) {
  const pageRef = useRef(null);

  useEffect(() => {
    let ctx;
    let splitInstances = [];

    // Wait briefly before modifying the HTML with SplitText.
    const timer = setTimeout(() => {
      if (!pageRef.current) return;

      ctx = gsap.context(() => {

        // LETTER ANIMATIONS
        const headings = gsap.utils.toArray(
          ".animate-letters",
          pageRef.current
        );

        headings.forEach((heading) => {
          const split = SplitText.create(heading, {
            type: "words, chars",
            wordsClass: "animate-word",
          });

          splitInstances.push(split);

          gsap.fromTo(
            split.chars,
            {
              x: -25,
              rotation: -12,
              opacity: 0,
              transformOrigin: "left bottom",
            },
            {
              x: 0,
              rotation: 0,
              opacity: 1,
              duration: 0.9,
              stagger: 0.025,
              ease: "power3.out",
              scrollTrigger: {
                trigger: heading,
                start: "top 85%",
                once: true,
              },
            }
          );
        });

        // FADE UP ANIMATIONS
        const fadeElements = gsap.utils.toArray(
          ".fade-up",
          pageRef.current
        );

        fadeElements.forEach((element) => {
          gsap.fromTo(
            element,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: element,
                start: "top 88%",
                once: true,
              },
            }
          );
        });

        // FADE DOWN ANIMATIONS
        const fadeDownElements = gsap.utils.toArray(
          ".fade-down",
          pageRef.current
        );

        fadeDownElements.forEach((element) => {
          gsap.fromTo(
            element,
            { y: -40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: element,
                start: "top 88%",
                once: true,
              },
            }
          );
        });

      }, pageRef);

      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timer);

      splitInstances.forEach((split) => split.revert());

      if (ctx) {
        ctx.revert();
      }
    };
  }, []);

  return (
    <div className="page-animation-root" ref={pageRef}>
      {children}
    </div>
  );
}
