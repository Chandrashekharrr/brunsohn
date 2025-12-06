
interface textSrting {
    text:string;
}

export default function Btn({text}:textSrting){


    return(

        <button className="px-5 py-3  bg-black border border-white text-white rounded-full uppercase ">{text}</button>
    )
}