"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface textsprop {
  texts: string;
  textSize: string;
}

export default function Text({ texts, textSize }: textsprop) {
  const refElem = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (!refElem.current) return;

    // GSAP reveal animation
    gsap.from(refElem.current.querySelector("span"), {
      y: "100%",
      duration: 1.5,
      delay:0.2,
      ease: "power3.out",
      stagger:0.5
    });
  }, []);

  return (
    <h1 className={`uppercase overflow-hidden inline-block ${textSize} leading-none`}>
      <span ref={refElem} className="inline-block">
        <span className="inline-block">{texts}</span>
      </span>
    </h1>
  );
}
