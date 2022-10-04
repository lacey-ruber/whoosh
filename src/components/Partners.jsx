import React from 'react'
import { dataPartners } from '../api/dataPartners'
import briefcase from '../assets/img/briefcase.png'

import { A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss'
import 'swiper/scss/a11y'

const Partners = () => {
  return (
    <div className='partners'>
      <div className='partners__container container'>
        <div className='partners__top'>
          <h1 className='partners__top-title'>Our Partners</h1>
          <a href='/' className='partners__top-btn'>
            <img src={briefcase} alt='briefcase' />
            <p>Let's collaborate</p>
          </a>
        </div>
        <Swiper
          modules={[A11y]}
          spaceBetween={88}
          slidesPerView={5}
          loop={true}
          loopedSlides={5}
          breakpoints={{
            1068: {
              slidesPerView: 5,
              spaceBetween: 80,
            },
            769: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
            576: {
              slidesPerGroup: 1,
              slidesPerView: 2,
              spaceBetween: 30,
              centeredSlides: true,
            },
            430: {
              slidesPerGroup: 1,
              slidesPerView: 2,
              spaceBetween: 30,
              centeredSlides: true,
            },
            1: {
              slidesPerGroup: 1,
              slidesPerView: 2,
              spaceBetween: 30,
              centeredSlides: true,
            },
          }}
        >
          {dataPartners.map((item) => (
            <SwiperSlide key={item.id}>
              <div className='partners__bottom-item'>
                <img src={item.imagePath} alt={item.title} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Partners
