import React from 'react'
import CTA from './CTA'
import "./header.css"
import HeaderSocial from './HeaderSocial'
import portrait from "../../assets/naruto.webp"
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Bao</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />
        <HeaderSocial/>
        <div className='me'>
            <img src={portrait} alt="my portrait" />
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
        
      </div>
    </header>
  )
}

export default Header