import React from 'react'
import Hero from '../components/Hero'
import hero from '../assets/hero.png'
import MessageForm from '../components/MessageForm'
import Biography from '../components/Biography'
import Departments from '../components/Departments'

const Home = () => {
  return (
    <>
    <Hero  title={
          "Welcome to ZeeCare Medical Institute | Your Trusted Healthcare Provider"
        }
        imageUrl={hero} />
    <Biography  />
    <Departments />
    <MessageForm />
    </>
  )
}

export default Home