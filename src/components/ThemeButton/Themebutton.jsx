import React from "react";
// import { ReactComponent as Sun } from "./Sun.svg";
// import { ReactComponent as Moon } from "./Moon.svg";
import "./Toggle.css";
import { useTheme } from "../../context/ThemeContext";


const Themebutton = () => {
    const {toggleTheme}=useTheme()


    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onClick={toggleTheme}
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
            {/* <img src={SunSVG} alt="Sun" />
             <img src={MoonSVG} alt="Moon" /> */}
             {/* <Sun />
             <Moon /> */}
            </label>
        </div>
    );
};

export default Themebutton;
