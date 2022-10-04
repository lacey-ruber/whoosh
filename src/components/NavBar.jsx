/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import logo from '../assets/img/icons/logo.svg'
import subtract from '../assets/img/icons/subtract.svg'
import profile from '../assets/img/icons/profile.svg'
import location from '../assets/img/icons/location.svg'

const NavBar = () => {
  const [burgerMenu, setBurgerMenu] = useState(false)
  const cities = [
    'Chicago',
    'Philadelphia',
    'Dallas',
    'Jacksonville',
    'San Francisco',
    'NY, Manhattan',
  ]
  const [selectedSity, setSelectedSity] = useState(5)
  const [open, setOpen] = useState(false)

  const handleSelectedSity = (index) => {
    setSelectedSity(index)
    setOpen(false)
  }

  return (
    <header className='header'>
      <div className='header__wrapper'>
        <div className='header__container container'>
          <div className={'header__body' + (burgerMenu ? ' active' : '')}>
            <div className='header__main'>
              <a href='/' className='header__logo'>
                <img src={logo} alt='logo' />
              </a>
              <div className='header__city city-menu'>
                <a onClick={() => setOpen(!open)} className='city-menu__title'>
                  <img
                    className='city-menu__icon'
                    src={location}
                    alt='location'
                  />
                  <p className='city-menu__text'>{cities[selectedSity]}</p>
                </a>
                {open && (
                  <ul className='city-menu__list'>
                    {cities.map((item, index) => (
                      <li
                        key={index}
                        onClick={() => handleSelectedSity(index)}
                        className={
                          'city-menu__item' +
                          (selectedSity === index ? ' active' : '')
                        }
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <div className='header__search'>
              <form className='search-form' action='#'>
                <label htmlFor='searchTrack' className='search-form__btn'>
                  <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14ZM7 12.6667C10.2217 12.6667 12.6667 10.2217 12.6667 7C12.6667 3.77834 10.2217 1.33333 7 1.33333C3.77834 1.33333 1.33333 3.77834 1.33333 7C1.33333 10.2217 3.77834 12.6667 7 12.6667Z'
                      fill='#B7C6E7'
                    />
                    <path
                      d='M7.33325 10L10.6666 8.66667V5.33333L7.33325 6.51254V10Z'
                      fill='#B7C6E7'
                    />
                    <path
                      d='M6.66675 10L3.33341 8.66667V5.33333L6.66675 6.51254V10Z'
                      fill='#B7C6E7'
                    />
                    <path
                      d='M6.99992 3.33333L3.33325 4.66667L6.99992 6L10.6666 4.66667L6.99992 3.33333Z'
                      fill='#B7C6E7'
                    />
                    <path
                      d='M11.9523 11L16 15.0477L15.0477 16L11 11.9523L11.9523 11Z'
                      fill='#B7C6E7'
                    />
                  </svg>
                </label>
                <input
                  placeholder='Track a Package'
                  type='text'
                  className='search-form__input'
                  id='searchTrack'
                />
              </form>
            </div>
            <div className='header__actions actions-header'>
              <a className='actions-header__item' href='/'>
                Send a Parcel
              </a>
              <a className='actions-header__item' href='/'>
                Become a Courier
              </a>
              <a
                className='actions-header__item actions-header__item_lp'
                href='/'
              >
                Affiliate Program
              </a>
              <a
                className='actions-header__item actions-header__item_lp'
                href='/'
              >
                Help & Support
              </a>
              <a className='actions-header__login' href='/'>
                <img src={subtract} alt='subtract' />
              </a>
            </div>
            <button className='header__btn-lp'>Take a complex order</button>
          </div>
          <div className='header__lp'>
            <a href='/' className='header__lp-profile'>
              <img src={profile} alt='profile' />
            </a>
            <a href='/' className='header__lp-logo'>
              <img src={logo} alt='logo' />
            </a>
            <div
              className={'header__lp-burger' + (burgerMenu ? ' hide' : '')}
              onClick={() => setBurgerMenu((prevState) => !prevState)}
            >
              <span className='header__lp-burger_line-1 line'></span>
              <span className='header__lp-burger_line-2 line'></span>
              <span className='header__lp-burger_line-3 line'></span>
            </div>
            <div
              className={'header__lp-close' + (burgerMenu ? ' active' : '')}
              onClick={() => setBurgerMenu((prevState) => !prevState)}
            ></div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default NavBar
