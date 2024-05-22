import React from 'react'
import Hero from '../components/Hero'
import hero from '../assets/hero.png'

const Home = () => {
  return (
    <>
    <Hero  title={
          "Welcome to ZeeCare Medical Institute | Your Trusted Healthcare Provider"
        }
        imageUrl={hero} />
    </>
  )
}

export default Home