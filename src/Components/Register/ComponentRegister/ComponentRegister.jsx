import { Fondo } from "../../UI/Fondo"
import { FormRegister } from "../FormRegister/FormRegister"
import { HeaderRegister } from "../HeaderRegister/HeaderRegister"

export function ComponentRegister(){
    return(<>
    <Fondo>
        <main className="p-7">
            <section className="-mt-14">
                <HeaderRegister/>
            </section>
            <FormRegister/>
            <section>

            </section>
        </main>
    </Fondo>
    </>)
}