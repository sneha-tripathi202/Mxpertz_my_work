import { useEffect, useState } from 'react'
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
import Lenis from "lenis"

function App() {
  const [count, setCount] = useState(0)
 useEffect(()=>{
  // Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});
 })
  return (
    <>
      <Header/>
      <Home/>
     <ServiceCard/>
      <Course/>
      <SmartAca/>
      <Articalinside/>
      <About/>
      <Footer/>
    </>
  )
}

export default App
