import localFont from "next/font/local";

const myFont = localFont({
  src: "../../public/Fonts/FG.otf",
  display: "swap",
});

export default function Who() {
  return (
    <div className="who w-full h-full bg-white px-7 py-10 text-black">
      <h1 className={`${myFont.className} capitalize text-[20vw] lg:text-[15vw]`}>
        who we are
      </h1>
      <p className={`${myFont.className} uppercase text-[12vw] md:text-[9vw] lg:text-[4vw] leading-none w-full lg:w-4/6`}>
        We are a creative development studio shaping digital work where clarity
        meets intensity — merging design, engineering, and motion into
        experiences that feel alive.
      </p>
    </div>
  );
}
