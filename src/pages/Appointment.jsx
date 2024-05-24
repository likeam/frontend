import React from 'react'
import AppointmentForm from '../components/AppointmentForm'
import "../App.css";
import Hero from '../components/Hero';
import hero from '../assets/hero.png'

const Appointment = () => {
  return (
    <>
    <Hero  title={
          "Welcome to ZeeCare Medical Institute | Your Trusted Healthcare Provider"
        }
        imageUrl={hero} />
      <AppointmentForm />
    </>
  )
}

export default Appointment