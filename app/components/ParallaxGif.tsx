export default function Parallax() {
  return (
    <div className="w-full h-[75vh] flex justify-center items-center bg-white relative z-30">
      <div className="w-screen h-[50vh] bg-[url('/Videos/parallax.gif')] bg-contain bg-center md:bg-cover md:bg-fixed">
      </div>
    </div>
  );
}
