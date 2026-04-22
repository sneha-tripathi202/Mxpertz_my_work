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
import Lenis from "@studio-freight/lenis";




function App() {
  const [count, setCount] = useState(0)
 useEffect(() => {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  return () => {
    lenis.destroy(); // cleanup
  };
}, []);

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
