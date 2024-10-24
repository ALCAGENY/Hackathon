import { Textos } from "../../UI/Textos"
import Saldo from "../../../assets/Img/Saldo.png"
import LogoR from "../../../assets/Img/LogoR.png" 

export function HeaderHome(){
    return(<>
    <main className="animate-fade-down animate-duration-[2000ms]">
    <section className="flex gap-3 px-32 py-10">
        <div className=" w-1/2 flex justify-end gap-2">
        <div className="flex items-center ">
            <img src={Saldo} alt="" />
        </div>
        <div className="">
        <Textos className="text-white text-sm font-medium" Texto="Saldo"/>
        <Textos className="text-white text-sm font-medium" Texto="20.30"/>
        </div>
        </div>
        <div className=" w-full flex justify-end gap-2">
        <div className="flex items-center ">
            <img src={LogoR} alt="" />
        </div>
        <div className="">
        <Textos className="text-white text-sm font-medium" Texto="Hello, Chikiz"/>
        <Textos className="text-white text-sm font-medium" Texto="Chikiz@gmail.com"/>
        </div>
        </div>
    </section>
    </main>
    </>)
}