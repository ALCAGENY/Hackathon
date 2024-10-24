import { Fondo } from "../../UI/Fondo";
import { SigVarHome } from "../NavegacionHome/SigVarHome";
import { HeaderHome } from "../HeaderHome/HeaderHome";
import { PrestamosHome } from "../PrestamosHome/PrestamosHome";

export function ComponentHome() {
  return (
    <>
      <Fondo>
        <section className="flex h-screen">
          <div className="w-1/5 h-full">
            <SigVarHome/>
          </div>

          <div className="w-full">
            <div className=" w-full ">
              <HeaderHome/>
            </div>
            <div className="px-14">
              <PrestamosHome/>
            </div>
          </div>
        </section>
      </Fondo>
    </>
  );
}
