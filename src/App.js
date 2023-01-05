import "./style/style.css"
import {Header3 as Header} from "./components/Header";
import { Presentacion as Presentacion } from "./components/Presentacion";
import { useState } from "react";
import { Habilities } from "./components/Habilities";
import { Works } from "./components/Works";

function App() {
   let [tr,settr] = useState("0");
   let [cla,setCla] = useState("0");
   return (
      <div className={`App sld${cla}`} style={{transform: `translateY(${tr}vh)`,transition:'.7s all ease-in-out'}} >
         <Header settr={settr} setCla={setCla} ></Header>
         <Presentacion settr={settr} setCla={setCla} ></Presentacion>
         <Habilities settr={settr} setCla={setCla} ></Habilities>
         <Works settr={settr} setCla={setCla} ></Works>
      </div>
   );
}

export default App;
