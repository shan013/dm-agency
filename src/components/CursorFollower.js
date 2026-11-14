"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function CursorFollower() {
  const cursorRef = useRef(null);

  useGSAP(() => {
    const cursor = cursorRef.current;

    // Hide the cursor initially
    gsap.set(cursor, {
      xPercent: -50,
      yPercent: -50,
    });

    // Follow mouse movement
    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  });

  return <div className="custom-cursor" ref={cursorRef}></div>;
}