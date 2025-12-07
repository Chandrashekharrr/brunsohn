"use client";
import { useState } from "react";
import localFont from "next/font/local";

const myFont = localFont({
    src: "../../public/Fonts/FG.otf",
    display: "swap",
});

interface heading{
  head:string;
}

export default function Butt({head}:heading) {

    const [clicked, SetClicked] = useState(false)


    const handleClick = () => {

        SetClicked(!clicked)
    }


  return (
    <div className={`w-full px-6 py-10 ${clicked ? "bg-black text-white transition-all duration-300 ease-in-out" : "bg-white text-black transition-all duration-300 ease-in-out"} border-b border-gray-300`}>
      <div onClick={handleClick} className="group flex justify-between items-start gap-4 cursor-pointer transition-all duration-300">
        {/* ICON */}
        

        {/* TEXT WRAPPER */}
        <div
          className="
          flex flex-col gap-3
          transition-all duration-500 
          group-hover:ml-5
        "
        >
          {/* MAIN TITLE */}
          <h2
            className={`
              text-3xl font-semibold 
              transition-all duration-500
              ${clicked ? "text-white transition-all duration-300 ease-in-out" : " text-black transition-all duration-300 ease-in-out"}
            ${myFont.className} uppercase`}
          >
            {head}
          </h2>

          {/* CLAMP ANIMATION (Smooth reveal) */}
          <p
            className={`
              ${clicked ? " text-white transition-all duration-300 ease-in-out" : " text-black transition-all duration-300 ease-in-out"} text-base leading-relaxed 
              max-w-[50ch] 
              transition-[max-height] duration-500 ease-in-out 
              overflow-hidden 
             ${clicked? "group-hover:max-h-[500px] ":"max-h-0"}
               
              
            `}
          >
            Codifying the creative language of your brand across every
            touchpoint — from narrative systems to motion — to deliver clarity,
            consistency and impact at scale.
          </p>
        </div>
      
        <span
          className="
            text-3xl font-bold
            transition-transform duration-300 
            group-hover:scale-150
          "
        >
        {clicked ? <p className="transition-all duration-300 ease-in-out">-</p> : <p className="transition-all duration-300 ease-in-out">+</p>}

        
        </span>
      
      </div>
    </div>
  );
}
