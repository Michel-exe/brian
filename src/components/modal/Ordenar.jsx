import { useContext, useState } from "react"
import Context from "../../context/context";

export default function ({scala,setScala,type}) {
    console.log(scala);
    // const con = useContext(Context)
    // console.log(con);
    // let [sca,setSca] = useState(scala)
    // const style ={
    //     transform:`scale(${sca})`
    // }
    return (
        <div className={"dialog "+type} style={{transform:`scale(${scala})`,zIndex:4}}>
            <section>
                <h2 onClick={()=>{
                    setScala("0")
                }}>Ordenar Platillo</h2>
                <form action="" id="formPlatillos">
                    <label htmlFor="inputPlatillos">¿Cuantas ordenes desea pedir?</label>
                    <input type="tel" id="" minLength="0" maxLength="2" autoComplete="off" />
                    <button type="click">Ordenar</button>
                </form>
            </section>
        </div>
    )
}