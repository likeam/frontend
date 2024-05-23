import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Appointment from "./pages/Appointment";
import About from "./pages/About";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Hero from "./components/Hero";
import AppointmentForm from "./components/AppointmentForm";
import MessageForm from "./components/MessageForm";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>

        <Navbar />
        <Home />
        <Appointment />
        <MessageForm />
        <Footer />
     
    </>
  );
};

export default App;
