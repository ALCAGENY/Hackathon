import { Fondo } from "../../UI/Fondo"
import { HeaderLogin } from "../HeaderLogin/HeaderLogin"
import { FormLogin } from "../FormLogin/FormLogin"

export function ComponentLogin (){
    return(<>
        <Fondo>
            <main className="p-7">
              <section className="-mt-14">
                <HeaderLogin/>
              </section>

              <section>
                <FormLogin/>
              </section>
            </main>
        </Fondo>
    </>)
}