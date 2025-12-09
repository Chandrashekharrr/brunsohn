'use client';
import localFont from "next/font/local";
import Butt from "./Butt";
import { useRef } from "react";
import { useRevealStag } from "../hooks/useRevealStag";
import { useTextReveal } from "../hooks/useTextReveal";

const myFont = localFont({
    src: "../../public/Fonts/FG.otf",
    display: "swap",
});


const neueReg = localFont({
    src: '../../public/Fonts/NeueReg.otf',
    display: 'swap',
})


export default function What() {

    const eleRef = useRef<HTMLHeadingElement>(null);
    const paraeleRef = useRef<HTMLParagraphElement>(null);

    useRevealStag(eleRef);
    useTextReveal(paraeleRef);

    return (
        <div className="whatweedo w-full min-h-full bg-white px-7 pt-30 relative z-30">
            <h1
            ref={eleRef}
                className={`${myFont.className} capitalize font-extrabold text-[20vw] leading-none text-black overflow-hidden inline-block`}
            >
                what we do
            </h1>        
            
            <p ref={paraeleRef} className={`${neueReg.className} text-sm lg:text-xl text-black w-full lg:w-1/2`}>
                            Our goal isn&apos;t only to design beautiful websites, but to create
                            meaningful digital spaces where brands can communicate their truth
                            with authenticity and style. but to create meaningful digital spaces.
                        </p>

                        <div className="buttonWrapper w-full flex flex-col justify-center items-center mt-20 pb-20 border-t border-gray-300">
                        <Butt head="creative direction"/>
                        <Butt head="film & motion design"/>
                        </div>



                        <div className="headingtext w-full py-30 lg:py-50 flex flex-col border-b border-gray-300">
                            <h1 className={`${myFont.className} uppercase text-[8vw] leading-none whitespace-nowrap`}>What we make reflects our</h1>
                            <h1 className={`${myFont.className} uppercase text-[8vw] leading-none whitespace-nowrap`}>method;</h1>
                            <h1 className={`${myFont.className} uppercase text-[8vw] leading-none whitespace-nowrap`}>who we are shapes our intent.</h1>
                        </div>
            </div>
    )
}