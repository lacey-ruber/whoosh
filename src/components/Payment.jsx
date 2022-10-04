import React from 'react'
import box from '../assets/img/icons/box.svg'
import { dataPayment } from '../api/dataPayment'

import { Navigation, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/a11y'

const Payment = () => {
  return (
    <div className='payment'>
      <div className='payment__container container'>
        <h1 className='payment__title'>Payment methods</h1>
        <Swiper
          modules={[Navigation, A11y]}
          navigation
          spaceBetween={104}
          slidesPerView={6}
          loop={true}
          loopedSlides={6}
          breakpoints={{
            1200: {
              slidesPerView: 6,
              spaceBetween: 104,
            },
            930: {
              slidesPerView: 5,
              spaceBetween: 80,
            },
            680: {
              // slidesPerGroup: 1,
              slidesPerView: 4,
              spaceBetween: 64,
              // centeredSlides: true,
            },
            540: {
              slidesPerGroup: 1,
              slidesPerView: 3,
              spaceBetween: 24,
              centeredSlides: true,
            },
            1: {
              slidesPerGroup: 1,
              slidesPerView: 2,
              spaceBetween: 24,
              centeredSlides: true,
            },
          }}
        >
          {dataPayment.map((item) => (
            <SwiperSlide key={item.id}>
              <div className='payment-slider__slide'>
                <img src={item.imagePath} alt={item.title} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='icon-box'>
        <img src={box} alt='box' />
      </div>
    </div>
  )
}

export default Payment
