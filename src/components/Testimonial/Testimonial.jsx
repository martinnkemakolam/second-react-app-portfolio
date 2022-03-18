import React from 'react'
import './Testimonial.css'
import avater1 from '../../assets/avatar1.jpg'
import avater2 from '../../assets/avatar2.jpg'
import avater3 from '../../assets/avatar3.jpg'
import avater4 from '../../assets/avatar4.jpg'


import { Pagination, Navigation} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    name: 'martin',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sint excepturi, quasi voluptatum non quas.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sint excepturi, quasi voluptatum non quas.',
    avater: avater1,
  },
  {
    name: 'joe',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sint excepturi, quasi voluptatum non quas.consectetur adipisicing elit. Ullam sint excepturi, quasi voluptatum non quas',
    avater: avater2,
  },
  {
    name: 'david',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sint excepturi, quasi voluptatum non quas.sint excepturi, quasi voluptatum non quas.',
    avater: avater3,
  },
  {
    name: 'david',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sint excepturi, quasi voluptatum non quas.',
    avater: avater4,
  }
]
const Testimonial = () => {
  return (
    <section id="#Testimonial">
      <h5>Reviews from clients</h5>
      <h2>Testimonial</h2>
      <Swiper className="container testimonial_container"
      modules={[Navigation, Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avater, name, review}, index) => {
            return(
              <SwiperSlide key={index} className="testimonial">
              <div className="client_avater">
                <img src={avater} alt="" />
              </div>
              <h5 className='client_name'>{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonial