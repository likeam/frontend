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
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
<Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
        <ToastContainer position="top-center" />
      </Router>
     
    </>
  );
};

export default App;
