import localFont from "next/font/local"
import Link from "next/link"

const neueReg = localFont({
    src: '../../public/Fonts/NeueReg.otf',
    display: 'swap',
})

export default function Footer() {

    return (
        <div className="footerwrapper w-full h-full bg-black flex flex-col justify-between items-center px-7">

            <div className="divide w-full h-px bg-zinc-700 mt-20"></div>

            <div className={`${neueReg.className} w-full h-full flex flex-col lg:flex-row pt-10`}>

                <div className=" w-full lg:w-1/2  flex flex-row justify-start lg:gap-40">

                    <div className="section1 w-1/2 lg:w-1/4">

                        <h1 className={`${neueReg.className} text-white text-[3.5vw] lg:text-lg font-extrabold capitalize  lg:pb-10 pb-5`}>navigation</h1>

                        <div className="linkWrapper text-[5vw] lg:text-[2vw] leading-none flex flex-col gap-1 text-gray-400">
                            <Link href="/"><h1>Home</h1></Link>
                            <Link href="/"><h1>Work</h1></Link>
                            <Link href="/"><h1>Services</h1></Link>
                            <Link href="/about"><h1>About</h1></Link>
                        </div>
                    </div>

                    <div className="section1 w-1/2  lg:w-1/4 ">

                        <h1 className={`${neueReg.className} text-white text-[3.5vw] lg:text-lg font-extrabold capitalize  lg:pb-10 pb-5`}>socials</h1>

                        <div className="linkWrapper text-[5vw] lg:text-[2vw] leading-none flex flex-col gap-1 capitalize text-gray-400">
                            <Link href="/"><h1>Facebook</h1></Link>
                            <Link href="/"><h1>Linkedin</h1></Link>
                            <Link href="/"><h1>instagram</h1></Link>
                        </div>
                    </div>


                </div>


                <div className="divide w-full h-px bg-zinc-700 mt-10 mb-5 block lg:hidden"></div>
                <div className="divide w-px h-3/4  bg-zinc-700 hidden lg:block"></div>


                <div className=" w-full lg:w-1/2  flex flex-row lg:justify-start pl-0 lg:pl-20 lg:gap-40 pt-5 lg:pt-0">

                    <div className="section1 w-1/2 lg:w-1/4">

                        <div className="divoneWrapper w-full ">
                            <h1 className={`${neueReg.className} text-white text-[3.5vw] lg:text-lg font-extrabold capitalize pb-5 lg:pb-10`}>France</h1>

                            <div className="linkWrapper text-[5vw] lg:text-[2vw] text-gray-400 leading-none flex flex-col gap-1">
                                <Link href="/"><h1><span className="whitespace-nowrap">1 Rue Commines</span><br/><span>75003 Paris</span></h1></Link>
                                
                            </div>
                        </div>
                        <div className="divoneWrapper w-full ">
                            <h1 className={`${neueReg.className} text-white text-[3.5vw]  lg:text-lg font-extrabold capitalize pb-5 lg:pb-10 pt-5`}>Germany</h1>

                            <div className="linkWrapper text-[5vw] text-gray-400 lg:text-[2vw] leading-none flex flex-col gap-1">
                                <Link href="/"><h1><span className="whitespace-nowrap">Warschauer Str. 39-40</span><br /><span className="whitespace-nowrap">10243 Berlin</span></h1></Link>
                            </div>
                        </div>
                    </div>

                    <div className="section1 w-1/2  lg:w-1/4">

                        <h1 className={`${neueReg.className} text-white text-[3.5vw] lg:text-lg font-extrabold capitalize pb-5 lg:pb-10`}>USA</h1>

                        <div className="linkWrapper text-[5vw] text-gray-400 lg:text-[2vw] leading-none flex flex-col gap-1 capitalize">
                            <Link href="/"><h1><span className="whitespace-nowrap">550 Hudson St.</span><br />ny 10014 </h1></Link>
                        </div>
                    </div>


                </div>


            </div>


            <div className={`pb-5 w-full flex justify-between`}>

                <h1 className={`text-[#3f3f3f] ${neueReg.className} text-sm capitalize`}>brunsohn 2025</h1>
                <h1 className={`text-[#bababa] ${neueReg.className} text-sm capitalize`}>Privacy • Terms • Legals</h1>

            </div>




        </div>
    )
}