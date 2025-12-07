import localFont from "next/font/local";

const myFont = localFont({
  src: "../../public/Fonts/FG.otf",
  display: "swap",
});

const neueReg = localFont({
  src: "../../public/Fonts/NeueReg.otf",
  display: "swap",
});

export default function Hero() {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        <video
          src="/Videos/hero4.mp4"
          playsInline
          autoPlay
          loop
          muted
          className="absolute top-0 right-0 w-full h-full lg:w-4/6 object-cover z-0"
        />


        <div className="wrapper absolute px-7 py-10 w-full h-full">
        
        <h1
          className={`${myFont.className} uppercase font-extrabold text-[20vw] leading-none mix-blend-difference absolute text-white`}
        >
          brunsohn
        </h1>

        <div
          className={`${neueReg.className} uppercase leading-none text-[8vw] lg:text-[3vw] mix-blend-difference text-white absolute bottom-10`}
        >
          <p>A digital video</p>
          <p>production</p>
          <p>studio.</p>
          <p className="mt-10">Bold, modern</p>
          <p>visuals.</p>
        </div>

        </div>

      </div>
    </>
  );
}
