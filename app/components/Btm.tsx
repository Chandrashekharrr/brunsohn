
interface textSrting {
    text:string;
}

export default function Btn({text}:textSrting){


    return(

        <button className="px-5 py-3  bg-black/80 border border-white text-white rounded-full uppercase text-md hover:tracking-tighter transition-all duration-300 ease-in-out cursor-pointer">{text}</button>
    )
}