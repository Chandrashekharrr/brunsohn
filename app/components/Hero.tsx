"use client";
import localFont from "next/font/local";
import Text from "./textReveal";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const myFont = localFont({
  src: "../../public/Fonts/FG.otf",
  display: "swap",
});

const neueReg = localFont({
  src: "../../public/Fonts/NeueReg.otf",
  display: "swap",
});

export default function Hero() {
  const VideoRef = useRef<HTMLVideoElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!VideoRef.current) return;

    gsap.fromTo(
      VideoRef.current,
      {
        scale: 1.5,
        borderRadius: "0px"
      }, // START bigger
      {
        scale: 0.5, // END normal size
        ease: "none",
        borderRadius: "15px",
        scrollTrigger: {
          trigger: VideoRef.current,
          scrub: true,
        },
      }
    );
  }, []);

  useEffect(() => {

    if (!headingRef.current) return;

    gsap.fromTo(headingRef.current.querySelector("h1"),
      {
        y: 500,
      },
      {
        y: 0,
        duration: 2,
        ease: "none",
        scrollTrigger: {
          trigger: headingRef.current,
          scrub: true,
          // toggleActions: "play none none reverse",
          markers: false,
        }
      })


  })


  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        <video
          ref={VideoRef}
          src="/Videos/hero4.mp4"
          playsInline
          autoPlay
          loop
          muted
          className="fixed top-0 right-0 w-full h-full lg:w-4/6 object-cover z-0"
        />

        <div className="wrapper absolute px-7 py-10 w-full h-full">
          

          <div
            className={`${myFont.className} uppercase font-extrabold text-[20vw] leading-none mix-blend-difference absolute text-white`}
          >

            <h1 className="">brunsohn</h1>
          </div>

          <div ref={headingRef} className={`overflow-hidden  ${myFont.className} uppercase leading-none text-white mix-blend-difference fixed z-50`}>

            <h1 className={`uppercase overflow-hidden inline-block leading-none`}>
              <span  className="inline-block">
                <span className="inline-block text-[8vw] lg:text-[2vw]">brunsohn</span>
              </span>
            </h1>

          </div>

          <div
            className={`${neueReg.className} w-full uppercase leading-none  mix-blend-difference text-white absolute bottom-10 z-50`}
          >
            <div className="para overflow-hidden">
              <Text
                texts="A digital video"
                textSize="text-[8vw] lg:text-[3vw]"
              />
            </div>

            <div className="para overflow-hidden">
              <Text texts="production" textSize="text-[8vw] lg:text-[3vw]" />
            </div>

            <div className="para overflow-hidden">
              <Text texts="studio." textSize="text-[8vw] lg:text-[3vw]" />
            </div>

            <div className="para overflow-hidden mt-10">
              <Text texts="Bold, modern" textSize="text-[8vw] lg:text-[3vw]" />
            </div>

            <div className="para overflow-hidden">
              <Text texts="visuals." textSize="text-[8vw] lg:text-[3vw]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
