import { FaBitcoin, FaEthereum, FaDog } from 'react-icons/fa';
import { SiSolana } from 'react-icons/si';
import Chart1 from "../../../assets/Img/Chart1.png";

export function CryptoTable() {
  const data = [
    {
      icon: <FaBitcoin className="text-yellow-500 text-3xl sm:text-4xl" />,
      name: 'Bitcoin',
      change: '+14.04%',
      changeColor: 'text-green-500',
      price: '49,645 Inr',
      chart: Chart1, 
    },
    {
      icon: <FaEthereum className="text-purple-500 text-3xl sm:text-4xl" />,
      name: 'Ethereum',
      change: '+43.04%',
      changeColor: 'text-green-500',
      price: '36,675 Inr',
      chart: Chart1,
    },
    {
      icon: <SiSolana className="text-green-500 text-3xl sm:text-4xl" />,
      name: 'Solana',
      change: '-14.23%',
      changeColor: 'text-red-500',
      price: '1,456 Inr',
      chart: Chart1,
    },
    {
      icon: <FaDog className="text-red-500 text-3xl sm:text-4xl" />,
      name: 'Doge',
      change: '+17.06%',
      changeColor: 'text-green-500',
      price: '41,645 Inr',
      chart: Chart1,
    },
  ];

  return (
    <section className=" rounded-xl animate-fade-up animate-duration-[4000ms]">
      <div className="w-full bg-black bg-opacity-20 rounded-lg p-5">
        {/* Header */}
        <div className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-4 items-center gap-4">
          <div className="text-white text-lg sm:text-xl font-bold">Crypto</div>
          <div className="text-white text-lg sm:text-xl font-bold">Change</div>
          <div className="text-white text-lg sm:text-xl font-bold">Price</div>
          <div className="hidden lg:block text-white text-lg sm:text-xl font-bold">Chart</div>
        </div>

        
        {data.map((coin, index) => (
          <div
            key={index}
            className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-6 items-center mt-4 bg-black bg-opacity-30 p-3 rounded-lg"
          >
        
            <div className="flex items-center space-x-3">
              {coin.icon}
              <span className="text-white text-base sm:text-lg font-semibold">{coin.name}</span>
            </div>

            
            <div className={`text-base sm:text-lg font-semibold ${coin.changeColor}`}>
              {coin.change}
            </div>

            
            <div className="text-white text-base sm:text-lg font-semibold">{coin.price}</div>

            
            <div className="hidden lg:block">
              <img src={coin.chart} alt="chart" className="w-10 h-10" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
