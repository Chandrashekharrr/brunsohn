import localFont from "next/font/local"
const myFont = localFont({
    src: '../../public/Fonts/FG.otf',
    display: 'swap',
})
const neueReg = localFont({
    src: '../../public/Fonts/NeueReg.otf',
    display: 'swap',
})

export default function Hero() {
    return (
        <div className="hero w-full h-screen overflow-hidden relative bg-black">
            <video
                src="/Videos/hero4.mp4"
                playsInline
                autoPlay
                loop
                muted
                className="w-full h-full object-cover fixed right-0 lg:w-4/6"
            />

            <div className="wrapperText flex flex-col justify-between px-7 py-10 absolute z-10 w-full h-full">
                <h1 className={`${myFont.className} uppercase font-extrabold text-[20vw] leading-none mix-blend-exclusion z-10 top-0`}>brunsohn</h1>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     

                <div className={`${neueReg.className} paraWrapper mix-blend-difference uppercase leading-none text-[8vw] lg:text-[3vw] bottom-0`}>
                    <p>A digital video</p>
                    <p>production</p>
                    <p>studio.</p>      
                    <p className='mt-10'>Bold, modern</p>
                    <p>visuals.</p>
                </div>
            </div>
        </div>
    )
}
