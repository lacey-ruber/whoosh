import React from 'react'
import video from '../assets/img/video.png'
import DeliveryForm from './DeliveryForm'

const Home = () => {
  return (
    <div className='home'>
      <div className='home__container container'>
        <div className='home__body'>
          <div className='home__info info'>
            <div className='info__description'>
              <h1 className='info__title'>
                Our service started
                <br />
                work in New York
              </h1>
              <p className='info__text'>
                We make delivery exactly at the time you need - we can start to
                fulfill the order a few minutes after it arrives, or we can
                deliver on a specific day and hour.
              </p>
              <a href='/' className='info__read-more'>
                <span>Read more</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='5'
                  height='8'
                  viewBox='0 0 5 8'
                  fill='none'
                >
                  <path
                    d='M4.72351 3.30468L1.61047 0.269411C1.24206 -0.0898037 0.644732 -0.0898037 0.276314 0.269411C-0.0921045 0.628626 -0.0921046 1.21103 0.276314 1.57024L2.76841 4.00008L0.276486 6.42976C-0.0919318 6.78897 -0.0919317 7.37137 0.276486 7.73059C0.644904 8.0898 1.24223 8.0898 1.61065 7.73059L4.72369 4.69531C4.92006 4.50384 5.01177 4.24896 4.99879 3.99827C5.01075 3.74869 4.91899 3.49527 4.72351 3.30468Z'
                    fill='#2B6BF3'
                  />
                </svg>
              </a>
            </div>
            <div className='info__video'>
              <h3 className='info__video-title'>How it works</h3>
              <div className='info__video-image'>
                <img src={video} alt='video' />
                <svg
                  width='96'
                  height='96'
                  viewBox='0 0 96 96'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle
                    cx='48'
                    cy='48'
                    r='48'
                    fill='black'
                    fillOpacity='0.32'
                  />
                  <path
                    d='M37 35.6176C37 32.3943 40.6174 30.4948 43.2709 32.3248L61.2254 44.7071C63.5308 46.2971 63.5308 49.7029 61.2254 51.2929L43.2709 63.6752C40.6174 65.5052 37 63.6057 37 60.3824V35.6176Z'
                    fill='white'
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className='home__order-panel'>
            <DeliveryForm />
            <div className='home__order-search'>
              <h3>Track a package</h3>
              <div className='home__order-search_input'>
                <label htmlFor='search'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                    fill='none'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M13.0909 6.54545C13.0909 7.98177 12.6283 9.31003 11.8439 10.3894L16 14.5455L14.5455 16L10.3894 11.8439C9.31004 12.6283 7.98178 13.0909 6.54545 13.0909C2.9305 13.0909 0 10.1604 0 6.54545C0 2.9305 2.9305 0 6.54545 0C10.1604 0 13.0909 2.9305 13.0909 6.54545ZM6.5 11C9 11 11 9.09091 11 6.54545C11 4 9 2 6.54545 2C4.09091 2 2 4 2 6.54545C2 9.09091 4 11 6.5 11Z'
                      fill='#CCCCCC'
                    />
                  </svg>
                </label>
                <input
                  type='text'
                  placeholder='Enter code'
                  id='search'
                  name='search'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
