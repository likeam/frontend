import React from 'react'
import hero from '../assets/hero.png'
import Hero from '../components/Hero'

const About = () => {
  return (
    <>
      <Hero  title={
          "Welcome to ZeeCare Medical Institute | Your Trusted Healthcare Provider"
        }
        imageUrl={hero} />
    </>
  )
}

export default About