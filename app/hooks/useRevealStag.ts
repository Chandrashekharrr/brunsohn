"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText) 

export function useRevealStag(ref: React.RefObject<HTMLElement | null>, options = {}) {
  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
        const split = new SplitText(ref.current,{
            type:"chars, words",
        })
      gsap.from(split.words, {
        y: 300,
        duration: 1,
        ease: "power3.out",
        stagger:0.3,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 90%",
          end: "top 20%",
          scrub:true,
          ...options,
        },
      });
    });

    return () => ctx.revert();

  }, [ref]);
}
