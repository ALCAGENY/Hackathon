import { Textos } from "../../UI/Textos";
import Saldo from "../../../assets/Img/Saldo.png";
import LogoR from "../../../assets/Img/LogoR.png"; 

export function HeaderHome() {
  return (
    <main className="animate-fade-down animate-duration-[2000ms]">
      <section className="flex flex-col sm:flex-row gap-3 px-4 sm:px-8 md:px-16 lg:px-32 py-5 sm:py-10">
        
    
        <div className="w-full sm:w-1/2 flex justify-start sm:justify-end gap-2 items-center">
          <img src={Saldo} alt="Saldo" className="w-10 sm:w-12" />
          <div>
            <Textos className="text-white text-xs sm:text-sm font-medium" Texto="Saldo" />
            <Textos className="text-white text-xs sm:text-sm font-medium" Texto="20.30" />
          </div>
        </div>
        

        <div className="w-full sm:w-1/2 flex justify-start sm:justify-end gap-2 items-center mt-4 sm:mt-0">
          <img src={LogoR} alt="LogoR" className="w-10 sm:w-12" />
          <div>
            <Textos className="text-white text-xs sm:text-sm font-medium" Texto="Hello, Chikiz" />
            <Textos className="text-white text-xs sm:text-sm font-medium" Texto="Chikiz@gmail.com" />
          </div>
        </div>

      </section>
    </main>
  );
}
