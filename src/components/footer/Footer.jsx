import React from 'react'
import './footer.css'

import { FaGit, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { useTheme } from '../../context/ThemeContext'



export const Footer = () => {
  const {theme} = useTheme();

  return (
    <section className={ 'footer-sec ' + (theme === 'light' ? 'lightThemebg' : 'darkThemebg') }>

    <div className='footer'>

      <div className="waves">
        <div className={ 'wave ' + (theme === 'light' ? 'lightThemebg' : 'darkThemebg') } id="wave1"></div>
        <div className='wave' id="wave2"></div>
        <div className='wave' id="wave3"></div>
        <div className='wave' id="wave4"></div>
      </div>

        <ul className='social-icons'>
          <li><FaGithub className='icon g' /></li>
          <li><FaInstagram className='icon i' /></li>
          <li><FaLinkedin className='icon l' /></li>
        </ul>
        <ul className='fo-menu'>
          <li><a>Home</a></li>
          <li><a>About</a></li>
          <li><a>Services</a></li>
          <li><a>projects</a></li>
        </ul>
        <p>Design by @robo</p>
    </div>

    </section>
  )
}
