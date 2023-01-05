import React, { useState } from 'react'
import nana from '../media/nana.jpg'
import google from '../media/google.png'
import sushy from '../media/sushy.png'
import cal from '../media/cal.png'
import {FaReact,FaCss3} from 'react-icons/fa'
import {IoLogoJavascript,IoLogoSass,IoLogoNodejs} from 'react-icons/io'
import {ImHtmlFive} from 'react-icons/im'
import {BiGitBranch,BiCodeCurly} from 'react-icons/bi'
import {HiArrowDown, HiArrowUp,HiOutlineChevronLeft,HiOutlineChevronRight} from 'react-icons/hi'
import {FaJava,FaAngleLeft,FaAngleRight} from 'react-icons/fa'
import {SiTypescript} from 'react-icons/si'
import {GrMysql} from 'react-icons/gr'
import {DiPhp} from 'react-icons/di'

export const Works = ({settr,setCla}) => {
    const com = (tit,des,img,ico)=>{
        return (
            <section>
                <div>
                    <picture>
                        <img src={img} alt="" />
                    </picture>
                    <div>
                        <h3>{tit}</h3>
                        <h4>{des}</h4>
                        <ul>
                            {ico.map(i =>{
                                return <li>{i}</li>
                            })}
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
    let [mov,setMov] = useState(0);
  return (
    <div className='works'>
        <div className="cont">
            <h2>Trabajos</h2>
            <HiArrowUp onClick={()=>{settr('-500');setCla('2')}} className='dir arriba'></HiArrowUp>
            <HiArrowDown onClick={()=>{settr('-500');setCla('2')}} className='dir abajo'></HiArrowDown>
            <div className="sli">
                <main style={{transform:`translateX(${mov}%)`}}>
                    {com("Sushy Maki","Es una pagina web donde las personas pueden ordenar mediante una aplicacion web, la orden es enviada por whatsapp.",sushy,[<IoLogoJavascript/>,<IoLogoSass/>,<FaCss3/>,<ImHtmlFive/>])}
                    {com("AGUA","Una pagina donde se podian cotizar pagos de agua, realizar los pagos, dar de alta un servicio, cotizar etc.",nana,[<IoLogoJavascript/>,<IoLogoSass/>,<FaCss3/>,<ImHtmlFive/>,<GrMysql/>,<DiPhp/>])}
                    {com("Calendario","Calendario donde se pueden agendar fechas ya sea automaticas o por preferencias de la persona",cal,[<IoLogoJavascript/>,<IoLogoSass/>,<FaCss3/>,<ImHtmlFive/>,<GrMysql/>,<DiPhp/>])}
                    {com("Extenciones de Google","Extenciones para ayudar me a hacer trabajos mas rapidos",google,[<IoLogoJavascript/>,<IoLogoSass/>])}
                </main>
                <nav>
                    <HiOutlineChevronLeft
                        onClick={()=>{
                            setMov(mov!=0 ? mov+25 : -75)
                        }}
                    ></HiOutlineChevronLeft>
                    <HiOutlineChevronRight
                        onClick={()=>{
                            setMov(mov!=-75 ? mov-25 : 0)
                        }}
                    ></HiOutlineChevronRight>
                </nav>
            </div>
        </div>
    </div>
  )
}
