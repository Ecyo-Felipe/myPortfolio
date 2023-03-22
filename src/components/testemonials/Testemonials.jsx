import React from 'react'
import './testemonials.css'
import data from './data'

// import Swiper core and required modules
import { Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles para fazer o carrossel
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const Testemonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>testimonials</h2>

      <Swiper className='container testimonials__container'
      // install Swiper modules
      modules={[ Pagination ]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      
     >
        {
          data.map(({avatar, name, review}, index) => {
            return (<SwiperSlide key={index} className='testimonial'>
          <div className='client__avatar'>
            <img src={avatar} alt='Avatar One'/>
            </div>
            <h5 className='client__name'>{name}</h5>
            <small className='client__review'>
            {review}
            </small>
         </SwiperSlide>)
          })
        }
        
         </Swiper>
    </section>
  )
}

export default Testemonials;