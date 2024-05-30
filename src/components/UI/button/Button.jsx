import React from 'react';
import './button.css'

const Button = ({ type, name, label, icon, onClick }) => {
  return (
 <div className='btnmain'>
       <button className='uni-btn btn1' type={type} name={name} onClick={onClick}>

  {label}
      {icon && <span className="icon">{icon}</span>}
    </button>
 </div>
  );
};

export default Button;
