import React from 'react'
import hero from '../assets/hero.png'
import Hero from '../components/Hero'
import Biography from '../components/Biography'

const About = () => {
  return (
    <>
      <Hero  title={
          "Welcome to ZeeCare Medical Institute | Your Trusted Healthcare Provider"
        }
        imageUrl={hero} />
        <Biography imageUrl={hero} />
    </>
     
  )
}

export default About