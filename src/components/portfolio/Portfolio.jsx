import React from 'react'
import './Portfolio.css'

import portimg1 from '../../assets/projects/taskmngr.png'
import portimg2 from '../../assets/projects/couplecanvas.png'

import { FaGitAlt, FaBootstrap, FaServer, FaGithub, FaReact, FaNode, FaHtml5, FaCss3 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiFirebase, SiMongodb, SiMysql, SiTypescript, } from "react-icons/si";
import Button from '../../components/UI/button/Button';
import { FaPersonWalkingArrowRight } from "react-icons/fa6";
import Viewbtn from '../UI/Viewbtn/Viewbtn';
import { useTheme } from '../../context/ThemeContext';

const projects = [
  {
    id: 1,
    img: portimg1,
    name: "SwiftTasker, all in one task management application.",
    desc: "We ensure that all our web development and mobile application development projects are not only engineered using the most cutting edge technologies, but also they're created through a human-centred design process.",
    liveLink: 'abc',
    tech: [
      {
        techName: 'React',
        icon: <FaReact />,
        color: 'sky',
      },
      {
        techName: 'Tailwind',
        icon: <RiTailwindCssFill />,
        color: '#06B6D4 '
      },
      {
        techName: 'NodeJs',
        icon: <FaNode />,
        color: 'green'
      },
      {
        techName: 'MongoDB',
        icon: <SiMongodb />,
        color: 'green',
      },
    ]
  },
  {
    id: 2,
    img: portimg2,
    name: "Couple Canvas",
    desc: "We ensure that all our web development and mobile application development projects are not only engineered using the most cutting edge technologies, but also they're created through a human-centred design process.",
    liveLink: 'abc',
    tech: [
      {
        techName: 'HTML',
        icon: <FaHtml5 />,
        color: 'red',
      },
      {
        techName: 'React',
        icon: <FaReact />,
        color: '#61DAFB',
      },
      {
        techName: 'Tailwind',
        icon: <RiTailwindCssFill />,
        color: '#06B6D4 '
      },
    
    ]
  },
]



const Portfolio = () => {
const {theme} = useTheme()

  const handleCLick = () => {
    //handlel click 

  }

  return (
    <section id='projectSec' className={ 'portfolio-sec ' + (theme === 'light' ? 'lightThemebg' : 'darkThemebg') }>

    <div  className='portfolio-main'>
      <h1  className={theme === 'light' ? 'lightthemTxt' : 'darkthemTxt'}>My Projects</h1>
     <p  className={theme === 'light' ? 'lightthemTxt' : 'darkthemTxt'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolore exercitationem amet numquam quibusdam cupiditate accusamus vero similique sequi ullam?</p>
      
      <div className='portfolio-container'>
        {projects.map((project, i) => (
          <div key={i} className={`portfolio-item ${i % 2 === 0 ? 'even' : 'odd'}`}>
            {/* img */}
            <div className='prj-img'>
              <img src={project.img} alt='projimgs' />
            </div>

            {/* proj desc */}
            <div className='project-desc'>
              <h2  className={theme === 'light' ? 'lightthemTxt' : 'darkthemTxt'}>{project.name}</h2>
              <p  className={theme === 'light' ? 'lightthemTxt' : 'darkthemTxt'}>{project.desc}</p>
              <div className='project-stack'>
                {project.tech.map((t, i) => (
                  <li key={i}>
                    <span style={{ color: t.color}}>{t.icon}</span>
                    <span className={ 'techname ' + (theme === 'light' ? 'lightthemTxt' : 'darkthemTxt') } style={{textShadow: `${t.color} 1.95px 1.95px 3px` }}>{t.techName}</span> 
                  </li>
                ))}

              </div>

              {/* <div className='project-btn'>
                <button>Live Preiew </button>
      
              </div> */}
             <div className='live-btns'>
             <Button
                type="button"
                name="myButton"
                label="Live View"
                className='lbtn'
                // icon={}
                onClick={handleCLick}
              />
               <Button
                type="button"
                name="myButton"
                label="Source code"
                className='lbtn'
                // icon={}
                onClick={handleCLick}
              />
             </div>
            </div>
          </div>
        ))}
      </div>
      <button>view more</button>
      {/* <Viewbtn
                type="button"
                name="viewButton"
                label=" View All"
                icon={<FaPersonWalkingArrowRight />}
                onClick={handleCLick}
              /> */}

    </div>

    </section>
  )
}

export default Portfolio