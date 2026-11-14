
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    const ctx = gsap.context(() => {

      // 1. Heading animation
      const headings = gsap.utils.toArray(".animate-letters");

      headings.forEach((heading) => {
        gsap.fromTo(
          heading,
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: heading,
              start: "top 85%",
              once: true,
            },
          }
        );
      });

      // 2. Fade-up animation
      const fadeElements = gsap.utils.toArray(".fade-up");

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

      // 3. Fade-down animation
      const fadeDownElements = gsap.utils.toArray(".fade-down");

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

    });

    ScrollTrigger.refresh();

    return () => {
      ctx.revert();
    };

  }, [pathname]);

  return null;
}
