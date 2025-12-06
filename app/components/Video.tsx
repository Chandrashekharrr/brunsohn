import Btn from "./Btm";

export default function Video() {
  return (
    <div className="MainVideo w-full h-[80vh] rounded-md overflow-hidden relative">
      <div className="btnWrapper absolute z-20 p-5 flex flex-col gap-2">
        <Btn text="motion design" />
        <Btn text="art direction" />
      </div>
      <video
        src="/Videos/hero2.mp4"
        playsInline
        muted
        loop
        autoPlay
        className="object-cover object-center w-full h-full absolute z-10"
      ></video>

      <div className="info absolute z-20 bottom-0 bg-black/20 backdrop-blur-md rounded-md  p-5 mx-2 mb-2 ">
        <h1 className="capitalize font-extrabold tracking-normal hover:tracking-[2em] transition-all duration-200 ease-in-out">Onvermono</h1>
        <p>
          Overmono is a visual experiment inspired by the duo&apos;s raw, electronic
          energy. The project explores rhythm, distortion, and motion through a
          minimal, industrial-driven aesthetic
        </p>
      </div>
    </div>
  );
}
