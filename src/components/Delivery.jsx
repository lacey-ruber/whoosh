import React from 'react'
import messenger from '../assets/img/messenger.png'
import support from '../assets/img/support.png'
import briefcase from '../assets/img/briefcase.png'
import box from '../assets/img/icons/box.svg'
import route from '../assets/img/icons/route.svg'

const Delivery = () => {
  return (
    <div className='delivery'>
      <div className='delivery__container'>
        <h1 className='delivery__title'>Express delivery market revolution</h1>
        <h4 className='delivery__subtitle'>
          Express courier service in the city. We are a reliable logistics
          partner for <br /> delivery services for online stores and
          restaurants!
        </h4>
        <div className='delivery__cards cards'>
          <div className='cards__item'>
            <h3 className='cards__title'>Become a Courier</h3>
            <div className='cards__image'>
              <div>
                <img src={messenger} alt='messenger' />
              </div>
              <div className='cards__image-location'>
                <img src={route} alt='route' />
              </div>
            </div>
            <p className='cards__text'>
              You choose a schedule. You decide how much and when to earn.
              Earnings from day one
            </p>
          </div>
          <div className='cards__item'>
            <h3 className='cards__title'>Become a Courier</h3>
            <div className='cards__image'>
              <img src={support} alt='support' />
            </div>
            <p className='cards__text'>
              You choose a schedule. You decide how much and when to earn.
              Earnings from day one
            </p>
          </div>
          <div className='cards__item'>
            <h3 className='cards__title'>Become a Courier</h3>
            <div className='cards__image'>
              <img src={briefcase} alt='briefcase' />
            </div>
            <p className='cards__text'>
              You choose a schedule. You decide how much and when to earn.
              Earnings from day one
            </p>
          </div>
        </div>
      </div>
      <div className='icon-box'>
        <img src={box} alt='box' />
      </div>
    </div>
  )
}

export default Delivery
