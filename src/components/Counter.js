
"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Counter({
  value,
  prefix = "",
  suffix = "",
  duration = 2,
  decimals = 0,
}) {
  const counterRef = useRef(null);
  const numberRef = useRef(null);

  useGSAP(
    () => {
      const counter = { number: 0 };

      gsap.to(counter, {
        number: value,
        duration,
        ease: "power1.out",

        scrollTrigger: {
          trigger: counterRef.current,
          start: "top 85%",
          once: true,
        },

        onUpdate: () => {
          if (numberRef.current) {
            numberRef.current.textContent =
              prefix + counter.number.toFixed(decimals) + suffix;
          }
        },
      });
    },
    { scope: counterRef }
  );

  return (
    <span ref={counterRef} aria-label={`${prefix}${value}${suffix}`}>
      <span ref={numberRef}>
        {prefix}0{suffix}
      </span>
    </span>
  );
}
