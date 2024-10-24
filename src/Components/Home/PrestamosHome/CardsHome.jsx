import { Textos } from "../../UI/Textos";
import FotoCard from "../../../assets/Img/FotoCard.png";
import LogoR from "../../../assets/Img/LogoR.png";

export function CardsHome() {
  return (
    <>
      <main className="bg-black bg-opacity-20 rounded-md p-4 animate-fade animate-duration-[10000ms]">
        <section className="flex">
          <article className="w-1/2">
            <header className="flex gap-2">
              <figure>  
                <img src={LogoR} alt="Logo" />
              </figure>
              <section>
                <Textos className="text-white text-sm font-medium" Texto="Hello, Rafael" />
                <Textos className="text-white text-sm font-medium" Texto="Rafael@gmail.com" />
              </section>
            </header>
            <section className="px-2 mt-10">
            <Textos className="text-white text-sm font-medium" Texto="Prestamo" />
            <Textos className="text-white text-sm font-medium" Texto="Tiempo de Deposito" />
            <Textos className="text-white text-sm font-medium" Texto="Interes Redito" />
            <Textos className="text-white text-sm font-medium" Texto="Deudor" />
            </section>
          </article>

          <article className="w-1/2">
            <figure className="flex justify-center -mt-3">
              <img className="" src={FotoCard} alt="Foto" />
            </figure>
           <div className="flex justify-end mt-4">
           <section className="text-end">
            <Textos className="text-white text-sm font-medium" Texto="Monto $500.00" />
            <Textos className="text-white text-sm font-medium" Texto="12 Meses" />
            <Textos className="text-white text-sm font-medium" Texto="5%" />
            <Textos className="text-white text-sm font-medium" Texto="Rafael@gmail.com" />
            </section>
           </div>
          </article>
        </section>
      </main>
    </>
  );
}
