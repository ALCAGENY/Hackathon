import { useState } from "react";
import { Textos } from "../../UI/Textos";

export function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLoginClick = (e) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    // Validar que el email tenga un formato básico y que la contraseña no esté vacía
    if (!email || !email.includes("@")) {
      setErrorMessage("Por favor, ingresa un correo electrónico válido.");
      return;
    }

    if (!password) {
      setErrorMessage("Por favor, ingresa una contraseña.");
      return;
    }

    // Si los datos son válidos, mostrar el modal
    setShowModal(true);
    setErrorMessage(""); // Limpiar el mensaje de error si todo está correcto
  };

  return (
    <>
      <main>
        <section className="w-full h-s flex justify-center -mt-4">
          <div className="bg-black bg-opacity-20 rounded-lg px-16 py-10">
            <form>
              <fieldset className="text-center">
                <Textos
                  className="text-white text-5xl font-bold"
                  Texto={"¡Inicia Sesion!"}
                />
                <Textos
                  className="text-white text-lg mt-5"
                  Texto={"¡Es Bueno Volver A Verte!"}
                />
              </fieldset>

              <fieldset className="mt-10">
                <div className="relative w-full py-5">
                  <input
                    type="email"
                    className="peer w-full border-0 border-b-2 border-gray-400 outline-none text-lg text-white bg-transparent py-2 transition-all duration-200 focus:border-3 focus:border-b-[3px] focus:border-gradient-to-r from-[#35fe42] to-[#35fe42] font-bold placeholder-transparent"
                    placeholder="Tu correo"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label className="absolute top-5 left-0 transition-all duration-200 text-lg text-gray-400 peer-placeholder-shown:top-5 peer-placeholder-shown:text-lg peer-focus:top-0 peer-focus:text-[#60a465] peer-focus:text-sm peer-focus:font-bold">
                    Correo Electrónico
                  </label>
                </div>
              </fieldset>

              <fieldset>
                <div className="relative w-full py-5">
                  <input
                    type="password"
                    className="peer w-full border-0 border-b-2 border-gray-400 outline-none text-lg text-white bg-transparent py-2 transition-all duration-200 focus:border-3 focus:border-b-[3px] focus:border-gradient-to-r from-[#35fe42] to-[#35fe42] font-bold placeholder-transparent"
                    placeholder="Tu contraseña"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label className="absolute top-5 left-0 transition-all duration-200 text-lg text-gray-400 peer-placeholder-shown:top-5 peer-placeholder-shown:text-lg peer-focus:top-0 peer-focus:text-[#60a465] peer-focus:text-sm peer-focus:font-bold">
                    Contraseña
                  </label>
                </div>
              </fieldset>

              {errorMessage && (
                <p className="text-red-500 text-center mt-2">{errorMessage}</p>
              )}

              <fieldset className="flex justify-center mt-5">
                <button
                  type="submit"
                  className="buttonpro"
                  onClick={handleLoginClick}
                >
                  <span>Iniciar Sesión</span>
                </button>
              </fieldset>

              <fieldset className="flex justify-center gap-1 mt-5">
                <Textos
                  className="text-white text-sm font-bold"
                  Texto={"¿No tienes cuenta?"}
                />
                <a
                  className="text-green-400 hover:text-green-300 text-sm font-bold"
                  href="/Registro"
                >
                  Regístrate
                </a>
              </fieldset>
            </form>
          </div>
        </section>
      </main>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-black bg-opacity-70 rounded-lg py-32 px-10">
            <Textos
              className="text-white text-5xl font-bold"
              Texto={"¡Elige tu Rol!"}
            />
         <div className="flex mt-20 gap-10">
  <button className="buttonpro" onClick={() => window.location.href = "/Publicaciones"}>
    <span>Prestador</span>
  </button>

  <button className="buttonpro" onClick={() => window.location.href = "/Home"}>
    <span>Cliente</span>
  </button>
</div>

          </div>
        </div>
      )}
    </>
  );
}
