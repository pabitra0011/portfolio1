import React, { useState } from 'react';
import './Contact.css'; // Import the CSS file for styling
import { useTheme } from '../../context/ThemeContext';

const Contact = () => {
const {theme} = useTheme();

  const [topOpen, setTopOpen] = useState(false);
  const [messagePull, setMessagePull] = useState(false);

  const handleClick = (event) => {
    const clickedElementId = event.target.id;
    if (['name', 'email', 'phone', 'messarea', 'address'].includes(clickedElementId)) {
      return;
    }
    setTopOpen(prevState => !prevState);
    setMessagePull(prevState => !prevState);
  };



  return (
    <section id='contactSec' className={ 'contact-sec ' + (theme === 'light' ? 'lightThemebg' : 'darkThemebg') }>

    <div className='contact-comp'>
      <div className='contact-sec-desc'>
        <h1 className={theme === 'light' ? 'lightthemTxt' : 'darkthemTxt'}>Reach Me Here</h1>
        <p className={theme === 'light' ? 'lightthemTxt' : 'darkthemTxt'}>Message me here and fdfj d your jsjdi alibjd okeis jksies jdkfd sok tist s llioeij </p>
      </div>

      {/* message card  */}
      <div className="frame" id="frame" onClick={handleClick}>
        <div id="button_open_envelope">
          <span> Email me</span>
        </div>
        <div className={`message ${messagePull ? 'pull' : ''}`}>
          <form method="post" action="contact.php">
            <input type="text" name="name" id="name" placeholder=" Name* " required />
            <input type="email" name="email" id="email" placeholder=" Email* " required pattern="^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$" />
            <input type="text" name="phone" id="phone" placeholder=" Phone (optional)" autoFocus />
            <textarea name="message" id="messarea" placeholder=" Message* " required></textarea>
            <input type="text" name="address" id="address" style={{ display: 'none' }} />
            <input type="submit" value="Send" id="send" />
          </form>
        </div>
        <div className="bottom"></div>			
        <div className="left"></div>
        <div className="right"></div>
        <div className={`top ${topOpen ? 'open' : ''}`} id="top"></div>
      </div>
    </div>


    </section>
  );
}

export default Contact;
