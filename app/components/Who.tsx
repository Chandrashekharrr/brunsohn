'use client';
import localFont from "next/font/local";
import { useRef } from "react";
import { useRevealStag } from "../hooks/useRevealStag";
import { useTextReveal } from "../hooks/useTextReveal";

const myFont = localFont({
  src: "../../public/Fonts/FG.otf",
  display: "swap",
});

export default function Who() {

  const headingelement = useRef<HTMLHeadingElement>(null);
  const headingparaone = useRef<HTMLHeadingElement>(null);
  const headingparatwo = useRef<HTMLHeadingElement>(null);
  const headingparathre = useRef<HTMLHeadingElement>(null);
  const headingparafour = useRef<HTMLHeadingElement>(null);

  useRevealStag(headingelement);
  useTextReveal(headingparaone);
  useTextReveal(headingparatwo);
  useTextReveal(headingparathre);
  useTextReveal(headingparafour);

  return (
    <div className="who w-full h-full bg-white px-7 py-10 text-black relative z-30">
      <h1 ref={headingelement}  className={`${myFont.className} capitalize text-[20vw] lg:text-[15vw] overflow-hidden leading-none inline-block`}>
        who we are
      </h1>
      <div className={`${myFont.className} uppercase text-[12vw] md:text-[9vw] lg:text-[4vw] leading-none w-full lg:w-4/6`}>
        <h1 ref={headingparaone} className="inline-block overflow-hidden leading-none whitespace-nowrap">We are a creative development studio shaping</h1>
        <h1 ref={headingparatwo} className="inline-block overflow-hidden leading-none whitespace-nowrap">digital work where clarity meets intensity —</h1>
        <h1 ref={headingparathre} className="inline-block overflow-hidden leading-none whitespace-nowrap">merging design, engineering, and motion into</h1>
        <h1 ref={headingparafour} className="inline-block overflow-hidden leading-none whitespace-nowrap">experiences that feel alive.</h1>
      </div>
    </div>
  );
}
