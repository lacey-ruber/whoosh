import React from 'react'
import local from '../assets/img/icons/local-2.svg'
import facebook from '../assets/img/icons/facebook.svg'
import vk from '../assets/img/icons/vk.svg'
import youtube from '../assets/img/icons/youtube.svg'
import instagram from '../assets/img/icons/instagram.svg'
import logoPyrobyteWeb from '../assets/img/icons/logo-pyrobyte-web.svg'
import privacyPolicy from '../assets/img/icons/privacy-policy.svg'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container container'>
        <div className='footer__body'>
          <div className='footer__main'>
            <img src={local} alt='location' className='footer__main-icon' />
            <div className='footer__main-text'>
              <span className='footer__main-title'>About Whoosh</span>
              <div className='footer__main-description'>
                Express delivery of documents and parcels for organizations,
                express delivery of correspondence, purchases and other goods
              </div>
            </div>
          </div>
          <div className='footer__menu'>
            <div className='footer__menu-block'>
              <div className='footer__menu-section'>
                <span className='footer__menu-title'>Menu</span>
                <ul className='footer__menu-list'>
                  <li className='footer__menu-item'>
                    <a href='/'>About company</a>
                  </li>
                  <li className='footer__menu-item'>
                    <a href='/'>Contact</a>
                  </li>
                  <li className='footer__menu-item'>
                    <a href='/'>Rules</a>
                  </li>
                  <li className='footer__menu-item'>
                    <a href='/'>FAQ</a>
                  </li>
                  <li className='footer__menu-item'>
                    <a href='/'>Reviews</a>
                  </li>
                  <li className='footer__menu-item'>
                    <a href='/'>Cargo transportation</a>
                  </li>
                  <li className='footer__menu-item'>
                    <a href='/'>Tariffs</a>
                  </li>
                </ul>
              </div>
              <div className='footer__menu-section'>
                <span className='footer__menu-title'>Services</span>
                <ul className='footer__menu-list'>
                  <li className='footer__menu-item'>
                    <a href='/'>Online stores</a>
                  </li>
                  <li className='footer__menu-item'>
                    <a href='/'>Legal entity</a>
                  </li>
                  <li className='footer__menu-item'>
                    <a href='/'>API Integration</a>
                  </li>
                  <li className='footer__menu-item'>
                    <a href='/'>Contract</a>
                  </li>
                  <li className='footer__menu-item'>
                    <a href='/'>Jobs</a>
                  </li>
                  <li className='footer__menu-item'>
                    <a href='/'>Courier job</a>
                  </li>
                  <li className='footer__menu-item'>
                    <a href='/'>The blog</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='footer__contacts-block'>
            <span className='footer__contacts-title'>Contact us</span>
            <div className='footer__contacts-tel'>8 800 934 5959</div>
            <div className='footer__contacts-address'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='12'
                height='16'
                viewBox='0 0 12 16'
                fill='none'
              >
                <path
                  opacity='0.56'
                  d='M12 6C12 9.31371 6 16 6 16C6 16 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6Z'
                  fill='#2B6BF3'
                />
              </svg>
              <span>2545 W. Diversey Ave. 3rd Floor Chicago, IL 60647</span>
            </div>
            <div className='footer__contacts-networks'>
              <a href='/'>
                <img src={facebook} alt='facebook' />
              </a>
              <a href='/'>
                <img src={vk} alt='vk' />
              </a>
              <a href='/'>
                <img src={youtube} alt='youtube' />
              </a>
              <a href='/'>
                <img src={instagram} alt='instagram' />
              </a>
            </div>
          </div>
          <span className='footer__made-by'>Made by</span>
        </div>
        <div className='footer__bottom'>
          <span className='footer__bottom-copyright'>
            © 2022. All rights reserved.
          </span>
          <a href='/'>
            <img
              className='footer__bottom-logo'
              src={logoPyrobyteWeb}
              alt='Pyrobyte'
            />
          </a>
          <a href='/' className='footer__bottom-privacy'>
            <img src={privacyPolicy} alt='Privacy policy' />
            <span>Privacy policy</span>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
