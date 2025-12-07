import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Parallax from "./components/ParallaxGif";
import What from "./components/Whatwedo";
import Who from "./components/Who";


export default function Home(){


  return(

    <div className="main w-full h-screen">
       
  <Hero />
  <Mission />
  <Parallax />
  <What />
  <Who/>
  </div>
  )
}