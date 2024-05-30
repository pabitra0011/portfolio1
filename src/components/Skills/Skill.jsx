import React, { useState } from 'react';
import './Skill.css';

import { FaGitAlt,FaBootstrap, FaServer, FaGithub, FaReact,FaNode,FaHtml5, FaCss3  } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiFirebase, SiMongodb, SiMysql, SiTypescript, } from "react-icons/si";
import Textsphare from '../UI/Textshpare/Textsphare';
import Button from '../UI/button/Button';
import { useTheme } from '../../context/ThemeContext';

const stacks = [
  {
    id: 1,
    name: 'FrontEnd',
    techs: [
      {
        no: 1,
        icon: <FaHtml5 />,
        color: '#e34c26',
      },
      {
         no:2,
         icon: <FaCss3 />,
         color: '#1572B6',
      },
      {
        no: 3,
        icon: <FaReact />,
        color: '#61DAFB',
      },
      {     
        no:4,
        icon:<RiTailwindCssFill />,
        color: '#38b2ac',
       },
       {
        no:5,
        icon: <IoLogoJavascript />,
        color: '#F7DF1E',
       },
      {
        no: 6, 
        icon: <FaBootstrap />,
        color: '#7952b3',
      },
      {
        no:7,
        icon: <FaGithub />,
        color: '#333333',
      }
    ],
  },
  {
    id: 2,
    name: 'Backend',
    techs: [
      {
        no: 1,
        icon: <FaNode />,
        color: '#68A063',
      },
      {
         no:2,
         icon: <SiExpress />,
         color: '#000000',
      },
      {
        no: 3,
        icon: <SiMongodb />,
        color:'#4DB33D',
      },
      {     
        no:4,
        icon:<SiMysql />,
        color: '#4479A1',
       },
       {
        no:5,
        icon: <FaGitAlt />,
        color: '#6D6E70',
       },
      {
        no: 6, 
        icon: <SiFirebase />,
        color:'#FFCA28',
      },
      {
        no:7,
        icon: <SiTypescript />,
        color:'#007ACC',
      }
    ],

  },
  {
    id: 3,
    name: 'Database & Tools',
    techs: [
      {
        no: 1,
        icon: <FaNode />,
        color: '#68A063',
      },
      {
         no:2,
         icon: <SiExpress />,
         color: '#000000',
      },
      {
        no: 3,
        icon: <SiMongodb />,
        color:'#4DB33D',
      },
      {     
        no:4,
        icon:<SiMysql />,
        color: '#4479A1',
       },
       {
        no:5,
        icon: <FaGitAlt />,
        color: '#6D6E70',
       },
      {
        no: 6, 
        icon: <SiFirebase />,
        color:'#FFCA28',
      },
      {
        no:7,
        icon: <SiTypescript />,
        color:'#007ACC',
      }
    ],

  },

]


const Skill = () => {
const [active, setActive ]= useState(true);
const {theme} = useTheme();


  return (
    <section id='skillSec' className={ 'skill-sec ' + (theme === 'light' ? 'lightThemebg' : 'darkThemebg') }>

    <div className='skill-component'>
   <div className='skill-comopnent-desc'>
     <h1 className={theme === 'light' ? 'lightthemTxt' : 'darkthemTxt'}>My Tech Stack</h1>
     <p className={theme === 'light' ? 'lightthemTxt' : 'darkthemTxt'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, perferendis dicta? Odit minima, aperiam eos praesentium magni quo possimus harum accusamus! Voluptatum facere eum dolorum itaque modi nemo sunt veritatis.</p>
     <Button
                type="button"
                name="myButton"
                label="My Techstack"
                className='lbtn'
              />
   <Textsphare className='' />
   </div>
    <div className='skill-compo'>
      {
        stacks.map((item) =>(
          // <div>
           <div key={item.id} className='skill-container'>
              <div className='skill-icon'>
          {
            item.techs.map((tech,i) =>(
              <div key={i} className = 'imgBx' style={{'--i': i+1, border: `2px solid ${tech.color}`}}>
                <div className='icon' style={{ color: tech.color }}>
                  {tech.icon}
                  </div>
              </div>
            ))
          }
        </div>
       
        <div className='tech-content'>
      
        <div className="tech-container">
          <h1 className="neon">_{item.name}</h1>
        </div>
        </div>
      </div>
        ))
      }
      
  </div>
    
  </div>
    </section>
  );
};

export default Skill;
