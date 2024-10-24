import { Fondo } from "./Fondo";
import { SigVarHome } from "../Home/NavegacionHome/SigVarHome";
import { HeaderHome } from "../Home/HeaderHome/HeaderHome";

export function ComponentA({ children }) {
  return (
    <>
      <Fondo className="">
        <section className="flex ">
          <div className="w-1/5 h-full">
            <SigVarHome />
          </div>

          <div className="w-full">
            <div className="w-full">
              <HeaderHome />
            </div>
            <div className="px-14">
              {children}
            </div>
          </div>
        </section>
      </Fondo>
    </>
  );
}
