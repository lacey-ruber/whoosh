import React, { useState } from 'react'
import onFoot from '../assets/img/on-foot.png'
import car from '../assets/img/car.png'
import truck from '../assets/img/truck.png'

const DeliveryForm = () => {
  const [selectedDelivery, setSelectedDelivery] = useState()
  const [data, setData] = useState({
    deliveryType: '',
    startingPoint: '',
    finalDestination: '',
  })

  const transport = [
    { id: 0, name: 'up to 10lb', icon: onFoot },
    { id: 1, name: 'up to 130lb', icon: car },
    { id: 2, name: 'over 130lb', icon: truck },
  ]
  const transportName = ['up to 10lb', 'up to 130lb', 'over 130lb']

  const handleSelectedDelivery = (id) => {
    setSelectedDelivery(id)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const newData = {
      ...data,
      deliveryType: transportName[selectedDelivery],
    }
    console.log(newData)
    handleClear()
  }
  const handleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }))
  }

  const handleClear = () => {
    setData({
      deliveryType: '',
      startingPoint: '',
      finalDestination: '',
    })
  }

  return (
    <div className='home__order-send order-send'>
      <div className='order-send__title'>
        <h3>Send a Parcel</h3>
        <div className='order-send__title-tooltip'>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle cx='12' cy='12' r='12' fill='#DDE7FD' />
            <path
              d='M11 11C11 10.4477 11.4477 10 12 10V10C12.5523 10 13 10.4477 13 11V17C13 17.5523 12.5523 18 12 18V18C11.4477 18 11 17.5523 11 17V11Z'
              fill='white'
            />
            <path
              d='M11 7C11 6.44772 11.4477 6 12 6V6C12.5523 6 13 6.44772 13 7V7C13 7.55228 12.5523 8 12 8V8C11.4477 8 11 7.55228 11 7V7Z'
              fill='white'
            />
          </svg>
          <p>
            A commission is a piece of work that someone is asked to do and is
            paid for.
          </p>
        </div>
      </div>
      <div className='order-send__transport'>
        {transport.map((item) => (
          <div
            key={item.id}
            onClick={() => handleSelectedDelivery(item.id)}
            className={
              'order-send__item' +
              (selectedDelivery === item.id ? ' active' : '')
            }
          >
            <img src={item.icon} alt='on foot' />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      <div className='order-send__wrapper'>
        <div className='order-send__decoration'>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='order-send__decoration_circle'
          >
            <circle cx='12' cy='12' r='12' fill='#2B6BF3' fillOpacity='0.08' />
            <circle cx='12' cy='12' r='5' fill='#2B6BF3' />
            <circle cx='12' cy='12' r='2' fill='white' />
          </svg>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='4'
            height='52'
            viewBox='0 0 4 52'
            fill='none'
            className='order-send__decoration_dots'
          >
            <path
              d='M4 50C4 51.1046 3.10457 52 2 52C0.89543 52 0 51.1046 0 50C0 48.8954 0.89543 48 2 48C3.10457 48 4 48.8954 4 50Z'
              fill='#2B6BF3'
              fillOpacity='0.08'
            />
            <path
              d='M4 10C4 11.1046 3.10457 12 2 12C0.89543 12 0 11.1046 0 10C0 8.89543 0.89543 8 2 8C3.10457 8 4 8.89543 4 10Z'
              fill='#2B6BF3'
              fillOpacity='0.08'
            />
            <path
              d='M4 18C4 19.1046 3.10457 20 2 20C0.89543 20 0 19.1046 0 18C0 16.8954 0.89543 16 2 16C3.10457 16 4 16.8954 4 18Z'
              fill='#2B6BF3'
              fillOpacity='0.08'
            />
            <path
              d='M4 26C4 27.1046 3.10457 28 2 28C0.89543 28 0 27.1046 0 26C0 24.8954 0.89543 24 2 24C3.10457 24 4 24.8954 4 26Z'
              fill='#2B6BF3'
              fillOpacity='0.08'
            />
            <path
              d='M4 34C4 35.1046 3.10457 36 2 36C0.89543 36 0 35.1046 0 34C0 32.8954 0.89543 32 2 32C3.10457 32 4 32.8954 4 34Z'
              fill='#2B6BF3'
              fillOpacity='0.08'
            />
            <path
              d='M4 42C4 43.1046 3.10457 44 2 44C0.89543 44 0 43.1046 0 42C0 40.8954 0.89543 40 2 40C3.10457 40 4 40.8954 4 42Z'
              fill='#2B6BF3'
              fillOpacity='0.08'
            />
            <path
              d='M4 2C4 3.10457 3.10457 4 2 4C0.89543 4 0 3.10457 0 2C0 0.89543 0.89543 0 2 0C3.10457 0 4 0.89543 4 2Z'
              fill='#2B6BF3'
              fillOpacity='0.08'
            />
          </svg>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            className='order-send__decoration_location'
          >
            <path
              d='M18 10C18 13.3137 12 20 12 20C12 20 6 13.3137 6 10C6 6.68629 8.68629 4 12 4C15.3137 4 18 6.68629 18 10Z'
              fill='#FFD600'
            />
          </svg>
        </div>
      </div>
      <form onSubmit={handleSubmit} className='order-send__form'>
        <label htmlFor='pickupLocation'>Pickup location</label>
        <input
          name='startingPoint'
          value={data.startingPoint}
          onChange={handleChange}
          type='text'
          placeholder='location'
          id='pickupLocation'
        />
        <label htmlFor='exampleDataList'>Drop location</label>

        <input
          list='datalistOptions'
          id='exampleDataList'
          name='finalDestination'
          type='text'
          onChange={handleChange}
          value={data.finalDestination}
        />
        <datalist id='datalistOptions'>
          <option value='502 86th St, Brooklyn, NY 11209' />
          <option value='523 Fake Street. Seattle, WA 98112' />
          <option value='516 SW. Country Ave. Bethpage, NY' />
          <option value='578 Spring Street Hanover, PA 1733' />
          <option value='516 SW. Country Ave. Bethpage, NY' />
        </datalist>
        <button type='submit'>Order</button>
      </form>
      <div onClick={handleClear} className='order-send__clear'>
        <span>x</span> Clear All
      </div>
    </div>
  )
}

export default DeliveryForm
