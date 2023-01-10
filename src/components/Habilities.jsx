// import React, { useState } from 'react'
import {FaReact,FaCss3} from 'react-icons/fa'
import {IoLogoJavascript,IoLogoSass,IoLogoNodejs} from 'react-icons/io'
import {ImHtmlFive} from 'react-icons/im'
import {BiGitBranch,BiCodeCurly} from 'react-icons/bi'
import {HiArrowDown, HiArrowUp} from 'react-icons/hi'
import {FaJava,FaAssistiveListeningSystems} from 'react-icons/fa'
import {SiTypescript} from 'react-icons/si'
import {GrMysql} from 'react-icons/gr'
import {DiPhp} from 'react-icons/di'
import {CgFileDocument} from 'react-icons/cg'
import {RxSpeakerLoud} from 'react-icons/rx'

export const Habilities = ({settr,setCla}) => {
    const com = (tit,col,com) =>{
        return (
            <section 
                style={{background:`linear-gradient(-180deg, #00000000 78%, #000 78%)`}}
            >
                <div className="rgb"></div>
                <span>
                    {com}
                </span>
                <h3 
                    // style={{color:col}}
                >{tit}</h3>
            </section>
        )
    }
  return (
    <div className='habil'>
        <div className="cont">
            <HiArrowUp onClick={()=>{settr('-300');setCla('1')}} className='dir arriba'></HiArrowUp>
            <HiArrowDown onClick={()=>{settr('-600');setCla('3')}} className='dir abajo'></HiArrowDown>
            <h2 className='txt-tit'>Habilities</h2>
            <nav>
                {com("REACT","#61dbfb",<FaReact />)}
                {com("JAVASCRIPT","#fff700",<IoLogoJavascript />)}
                {com("HTML","#e34c26",<ImHtmlFive />)}
                {com("CSS","#264de4",<FaCss3 />)}
                {com("SCSS","#cd6799",<IoLogoSass />)}
                {com("PHP","#cd6799",<DiPhp />)}
                {com("MySQL","#cd6799",<GrMysql />)}
                {com("GIT","#ffffff",<BiGitBranch />)}
                {com("ESCUCHAR EN INGLES","#ffffff",<FaAssistiveListeningSystems />)}
                {com("HABLAR EN INGLES","#ffffff",<RxSpeakerLoud />)}
                {com("ESCRIBIR EN INGLES","#ffffff",<CgFileDocument />)}
                {com("JAVA","#ffffff",<FaJava />)}
                {com("C","#ffffff",<BiCodeCurly />)}
                {com("Node","#3c873a",<IoLogoNodejs />)}
                {com("TypeScript","#007acc",<SiTypescript />)}
            </nav>
        </div>
    </div>
  )
}
