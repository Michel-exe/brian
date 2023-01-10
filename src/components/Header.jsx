import univers from "../media/univers.jpg"
import {FiChevronDown} from "react-icons/fi"
import React, { useState } from 'react'

const desliz='-299'
export const Header = ({settr,setCla}) => {
    let [stl, setstl] = useState(".5");
    const span = ()=>{
        const text= "Click-hacia-abajo"
        let c=0;
        let time=0.0;
        return text.split("").map(t =>{
            c++;
            time=time+0.3;
            return <span key={c} className="span-not" style={{animationDelay: `${time}s`}} >{t}</span>
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
    onClick={()=>{settr(desliz);setCla('1')}}
    onMouseEnter={()=>{ setstl("1") }}
    onMouseLeave={()=>{ setstl(".5") }}
                    >
                        <FiChevronDown></FiChevronDown>
                    </button>
                </h3>
            </section>
        </div>
        <span className="opacidad" style={{opacity: stl}}></span>
    </header>
  )
}
export const Header2 = ({settr,setCla}) => {
    let [stl, setstl] = useState(".5");
    let [stl2, setstl2] = useState(0);
    const random = (bo) =>{
        const text= "Click-hacia-abajo"
        const top = ()=> (Math.floor(Math.random()*window.innerHeight))-(window.innerHeight)/2
        const left = ()=> (Math.floor(Math.random()*(window.innerWidth))-((window.innerWidth)/2))
        const delay= ()=> (Math.floor(Math.random()*5))
        let c=0;
        return text.split("").map(t =>{
            c++;
            return <span key={c} className="span-not" style={!bo ? {transform: `translate(${left()}px,${top()}px)`,animationDelay:`${delay()}s`}: {}} >{t}</span>
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
    onClick={()=>{settr(desliz);setCla('1')}}
    onMouseEnter={()=>{ setstl2(1);setstl("1") }}
    onMouseLeave={()=>{ setstl2(0);setstl(".5") }}
                    >
                        <FiChevronDown></FiChevronDown>
                    </button>
                </div>
            </section>
        </div>
        <span className="opacidad" style={{opacity: stl}}></span>
    </header>
  )
}
export const Header3 = ({settr,setCla}) => {
    let [stl, setstl] = useState(".5");
    let [stl2, setstl2] = useState(0);
    const random = (bo) =>{
        const text= "My porta folio"
        const rotar= ()=> (Math.floor(Math.random()*15))*-.01
        const delay= ()=> (Math.floor(Math.random()*5))
        let c=0;
        return text.split(" ").map(w =>{
            c++;
            return <b key={c}>
                {w.split("").map(t =>{
                    c++
                    return <span key={c} className="span-not txt-tit" style={{transform: `rotate(${!bo ? rotar() : 1}turn)`,animationDelay:`${delay()}s`}} >{t}</span>
                })}
            </b>
        })
    }
  return (
    <header>
        <div className="head-nav">
            <nav>
                <button
                    onClick={()=>{
                        settr(desliz);setCla('1')
                    }}
                    >Informacion</button>
                <button
                    onClick={()=>{
                        settr("-500");setCla('2')
                    }}
                    >Habilidades</button>
                <button
                    onClick={()=>{
                        settr("-600");setCla('3')
                    }}
                    >Proyectos</button>
                <button
                    onClick={()=>{
                        settr("-700");setCla('4')
                    }}
                    >Curriculum</button>
                <button
                    onClick={()=>{
                        settr(desliz);setCla('5')
                    }}
                    >Contacto</button>
            </nav>
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
    onClick={()=>{settr(desliz);setCla('1')}}
    onMouseEnter={()=>{ setstl2(1);setstl("1") }}
    onMouseLeave={()=>{ setstl2(0);setstl(".5") }}
                    >
                        <FiChevronDown></FiChevronDown>
                    </button>
                </div>
            </section>
        </div>
        <span className="opacidad" style={{opacity: stl}}></span>
    </header>
  )
}
