import React from 'react'
import {TbBrandGithub} from 'react-icons/tb'
import {FaFacebookF,FaWhatsapp} from 'react-icons/fa'
import {GrInstagram,GrDocumentPdf} from 'react-icons/gr'
import {FiMail,FiChevronDown} from 'react-icons/fi'
import {AiOutlinePhone} from 'react-icons/ai'
import {HiArrowDown, HiArrowUp} from 'react-icons/hi'
import user from '../media/user.png'

export const Presentacion = ({settr,setCla}) => {
    const com = (tit,com) =>{
        return <a href="#" tit={tit}>{com}</a>
    }
  return (
    <div className='pres'>
        <section className='fondo'>
            <div className="pres-cont animado">
                <section>
                    <h1>Mi Portafolio</h1>
                        {/* <FiChevronDown className='abajo'></FiChevronDown> */}
                        <HiArrowUp onClick={()=>{settr('0');setCla('0')}} className='dir arriba'></HiArrowUp>
                        <HiArrowDown onClick={()=>{settr('-500');setCla('2')}} className='dir abajo'></HiArrowDown>
                    <div>
                        <picture>
                            {/* <img src={user} alt="Yo" /> */}
                        </picture>
                        <section>
                            <div>
                                <h2>Mi informacion</h2>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa soluta illum odit, placeat, perspiciatis quasi ducimus rem amet mollitia cumque dolore exercitationem, voluptatibus ea voluptates assumenda. Esse hic aperiam repudiandae consectetur debitis doloremque, atque, quasi architecto maxime, dolore a odio.</p>
                            </div>
                            <nav>
                                {com("Github",<TbBrandGithub/>)}
                                {com("Facebook",<FaFacebookF/>)}
                                {com("Instagram",<GrInstagram/>)}
                                {com("Whatsapp",<FaWhatsapp/>)}
                                {com("Mail",<FiMail/>)}
                                {com("Telefono",<AiOutlinePhone/>)}
                                {com("Curriculum",
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-width="2" d="M4.99787498,8.99999999 L4.99787498,0.999999992 L19.4999998,0.999999992 L22.9999998,4.50000005 L23,23 L4,23 M18,1 L18,6 L23,6 M3,12 L3.24999995,12 L4.49999995,12 C6.5,12 6.75,13.25 6.75,14 C6.75,14.75 6.5,16 4.49999995,16 L3.24999995,16 L3.24999995,18 L3,17.9999999 L3,12 Z M9.5,18 L9.5,12 C9.5,12 10.4473684,12 11.2052633,12 C12.3421053,12 13.5,12.5 13.5,15 C13.5,17.5 12.3421053,18 11.2052633,18 C10.4473684,18 9.5,18 9.5,18 Z M16.5,19 L16.5,12 L20.5,12 M16.5,15.5 L19.5,15.5"></path></svg>
                                )}
                            </nav>
                        </section>
                    </div>
                </section>
            </div>
        </section>
    </div>
  )
}
