import { Textos } from "../../UI/Textos"; // Útil si se usa en el componente
import LogoInicio from "../../../assets/Img/LogoInicio.png";
import Logo from "../../../assets/Img/Logo.png";
import { FaUser, FaTachometerAlt, FaWallet, FaExchangeAlt, FaBell, FaCog, FaSignOutAlt } from "react-icons/fa";

export function SigVarHome() {
  return (
    <main className="p-10 animate-fade-right animate-duration-[2000ms]">
      <section className="flex gap-2 items-center">
        <div className="w-12">
          <img src={LogoInicio} alt="Logo" />
        </div>
        <Textos className="text-white text-lg font-medium" Texto="MicroTrust" />
      </section>

      <section className="px-2 mt-7">
        <ul>
          <li className="flex items-center space-x-3 hover:bg-green-600 rounded-xl p-2 text-white">
            <FaUser className="text-lg" />
            <span className="text-lg font-medium"><a href="">Profile</a></span>
          </li>
          <li className="flex items-center space-x-3 hover:bg-green-600 rounded-xl p-2 text-white">
            <FaTachometerAlt className="text-lg" />
            <span className="text-lg font-medium"><a href="">Dashboard</a></span>
          </li>
          <li className="flex items-center space-x-3 hover:bg-green-600 rounded-xl p-2 text-white">
            <FaWallet className="text-lg" />
            <span className="text-lg font-medium"><a href="">Wallet</a></span>
          </li>
          <li className="flex items-center space-x-3 hover:bg-green-600 rounded-xl p-2 text-white">
            <FaExchangeAlt className="text-lg" />
            <span className="text-lg font-medium"><a href="">Préstamo</a></span>
          </li>
        </ul>
      </section>

      <section className="">
        <div className="w-3/4 mt-10">
          <img src={Logo} alt="Logo final" />
        </div>
        <div className="px-5">
          <Textos className="text-white text-sm font-medium" Texto="MicroTrust: The" />
          <Textos className="text-white text-sm font-medium" Texto="New Cryptocurrency" />
          <Textos className="text-white text-sm font-medium" Texto="in town!" />
        </div>
      </section>

      <section className="px-3 mt-14">
        <div className="flex items-center gap-2 hover:bg-green-600 rounded-xl p-2">
            <a href=""><FaCog className="text-white text-3xl font-medium"/></a>
            <a className="text-white text-sm font-medium" href="">Settings</a>
        </div>

        <div className="flex items-center mt-2 gap-2 hover:bg-green-600 rounded-xl p-2">
            <a href=""><FaSignOutAlt className="text-white text-3xl font-medium"/> </a>
            <a className="text-white text-sm font-medium" href="">LogOut</a>
        </div>
      </section>
    </main>
  );
}
