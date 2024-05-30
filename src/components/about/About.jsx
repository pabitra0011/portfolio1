import React from 'react'
import './about.css'
import { useTheme } from '../../context/ThemeContext'

import Button from '../UI/button/Button'
import about1img from '../../assets/about.png'



export const About = () => {
const {theme} = useTheme();

  return (
    <div id='aboutSec' className={ 'about-compo ' + (theme === 'light' ? 'lightThemebg' : 'darkThemebg') }>
        
        <div className='about-container'>
            {/* left  */}
             <div className='about-img'>
                <img src={about1img} alt='abimg' />
             </div>
            {/* right */}
             <div className='about-right '>
              <h1 className={theme === 'light' ? 'lightthemTxt' : 'darkthemTxt'}>About Me!</h1>
              <h2>💻A Full Stack Developer from  INDIA 💻</h2>
              {/* <span>I dfks dkffd ks df jskdfj sdkfj</span> */}
              <p className={theme === 'light' ? 'lightthemTxt' : 'darkthemTxt'}>I am a Proffesional full stack web developer.am a Proffesional full stack web developer am a Proffesional full stack web developer</p>
              <Button
                type="button"
                name="myButton"
                label="Portfolio"
                className='lbtn'
              />
             </div>
        </div>
    </div>
  )
}
