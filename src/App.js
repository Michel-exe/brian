import "./style/colores.css"
import "./style/e.css"
import "./style/style.css"
import Api from './api/export';
import logo from './media/img_logo.png';
// import Ordenar from "./components/modal/Ordenar"
// import Context from "./context/context";
import { useState } from "react";
import Ordenar from "./components/modal/Ordenar";

function App() {
   let [type, setType] = useState("platillos");
   let [sca, setSca] = useState(".3");
   let [nod, setNod] = useState("");
   return (
      <div className="App">
         {/* <Ordenar scale={sca} type={type} /> */}
         <Ordenar scala={sca} setScala={setSca} type={type} nodos={nod} />
         <div className="cuerpo">
            <h1>
               <picture>
                  <img src={logo} alt="logo" />
               </picture>
               Sushi Maki
            </h1>
            <Api setSca={setSca} />
            <button id="abrirOrden" onClick={()=>{
               setNod(document.querySelectorAll(".ordenado"))
               // console.log(document.querySelectorAll(".ordenado"))
               // console.log(nod);
               setSca("1")
            }}>Ordenar</button>
         </div>
      </div>
   );
}

export default App;
