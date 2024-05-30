import React, { useEffect } from 'react'
import './Hero.css'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import glassemo from '../../assets/glassesimoji.png'
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Textsphare from '../UI/Textshpare/Textsphare'
import { useTheme } from '../../context/ThemeContext'

import user from '../../assets/hero1.png'

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];





const Hero = () => {
  const {theme} = useTheme()
  const transition = { duration: 2, type: "spring" };

  // for aurora effect vals
  const color = useMotionValue(COLORS_TOP[0]);
  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 5,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

// console.log(theme)
  
return(
  <>
  {theme === 'dark' ? 
         <motion.section
        style={{
          backgroundImage,
        }}
        className="relative grid  place-content-center overflow-hidden bg-gray-950 px-4 py-10 text-gray-200"
      >
        {/* main hero content here   */}
        <div className='hero'>
            {/* left side  */}
            <div className='left-side-hero'>
                <div className='intro'>
                  
                    <span>
                        Hey! I This is 
                    </span>
                    <span className=' myname'>Rakesh</span> 
                    <span>
                        Full Stack Developer with high level of experience in front end devlopment with React, Tailwind, Bootstrap,HTML, Css,
                        and back end development with NodeJS, (REST API), MongoDB and MYSql for database, producting the Quality work
                    </span>
                </div>

                <div className='intro-social'>
                    <FaGithub  className=' intro-icon'/>
                    <FaInstagram className='intro-icon'/>
                    <FaLinkedin className=' intro-icon'/>
                </div>
                {/* end social */}
                {/* <Textsphare className='' /> */}
            </div>

            {/* right side  */}
            <div className='intro-right'>
                <img src={user} alt='atroimg' />
            </div>
        </div>
  
        <div className="absolute inset-0 z-0">
          <Canvas>
            <Stars radius={50} count={2500} factor={4} fade speed={2} />
          </Canvas>
        </div>
      </motion.section>

  : 

  <div className='hero'>
  {/* left side  */}
  <div className='left-side-hero'>
      <div className='intro'>
        
          <span>
              Hey! I This is 
          </span>
          <span className=' myname'>Rakesh</span> 
          <span>
              Full Stack Developer with high level of experience in front end devlopment with React, Tailwind, Bootstrap,HTML, Css,
              and back end development with NodeJS, (REST API), MongoDB and MYSql for database, producting the Quality work
          </span>
      </div>

      <div className='intro-social'>
          <FaGithub  className='gh intro-icon'/>
          <FaInstagram className='insta intro-icon'/>
          <FaLinkedin className='link intro-icon'/>
      </div>
      {/* end social */}
      {/* <Textsphare className='' /> */}
  </div>

  {/* right side  */}
  <div className='intro-right'>
      <img src={user} alt='heroimg'/>
  </div>

</div>

  }
  </>
)

    
  
}

export default Hero