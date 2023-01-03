import { useState } from "react";

export default function Platillo ({ setSca, plat, cost, ingr }) {
    // console.log(setSca);
    let [clase,setclase ] = useState("")
    let pl=plat.replaceAll(" ","")
    return (
        <div className={("pl"+(pl)+" ") + clase} data-name={plat} data-cost={cost} >
            <strong className="canPlatillos" id="canPlatillos"></strong>
            <span>
                <b>{plat}</b>
                <i>{cost}</i>
            </span>
            <strong className="cancelarPlatillo" id="cancelarPlatillo">
                <svg stroke="currentColor" fill="currentColor" version="1.1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 14.5c-3.59 0-6.5-2.91-6.5-6.5s2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5z"></path>
                    <path d="M10.5 4l-2.5 2.5-2.5-2.5-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 2.5-2.5 2.5 2.5 1.5-1.5-2.5-2.5 2.5-2.5z"></path>
                </svg>
            </strong>
            <small>{ingr}</small>
            <div className="tapa" onClick={() =>{ 
                setclase("ordenado")
                localStorage.setItem("tmpPlat",("pl"+pl))
                // console.log(setSca);
                // setSca("1")
                // document.querySelector(".dialog").style.transform="scale(1)"
            }} data-name={plat} data-cost={cost} ></div>
            <div className="tapaSVG" onClick={e =>{ setclase("")}}></div>
        </div>
    );
}