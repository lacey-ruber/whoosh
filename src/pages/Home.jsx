import React from 'react'
import NavBar from '../components/NavBar'
import Main from '../components/Main'
import Delivery from '../components/Delivery'
import Partners from '../components/Partners'
import Activity from '../components/Activity'
import AboutUs from '../components/AboutUs'
import Payment from '../components/Payment'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <NavBar />
      <Main />
      <Delivery />
      <Partners />
      <Activity />
      <Payment />
      <AboutUs />
      <Footer />
    </>
  )
}

export default Home
