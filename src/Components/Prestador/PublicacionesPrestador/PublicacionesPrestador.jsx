import { ComponentA } from "../../UI/ComponentA";
import { Textos } from "../../UI/Textos";

export function PublicacionesPrestador() {
  return (
    <>
      <ComponentA>
      <div className="mt-10">
            <Textos className="text-white text-lg font-medium" Texto="Publicaciones" />
          </div>
        <div className="mt-4">
          {/* Contenedor principal */}
          <div className="bg-black bg-opacity-20 p-6 md:p-8 rounded-lg shadow-lg text-white">
            {/* Primer Bloque */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
              <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                <p className="text-lg">Invierte en nivel 1.</p>
                <select className="bg-green-500 text-white p-2 rounded-lg">
                  <option value="500">₹ 500</option>
                  {/* Puedes agregar más opciones si es necesario */}
                </select>
              </div>
              <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                <p className="text-lg">Recibe el 20%</p>
                <p>De Ganancias</p>
                <p>Menos El 5%</p>
              </div>
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
                Go, Publicar
              </button>
            </div>

            {/* Segundo Bloque - Formulario */}
            <div className="bg-black bg-opacity-10 p-4 md:p-6 rounded-lg">
              <h2 className="text-center text-white text-2xl font-medium mb-4">Publica Tu Primera Inversion</h2>
              <p className="text-center mb-6 text-white text-lg font-medium">El futuro de tus Ganancias</p>
              <form>
                <div className="mb-4">
                  <label className="block mb-2">Nombre</label>
                  <input
                    type="text"
                    className="w-full p-2 bg-green-900 bg-opacity-40 rounded-lg"
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2">Cantidad</label>
                  <input
                    type="number"
                    className="w-full p-2 bg-green-900 bg-opacity-40 rounded-lg"
                    placeholder="Cantidad"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2">Tiempo de Pago</label>
                  <input
                    type="text"
                    className="w-full p-2 bg-green-900 bg-opacity-40 rounded-lg"
                    placeholder="Tiempo de Pago"
                  />
                </div>
            
              </form>
            </div>
          </div>
        </div>
      </ComponentA>
    </>
  );
}
