export default function Parallax() {
  return (
    <div className="w-full h-[75vh] flex justify-center items-center bg-white relative z-30">
      <div className="w-screen h-[50vh] bg-[url('/Videos/parallax.gif')] bg-contain bg-center md:bg-cover md:bg-fixed flex justify-center items-center">

        <h1 data-lenis-speed="4" className="text-white text-[4vw]">scroll up</h1>

      </div>
    </div>
  );
}
