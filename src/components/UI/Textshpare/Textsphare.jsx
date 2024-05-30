import React ,{useEffect} from 'react'
import TagCloud from 'TagCloud'
import './Textsphare.css'


const Textsphare = () => {

    useEffect(()=> {
        return()=>{
            const container = ".tagcloud"
            const texts = [
                "HTML",
                "CSS",
                "Tailwind",
                "REACT",
                "NODE JS",
                "WEB DEVELOPMENT",
                "JAVASCRIPT",
                "MongoDB",
                "GITHUB",
                "GIT"
            ];
            const options = {
                radius: 200,
                maxSpeed: 'normal',
                initSpeed: 'normal',
                keep:true,
            };

            TagCloud(container, texts, options);
        }
    },[])


  return (
    <div className='text-sphere'>
        <span className='tagcloud'></span>
    </div>
  )
}

export default Textsphare