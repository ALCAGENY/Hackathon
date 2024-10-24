import { Textos } from "../../UI/Textos";
import { ComponentA } from "../../UI/ComponentA";
import { BiTransfer } from "react-icons/bi";

export function PublicacionesPrestador() {
  return (
    <>
      <ComponentA>
        <section className="bg-black bg-opacity-20 rounded-lg px-8 py-10 md:px-24 md:py-16">
          <div>
            <Textos
              className="text-white text-2xl md:text-3xl font-medium text-center"
              Texto="Prestamos"
            />
          </div>

          <section className="mt-8 md:mt-10">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              {/* CARD UNO */}
              <div className="flex-1 p-5">
                <div className="bg-black bg-opacity-25 rounded-lg flex flex-col justify-center items-center h-full p-6">
                  <Textos
                    className="text-white text-sm font-medium text-center"
                    Texto="Invierte el nivel 1"
                  />
                  <Textos
                    className="text-white text-sm font-medium text-center"
                    Texto="$500.00"
                  />
                </div>
              </div>

              {/* CARD DOS */}
              <div className="flex-1 p-5">
                <div className="bg-black bg-opacity-25 rounded-lg flex justify-center items-center h-full p-6">
                  <BiTransfer className="text-2xl text-white" />
                </div>
              </div>

              {/* CARD TRES */}
              <div className="flex-1 p-5">
                <div className="bg-black bg-opacity-25 rounded-lg flex flex-col justify-center items-center h-full p-6">
                  <Textos
                    className="text-white text-sm font-medium text-center"
                    Texto="Recibe el 20%"
                  />
                  <Textos
                    className="text-white text-xs font-medium text-center"
                    Texto="(MENOS EL 5% DE COMISION)"
                  />
                </div>
              </div>

              {/* CARD CUATRO */}
              <div className="flex-1 p-5">
                <div className="bg-black bg-opacity-25 rounded-lg flex justify-center items-center h-full p-6">
                  <button className="w-full bg-black rounded-md p-2">
                    <Textos
                      className="text-white text-sm font-medium text-center"
                      Texto="Deseas Crear Esta Publicacion"
                    />
                  </button>
                </div>
              </div>
            </div>
          </section>
        </section>
      </ComponentA>
    </>
  );
}
