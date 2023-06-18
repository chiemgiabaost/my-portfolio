import React from 'react'
import "./about.css"
import naruto from "../../assets/naruto2.jfif";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import EngineeringIcon from '@mui/icons-material/Engineering';
export const About = () => {
  return (
    <section id='About'>
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={naruto} alt="About me Image"></img>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <EmojiEventsIcon className='about__icon' />
              <h5>Experience</h5>
              <small> 1+ Year Experience</small>
            </article>
            <article className='about__card'>
              <EngineeringIcon className='about__icon' />
              <h5>Experience</h5>
              <small> 1+ Year Experience</small>
            </article>
            <article className='about__card'>
              <EngineeringIcon className='about__icon' />
              <h5>Experience</h5>
              <small> 1+ Year Experience</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}
 export default About;