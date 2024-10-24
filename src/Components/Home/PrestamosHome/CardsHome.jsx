import { Textos } from "../../UI/Textos";
import FotoCard from "../../../assets/Img/FotoCard.png";
import LogoR from "../../../assets/Img/LogoR.png";

export function CardsHome() {
  return (
    <main className="bg-black bg-opacity-20 rounded-md p-4 animate-fade animate-duration-[10000ms]">
      <section className="flex flex-col">
      

        <div className="flex gap-3">
          <div>
            <header className="flex gap-2 items-center">
              <figure className="w-">
                <img
                  src={LogoR}
                  alt="Logo"
                  className="w-full h-full sm:w-12 sm:h-12"
                />
              </figure>
              <section>
                <Textos
                  className="text-white text-sm font-medium"
                  Texto="Hello, Rafael"
                />
                <Textos
                  className="text-white text-sm font-medium"
                  Texto="Rafael@gmail.com"
                />
              </section>
            </header>
          </div>
          <div>


            <article className="flex flex-col items-center">
              <figure className="flex justify-center">
                <img src={FotoCard} alt="Foto" className="w-24 sm:w-32" />
              </figure>
            </article>
          </div>
        </div>



        <section className="flex mt-2">
          <div className="w-1/2">
          <article className="p-2">
          <Textos className="text-white text-sm font-medium" Texto="Préstamo" />
          <Textos
            className="text-white text-sm font-medium"
            Texto="Tiempo de Depósito"
          />
          <Textos
            className="text-white text-sm font-medium"
            Texto="Interés Rédito"
          />
          <Textos className="text-white text-sm font-medium" Texto="Deudor" />
        </article>
          </div>


          <div className="w-1/2">
          <article className="p-2">

          <section className=" text-end">
            <Textos
              className="text-white text-sm font-medium"
              Texto="Monto $500.00"
            />
            <Textos
              className="text-white text-sm font-medium"
              Texto="2 semanas"
            />
            <Textos className="text-white text-sm font-medium" Texto="5%" />
            <Textos
              className="text-white text-sm font-medium"
              Texto="Rafael@gmail.com"
            />
          </section>
        </article>
          </div>
        </section>
      </section>
    </main>
  );
}
