import Platillos from "./Platillos"
import beer from "../media/beer.png"
import { useState } from "react";

export default function Contenedor ({long,name,data,imag,setSca}) {
    let [tam,setTam ] = useState("58px")
    return (
        <section longitud={long} style={{height:tam}}>
            <div onClick={e=>{
                setTam(tam=="58px" ? (e.target.parentElement.parentElement.scrollHeight)+"px" : "58px")
            }}>
                <picture>
                    <img src={beer} alt={imag} />
                </picture>
                <h2>{name}</h2>
                <span className="downCotent" data-long={long}>
                    <svg stroke="currentColor" fill="currentColor" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path></svg>
                </span>
                <div className="tapa"></div>
            </div>
            <Platillos data={data} setSca={setSca} />
        </section>
    )
}