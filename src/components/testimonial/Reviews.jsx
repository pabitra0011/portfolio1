import React from 'react'
import './review.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

// import required modules
import { EffectCube, Pagination } from 'swiper/modules';
import { FaEnvelopeOpenText } from "react-icons/fa6";
import { useTheme } from '../../context/ThemeContext';
import Button from '../UI/button/Button';
import reviewpng from '../../assets/reviewp2.png'

const reviews = [
    {
        id: 1,
        name: 'Jhon Doe',
        deg: 'CEO',
        desc: 'My Name is ELon mask , i am ceo of spacex and nuralink , I work with mr. rakesh he is a pro developer with high level world class skillset and work.',

        img: 'https://www.shutterstock.com/image-photo/happy-mid-aged-business-man-600nw-2307212331.jpg ',

    },
    {
        id: 2,
        name: 'Jhon Doe',
        deg: 'CEO',
        desc: 'This is orjf skdjf kjd fksjfier ekjr ke rekl jrkerle rkerejrklerjke rkerj lke rkejrkejrlekjr klerlkejrelkjrlkejrekjrejle kej rlekjrlekr',

        img: 'https://www.shutterstock.com/image-photo/happy-mid-aged-business-man-600nw-2307212331.jpg ',
        
    },
    {
        id: 3,
        name: 'Jhon Doe',
        deg: 'CEO',
        desc: 'This is orjf skdjf kjd fksjfier ekjr ke rekl jrkerle rkerejrklerjke rkerj lke rkejrkejrlekjr klerlkejrelkjrlkejrekjrejle kej rlekjrlekr',

        img: 'https://www.shutterstock.com/image-photo/happy-mid-aged-business-man-600nw-2307212331.jpg ',
        
    },
    {
        id: 4,
        name: 'Jhon Doe',
        deg: 'CEO',
        desc: 'This is orjf skdjf kjd fksjfier ekjr ke rekl jrkerle rkerejrklerjke rkerj lke rkejrkejrlekjr klerlkejrelkjrlkejrekjrejle kej rlekjrlekr',

        img: 'https://www.shutterstock.com/image-photo/happy-mid-aged-business-man-600nw-2307212331.jpg ',
        
    },
    {
        id: 5,
        name: 'Jhon Doe',
        deg: 'CEO',
        desc: 'This is orjf skdjf kjd fksjfier ekjr ke rekl jrkerle rkerejrklerjke rkerj lke rkejrkejrlekjr klerlkejrelkjrlkejrekjrejle kej rlekjrlekr',

        img: 'https://www.shutterstock.com/image-photo/happy-mid-aged-business-man-600nw-2307212331.jpg ',
        
    },
    {
        id: 6,
        name: 'Jhon Doe',
        deg: 'CEO',
        desc: 'This is orjf skdjf kjd fksjfier ekjr ke rekl jrkerle rkerejrklerjke rkerj lke rkejrkejrlekjr klerlkejrelkjrlkejrekjrejle kej rlekjrlekr',

        img: 'https://www.shutterstock.com/image-photo/happy-mid-aged-business-man-600nw-2307212331.jpg ',
        
    },
]

const Reviews = () => {
const {theme} = useTheme();

  return (
    <section className={ 'review-sec ' + (theme === 'light' ? 'lightThemebg' : 'darkThemebg') }>

    <div className='review-cont'>
    
    <div className="review-desc">
    <h1 className={theme === 'light' ? 'lightthemTxt' : 'darkthemTxt'}>What our client says</h1>
    <p className={theme === 'light' ? 'lightthemTxt' : 'darkthemTxt'}>We work with worlds best clients, we delever world class projects to our client, here some of our clients gratitude to us.</p>
    <Button
                type="button"
                name="myButton"
                label="See All Reviews"
                className='lbtn'
              />
                  <div className='review-png'>
      <img src={reviewpng} alt='a' />
     </div>
    </div>
 
    <div className='review'>
        
        <Swiper
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        {
            reviews.map((review,i) => (
                <SwiperSlide className={'slide' + (theme==='light'? ' ' : 'boxShadow')} key={i}>
               <FaEnvelopeOpenText className='icon'/>
               <p className={theme === 'light' ? 'lightthemTxt' : 'darkthemTxt'}>{review.desc}</p>
               <div className='review-img'><img src={review.img} alt='a'/></div>
               <h2 className={theme === 'light' ? 'lightthemTxt' : 'darkthemTxt'}>{review.name}</h2>
               <p className={theme === 'light' ? 'lightthemTxt' : 'darkthemTxt'}>{review.deg}</p>
              </SwiperSlide>  
            ))
        }
      </Swiper>

    </div>
    </div>
    </section>
  )
}

export default Reviews