import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'
import Header from './pages/Header'
import Home from './pages/Home'
import Course from './pages/Course'
import ServiceCard from './components/ServiceCard'
import SmartAca from './pages/SmartAca'
import Articalinside from './pages/Articalinside'
import About from './pages/About'
import Footer from './pages/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ReactLenis, useLenis } from 'lenis/react'



function App() {
 

  return (
    <>

<ReactLenis
 root 
 options={{
  lerp:0.1,
  duration:1.2,
  orientation:"vertical",
  gestureOrientation:'vertical',
  smoothWheel:true,
  wheelMultiplier:1,
  smoothTouch:false,
  touchMultiplier:2,
 }}

>
  <Header/></ReactLenis>      
    </>
  )
}

export default App
