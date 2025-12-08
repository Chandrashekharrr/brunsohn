import localFont from "next/font/local";
import Butt from "./Butt";
import Team from "./TeamCard";
import Btn from "./Btm";

const myFont = localFont({
    src: "../../public/Fonts/FG.otf",
    display: "swap",
});


const neueReg = localFont({
    src: '../../public/Fonts/NeueReg.otf',
    display: 'swap',
})


export default function About() {


    return (
        <>
        <div className="Goal w-full pt-20 flex flex-col lg:flex-row justify-left gap-5 bg-white px-7 py-10 relative">
            <h1 className={`${neueReg.className} capitalize text-3xl text-black leading-none lg:w-1/4`}>approach</h1>
            <div className="paraWrapper w-full sm:w-4/6 flex flex-col gap-5">
                <p className={`${neueReg.className} text-sm sm:text-md lg:text-xl text-black`}>
                    Our goal is to craft digital experiences that stand at the
                    intersection of design, technology, and emotion. We believe that every
                    interface has the power to express identity — not just through
                    visuals, but through rhythm, movement, and the way it makes people
                    feel. We approach each project with the same intention: to strip away
                    what&apos;s unnecessary, to focus on what&apos;s essential, and to
                    build with clarity and precision.
                </p>
                <p className={`${neueReg.className} text-sm lg:text-xl text-black`}>
                    Our goal isn&apos;t only to design beautiful websites, but to create
                    meaningful digital spaces where brands can communicate their truth
                    with authenticity and style.
                </p>

            </div>
        </div>
        <div className="Goal w-full pt-20 flex flex-col lg:flex-row justify-left gap-5 bg-white px-7 pb-10">
            <h1 className={`${neueReg.className} capitalize text-3xl text-black leading-none lg:w-1/4`}>founders</h1>
            <div className="paraWrapper w-full h-3/4 flex flex-col sm:flex-row sm:flex-wrap">
               
               <Team/>
               <Team/>
               <Team/>

            </div>
        </div>

        <div className="dd bg-white w-full py-10 ">
        <div className="divider my-10 bg-gray-300 h-px w-full "></div>
        </div>
         <div className="Goal w-full pt-20 flex flex-col lg:flex-row justify-left gap-5 bg-white px-7 py-10 relative">
            <h1 className={`${neueReg.className} capitalize text-3xl text-black leading-none lg:w-1/4`}>collaboration</h1>
            <div className="paraWrapper w-full sm:w-4/6 flex flex-col gap-5">
                <p className={`${neueReg.className} text-sm sm:text-md lg:text-xl text-black`}>
                    Our goal is to craft digital experiences that stand at the
                    intersection of design, technology, and emotion. We believe that every
                    interface has the power to express identity — not just through
                    visuals, but through rhythm, movement, and the way it makes people
                    feel. We approach each project with the same intention: to strip away
                    what&apos;s unnecessary, to focus on what&apos;s essential, and to
                    build with clarity and precision.
                </p>
                <p className={`${neueReg.className} text-sm lg:text-xl text-black`}>
                    Our goal isn&apos;t only to design beautiful websites, but to create
                    meaningful digital spaces where brands can communicate their truth
                    with authenticity and style.
                </p>

                <div className="btnwrapper w-full">
                <Btn text="start a project"/>
                </div>
            </div>
        </div>


        </>

    )
}