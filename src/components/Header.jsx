import univers from "../media/univers.jpg"
import { FiChevronDown } from "react-icons/fi"
import { GiHamburgerMenu } from "react-icons/gi"
import React, { useState } from 'react'

const desliz = '-299'
export const Header = ({ settr, setCla }) => {
    let [stl, setstl] = useState(".5");
    const span = () => {
        const text = "Click-hacia-abajo"
        let c = 0;
        let time = 0.0;
        return text.split("").map(t => {
            c++;
            time = time + 0.3;
            return <span key={c} className="span-not" style={{ animationDelay: `${time}s` }} >{t}</span>
        })
    }
    return (
        <header>
            <picture>
                <img src={univers} alt="universo" />
            </picture>
            <div className="opacidad-header header">
                <section>
                    <h3>
                        {span()}
                        <button
                            onClick={() => { settr(desliz); setCla('1') }}
                            onMouseEnter={() => { setstl("1") }}
                            onMouseLeave={() => { setstl(".5") }}
                        >
                            <FiChevronDown></FiChevronDown>
                        </button>
                    </h3>
                </section>
            </div>
            <span className="opacidad" style={{ opacity: stl }}></span>
        </header>
    )
}
export const Header2 = ({ settr, setCla }) => {
    let [stl, setstl] = useState(".5");
    let [stl2, setstl2] = useState(0);
    const random = (bo) => {
        const text = "Click-hacia-abajo"
        const top = () => (Math.floor(Math.random() * window.innerHeight)) - (window.innerHeight) / 2
        const left = () => (Math.floor(Math.random() * (window.innerWidth)) - ((window.innerWidth) / 2))
        const delay = () => (Math.floor(Math.random() * 5))
        let c = 0;
        return text.split("").map(t => {
            c++;
            return <span key={c} className="span-not" style={!bo ? { transform: `translate(${left()}px,${top()}px)`, animationDelay: `${delay()}s` } : {}} >{t}</span>
        })
    }
    return (
        <header>
            <picture>
                <img src={univers} alt="universo" />
            </picture>
            <div className="opacidad-header header2">
                <section>
                    <div>
                        <h3>
                            {random(stl2)}
                        </h3>
                        <button
                            onClick={() => { settr(desliz); setCla('1') }}
                            onMouseEnter={() => { setstl2(1); setstl("1") }}
                            onMouseLeave={() => { setstl2(0); setstl(".5") }}
                        >
                            <FiChevronDown></FiChevronDown>
                        </button>
                    </div>
                </section>
            </div>
            <span className="opacidad" style={{ opacity: stl }}></span>
        </header>
    )
}
export const Header3 = ({ settr, setCla }) => {
    let [stl, setstl] = useState(".5");
    let [stl2, setstl2] = useState(0);
    const random = (bo) => {
        const text = "My porta folio"
        const rotar = () => (Math.floor(Math.random() * 15)) * -.01
        const delay = () => (Math.floor(Math.random() * 5))
        let c = 0;
        return text.split(" ").map(w => {
            c++;
            return <b key={c}>
                {w.split("").map(t => {
                    c++
                    return <span key={c} className="span-not txt-tit" style={{ transform: `rotate(${!bo ? rotar() : 1}turn)`, animationDelay: `${delay()}s` }} >{t}</span>
                })}
            </b>
        })
    }
    let [act1, setact1] = useState("");
    let [act2, setact2] = useState("");
    let [act3, setact3] = useState("");
    let [act4, setact4] = useState("");
    let [act5, setact5] = useState("");
    let [menu, setmenu] = useState("");
    return (
        <header>
            <div className={`head-nav ${menu}`}>
                <nav>
                    <div>
                        <button 
                            className={act1}
                            onClick={() => {
                                settr(desliz); setCla('1')
                            }}
                        >
                            <h4><span>Informacion</span></h4>
                            <p 
                                onMouseOut={()=>{setact1("")}}
                                onMouseOver={()=>{setact1("act")}}
                            >Informacion</p>
                        </button>
                        <button 
                            className={act2}
                            onClick={() => {
                                settr("-500"); setCla('2')
                            }}
                        >
                            <h4><span>Habilidades</span></h4>
                            <p 
                                onMouseOut={()=>{setact2("")}}
                                onMouseOver={()=>{setact2("act")}}
                            >Habilidades</p>
                        </button>
                        <button 
                            className={act3}
                            onClick={() => {
                                settr("-600"); setCla('3')
                            }}
                        >
                            <h4><span>Proyectos</span></h4>
                            <p 
                                onMouseOut={()=>{setact3("")}}
                                onMouseOver={()=>{setact3("act")}}
                            >Proyectos</p>
                        </button>
                        <button 
                            className={act4}
                            onClick={() => {
                                settr("-700"); setCla('4')
                            }}
                        >
                            <h4><span>Curriculum</span></h4>
                            <p 
                                onMouseOut={()=>{setact4("")}}
                                onMouseOver={()=>{setact4("act")}}
                            >Curriculum</p>
                        </button>
                        <button 
                            className={act5}
                            onClick={() => {
                                settr(desliz); setCla('5')
                            }}
                        >
                            <h4><span>Contacto</span></h4>
                            <p 
                                onMouseOut={()=>{setact5("")}}
                                onMouseOver={()=>{setact5("act")}}
                            ><a href="https://api.whatsapp.com/send?phone=527491086498&text=Hola">Contacto</a></p>
                        </button>
                    </div>
                </nav>
                <button onClick={()=>{setmenu(menu==="activo" ? "" : "activo")}}>
                    <GiHamburgerMenu></GiHamburgerMenu>
                </button>
            </div>
            <picture>
                <img src={univers} alt="universo" />
            </picture>
            <div className="opacidad-header header3">
                <section>
                    <div>
                        <nav>
                            {random(stl2)}
                        </nav>
                        <button
                            onClick={() => { settr(desliz); setCla('1') }}
                            onMouseEnter={() => { setstl2(1); setstl("1") }}
                            onMouseLeave={() => { setstl2(0); setstl(".5") }}
                        >
                            <FiChevronDown></FiChevronDown>
                        </button>
                    </div>
                </section>
            </div>
            <span className="opacidad" style={{ opacity: stl }}></span>
        </header>
    )
}
