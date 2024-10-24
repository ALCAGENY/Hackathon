import { Fondo } from "../../UI/Fondo";
import { SigVarHome } from "../NavegacionHome/SigVarHome";
import { HeaderHome } from "../HeaderHome/HeaderHome";
import { PrestamosHome } from "../PrestamosHome/PrestamosHome";
import { CryptoTable } from "../CryptoTable/CryptoTable";

export function ComponentHome() {
  return (
    <>
      <Fondo>
        <section className="flex flex-col md:flex-row">
          
          
          <div className="w-full   md:w-1/5 h-full">
            <SigVarHome />
          </div>

          
          <div className="w-full md:w-4/5">
            
            
            <div className="w-full">
              <HeaderHome />
            </div>

            
            <div className="px-4 sm:px-10 md:px-14">
              <PrestamosHome />
            </div>

            
            <div className="px-4 sm:px-10 md:px-14 mt-5">
              <CryptoTable />
            </div>
          </div>
        </section>
      </Fondo>
    </>
  );
}
