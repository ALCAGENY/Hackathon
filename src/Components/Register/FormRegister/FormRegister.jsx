import { useState } from "react";
import { Textos } from "../../UI/Textos";

export function FormRegister() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    año: "",
    rfc: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  // Manejo de los cambios en los campos
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Validaciones simples
  const validate = () => {
    const newErrors = {};

    if (!formData.nombre) newErrors.nombre = "El nombre es requerido";
    if (!formData.apellido) newErrors.apellido = "El apellido es requerido";
    if (!formData.año || isNaN(formData.año))
      newErrors.año = "El año debe ser un número";
    if (!formData.rfc) newErrors.rfc = "El RFC es requerido";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "El email no es válido";
    if (!formData.password || formData.password.length < 6)
      newErrors.password = "La contraseña debe tener al menos 6 caracteres";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Manejo del envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Formulario válido, procesando...");
      // Aquí iría la lógica para enviar los datos si se requiere
    }
  };

  return (
    <>
      <main>
        <section className="w-full h-full flex justify-center -mt-4 ">
          <div className="bg-black bg-opacity-20 rounded-lg px-16 py-10 ">
            <form className="" onSubmit={handleSubmit}>
              <fieldset className=" text-center">
                <Textos
                  className="text-white text-5xl font-bold"
                  Texto={"¡No tienes Cuenta!"}
                />
                <Textos
                  className="text-white text-lg mt-6"
                  Texto={"¡Crea Tu cuenta con nosotro y unete!"}
                />
              </fieldset>

              {/* Nombre */}
              <fieldset className="mt-10">
                <div className="relative w-full py-5">
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="peer w-full border-0 border-b-2 border-gray-400 outline-none text-lg text-white bg-transparent py-2 transition-all duration-200 focus:border-3 focus:border-b-[3px] focus:border-gradient-to-r from-[#35fe42] to-[#35fe42] font-bold placeholder-transparent"
                    placeholder="Tu nombre"
                    required
                  />
                  <label className="absolute top-5 left-0 transition-all duration-200 text-lg text-gray-400 peer-placeholder-shown:top-5 peer-placeholder-shown:text-lg peer-focus:top-0 peer-focus:text-[#60a465] peer-focus:text-sm peer-focus:font-bold">
                    Nombre
                  </label>
                  {errors.nombre && (
                    <span className="text-red-400 text-sm">{errors.nombre}</span>
                  )}
                </div>
              </fieldset>

              {/* Apellido */}
              <fieldset>
                <div className="relative w-full py-5">
                  <input
                    type="text"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                    className="peer w-full border-0 border-b-2 border-gray-400 outline-none text-lg text-white bg-transparent py-2 transition-all duration-200 focus:border-3 focus:border-b-[3px] focus:border-gradient-to-r from-[#35fe42] to-[#35fe42] font-bold placeholder-transparent"
                    placeholder="Tu apellido"
                    required
                  />
                  <label className="absolute top-5 left-0 transition-all duration-200 text-lg text-gray-400 peer-placeholder-shown:top-5 peer-placeholder-shown:text-lg peer-focus:top-0 peer-focus:text-[#60a465] peer-focus:text-sm peer-focus:font-bold">
                    Apellido
                  </label>
                  {errors.apellido && (
                    <span className="text-red-400 text-sm">
                      {errors.apellido}
                    </span>
                  )}
                </div>
              </fieldset>

              {/* Año */}
              <fieldset>
                <div className="relative w-full py-5">
                  <input
                    type="text"
                    name="año"
                    value={formData.año}
                    onChange={handleChange}
                    className="peer w-full border-0 border-b-2 border-gray-400 outline-none text-lg text-white bg-transparent py-2 transition-all duration-200 focus:border-3 focus:border-b-[3px] focus:border-gradient-to-r from-[#35fe42] to-[#35fe42] font-bold placeholder-transparent"
                    placeholder="Año"
                    required
                  />
                  <label className="absolute top-5 left-0 transition-all duration-200 text-lg text-gray-400 peer-placeholder-shown:top-5 peer-placeholder-shown:text-lg peer-focus:top-0 peer-focus:text-[#60a465] peer-focus:text-sm peer-focus:font-bold">
                    Año
                  </label>
                  {errors.año && (
                    <span className="text-red-400 text-sm">{errors.año}</span>
                  )}
                </div>
              </fieldset>

              {/* RFC */}
              <fieldset>
                <div className="relative w-full py-5">
                  <input
                    type="text"
                    name="rfc"
                    value={formData.rfc}
                    onChange={handleChange}
                    className="peer w-full border-0 border-b-2 border-gray-400 outline-none text-lg text-white bg-transparent py-2 transition-all duration-200 focus:border-3 focus:border-b-[3px] focus:border-gradient-to-r from-[#35fe42] to-[#35fe42] font-bold placeholder-transparent"
                    placeholder="RFC"
                    required
                  />
                  <label className="absolute top-5 left-0 transition-all duration-200 text-lg text-gray-400 peer-placeholder-shown:top-5 peer-placeholder-shown:text-lg peer-focus:top-0 peer-focus:text-[#60a465] peer-focus:text-sm peer-focus:font-bold">
                    RFC
                  </label>
                  {errors.rfc && (
                    <span className="text-red-400 text-sm">{errors.rfc}</span>
                  )}
                </div>
              </fieldset>

              {/* Email */}
              <fieldset>
                <div className="relative w-full py-5">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="peer w-full border-0 border-b-2 border-gray-400 outline-none text-lg text-white bg-transparent py-2 transition-all duration-200 focus:border-3 focus:border-b-[3px] focus:border-gradient-to-r from-[#35fe42] to-[#35fe42] font-bold placeholder-transparent"
                    placeholder="Correo electrónico"
                    required
                  />
                  <label className="absolute top-5 left-0 transition-all duration-200 text-lg text-gray-400 peer-placeholder-shown:top-5 peer-placeholder-shown:text-lg peer-focus:top-0 peer-focus:text-[#60a465] peer-focus:text-sm peer-focus:font-bold">
                    Correo electrónico
                  </label>
                  {errors.email && (
                    <span className="text-red-400 text-sm">{errors.email}</span>
                  )}
                </div>
              </fieldset>

              {/* Contraseña */}
              <fieldset>
                <div className="relative w-full py-5">
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="peer w-full border-0 border-b-2 border-gray-400 outline-none text-lg text-white bg-transparent py-2 transition-all duration-200 focus:border-3 focus:border-b-[3px] focus:border-gradient-to-r from-[#35fe42] to-[#35fe42] font-bold placeholder-transparent"
                    placeholder="Contraseña"
                    required
                  />
                  <label className="absolute top-5 left-0 transition-all duration-200 text-lg text-gray-400 peer-placeholder-shown:top-5 peer-placeholder-shown:text-lg peer-focus:top-0 peer-focus:text-[#60a465] peer-focus:text-sm peer-focus:font-bold">
                    Contraseña
                  </label>
                  {errors.password && (
                    <span className="text-red-400 text-sm">
                      {errors.password}
                    </span>
                  )}
                </div>
              </fieldset>

              <fieldset className="flex justify-center mt-5">
                <button className="buttonpro">
                  <span>Registrarse</span>
                </button>
              </fieldset>

              <fieldset className="flex justify-center gap-1 mt-5">
                <Textos
                  className="text-white text-sm font-bold"
                  Texto={"¿Ya tienes cuenta?"}
                />
                <a
                  className="text-green-400 hover:text-green-300 text-sm font-bold"
                  href="/"
                >
                  Inicio de Sesion
                </a>
                
              </fieldset>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
