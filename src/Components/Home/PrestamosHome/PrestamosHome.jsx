import { Textos } from "../../UI/Textos"
import { CardsHome } from "./CardsHome"

export function PrestamosHome() {
  return (
    <>
      <main>
        <section className="">
          <div>
            <Textos className="text-white text-lg font-medium" Texto="Prestamos" />
          </div>

          <div className="w-full h-full flex flex-col sm:flex-row sm:justify-between gap-5 mt-5"> 
            
            <div className="flex-1 h-32 sm:h-auto"> {/* CARD UNO */}
           <CardsHome/>
            </div>

            <div className="flex-1 h-32 sm:h-auto"> {/* CARD DOS */}
            <CardsHome/>
            </div>

            <div className="flex-1 h-32 sm:h-auto"> {/* CARD TRES */}
            <CardsHome/>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
