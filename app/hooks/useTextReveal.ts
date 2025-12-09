"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useTextReveal(ref: React.RefObject<HTMLElement | null>, options = {}) {
  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger:0.5,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          scrub:true,
          ...options,
        },
      });
    });

    return () => ctx.revert();

  }, [ref]);
}
