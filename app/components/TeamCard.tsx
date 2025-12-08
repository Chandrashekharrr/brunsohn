import Image from "next/image"
import localFont from "next/font/local"


const neueReg = localFont({
    src: '../../public/Fonts/NeueReg.otf',
    display: 'swap',
})

export default function Team(){


    return(
        <div className="wrapperTeam w-fit p-2 sm:p-5 flex flex-col flex-wrap justify-between items-start gap-2">

            <div className="Imagewrapper w-full h-[50vh] sm:h-[40vh] xl:h-[50vh] relative rounded-md overflow-hidden">
            <Image
            src="/Images/founder.webp"
            alt="Team"
            fill
            className="w-full h-full object-cover object-center"
            />
            </div>

            <div className="wrapper w-full">
            <h1 className={`${neueReg.className} capitalize text-md font-bold`}>Valérian Kinyock</h1>
            <h1 className={`${neueReg.className} uppercase text-sm font-normal text-gray-400`}>Creative Developer</h1>
            </div>
            
            <p className={`${neueReg.className} text-sm font-normal text-gray-600 break-word`}>We believe in precision and empathy in equal measure.</p>

        </div>
    )
}