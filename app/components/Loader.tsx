"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Loader() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const boxes = containerRef.current?.querySelectorAll(".separator");

    if (boxes) {
      setTimeout(() => {
        gsap.to(boxes, {
          x: "-100%",
          duration: 2,
          ease: "power3.inOut",
          stagger: 0.25,
        });
      }, 1500);
    }
  }, []);

  return (
    <div ref={containerRef} className="loader w-full h-screen fixed z-40  ">
      <div className="separator w-full h-[40%] bg-black"></div>
      <div className="separator w-full h-[35%] bg-black"></div>
      <div className="separator w-full h-[25%] bg-black"></div>
    </div>
  );
}
