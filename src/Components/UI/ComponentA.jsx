import { Fondo } from "./Fondo";
import { SigVarHome } from "../Home/NavegacionHome/SigVarHome";
import { HeaderHome } from "../Home/HeaderHome/HeaderHome";

export function ComponentA({ children }) {
  return (
    <>
            <Fondo>
        <section className="flex flex-col md:flex-row">
          
          
          <div className="w-full   md:w-1/5 h-full">
            <SigVarHome/>
          </div>

          
          <div className="w-full md:w-4/5">
            
            
            <div className="w-full">
              <HeaderHome/>
            </div>

            
            <div className="px-4 sm:px-10 md:px-14">
            <div className="px-14">
              {children}
            </div>
            </div>
          </div>
        </section>
      </Fondo>
    </>
  );
}
