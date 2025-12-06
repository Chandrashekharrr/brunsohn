import localFont from 'next/font/local'
import Video from './Video';
import Btn from './Btm';

const myFont = localFont({
    src: '../../public/Fonts/FG.otf',
    display: 'swap',
})
const neueReg = localFont({
    src: '../../public/Fonts/NeueReg.otf',
    display: 'swap',
})

export default function Mission() {
    return (

        <>
        <div className="missionWrapper w-full h-full bg-white z-20 relative px-7">
            <div className="mission w-full pt-25 flex flex-col lg:flex-row justify-left gap-5">
                <h1 className={`${neueReg.className} capitalize text-3xl text-black leading-none lg:w-1/4 `}>Mission</h1>
                <p className={`${neueReg.className} text-sm sm:text-md lg:text-xl text-black sm:w-4/6`}>
                    We craft digital experiences that balance precision and emotion —
                    blending design, code, and movement into timeless, meaningful systems
                </p>
            </div>

            <div className="Goal w-full pt-20 flex flex-col lg:flex-row justify-left gap-5">
                <h1 className={`${neueReg.className} capitalize text-3xl text-black leading-none lg:w-1/4`}>Goal</h1>
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

            <div className="divider w-full h-px bg-gray-200 mt-30"></div>
        </div>


        <div className="selectedWrok w-full min-h-full bg-white relative z-20 px-7 flex flex-col gap-7 py-7">
            <h1 className={`${myFont.className} capitalize text-black text-[20vw] leading-none`}>selected Work</h1>

            <Video/>
            <Video/>
            <Video/>
            <Video/>

            <Btn text='view all work'/>
        </div>

</>



    );
}
