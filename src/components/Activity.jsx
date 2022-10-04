import React from 'react'
import onlineCalculator from '../assets/img/icons/online-calculator.svg'
import minimumPaperwork from '../assets/img/icons/minimum-paperwork.svg'
import convenientPayment from '../assets/img/icons/convenient-payment.svg'
import intersect from '../assets/img/intersect.png'

const Activity = () => {
  return (
    <div className='activity'>
      <img className='activity-bg' src={intersect} alt='intersect' />
      <div className='activity__container'>
        <h1 className='activity__title'>What we do</h1>
        <h4 className='activity__subtitle'>
          Express courier service in the city. We are a reliable logistics
          partner for <br /> delivery services for online stores and
          restaurants!
        </h4>
        <div className='activity__cards cards-activity'>
          <div className='cards-activity__item'>
            <div className='cards-activity__item-img'>
              <img src={onlineCalculator} alt='online calculator' />
            </div>
            <span>
              Online<a href='/'>calculation</a>
            </span>
            <p>
              Instant calculation of the cost in the order form, the price is
              updated in the process of filling out the form
            </p>
          </div>
          <div className='cards-activity__item'>
            <div className='cards-activity__item-img'>
              <img src={minimumPaperwork} alt='minimum paperwork' />
            </div>
            <span>Minimum paperwork</span>
            <p>
              You can place an order for courier or freight delivery without
              registration and contract.
            </p>
          </div>
          <div className='cards-activity__item'>
            <div className='cards-activity__item-img'>
              <img src={convenientPayment} alt='convenient payment' />
            </div>
            <span>Convenient payment</span>
            <p>
              You can pay for delivery by card or in cash at any of the order
              addresses. For legal entities non-cash is available.
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
              >
                <circle opacity='0.24' cx='8' cy='8' r='8' fill='#2B6BF3' />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M7.02051 4.1591L10.8249 7.61591C11.0584 7.82804 11.0584 8.17196 10.8249 8.38409L7.02051 11.8409C6.78706 12.053 6.40855 12.053 6.17509 11.8409C5.94164 11.6288 5.94164 11.2849 6.17509 11.0727L9.5 8L6.17509 4.92728C5.94164 4.71515 5.94164 4.37122 6.17509 4.1591C6.40855 3.94697 6.78706 3.94697 7.02051 4.1591Z'
                  fill='white'
                />
              </svg>
            </p>
          </div>
        </div>
        <button className='activity__btn'>Get started!</button>
      </div>
    </div>
  )
}

export default Activity
