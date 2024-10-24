import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../src/assets/Estilos.css"
import { ComponentLogin } from "./Components/Login/ComponentLogin/ComponentLogin";
import { ComponentRegister } from "./Components/Register/ComponentRegister/ComponentRegister";
import { ComponentHome } from "./Components/Home/ComponentHome/ComponentHome";
import { PublicacionesPrestador } from "./Components/Prestador/PublicacionesPrestador/PublicacionesPrestador";



const router = createBrowserRouter([
  {
    path: '/',
    element: <ComponentLogin/>
  },  
  {
    path: '/Registro',
    element: <ComponentRegister/>
  },
  {
    path: '/Home',
    element: <ComponentHome/>
  },
  {
    path: '/Publicaciones',
    element: <PublicacionesPrestador/>
  },
 
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;   