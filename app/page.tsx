import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Btn from "./components/Btm";


export default function Home(){


  return(

    <div className="main w-full h-screen">
        <Hero />

        <Mission />
    </div>
  )
}