import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Course from './pages/Course.jsx';
import Header from './pages/Header.jsx';
import ServiceCard from './components/ServiceCard.jsx';
import SmartAca from './pages/SmartAca.jsx';
import Articalinside from './pages/Articalinside.jsx';
import Footer from './pages/Footer.jsx';

const router=createBrowserRouter([ 
   {
      path:"/",
      element:<Header/>
    },
    {
      path:"/home",
      element:<Home/>
    },
    {
      path:"/service",
      element:<ServiceCard/>
    },
    {
      path:"/course",
      element:<Course/>
    },
     {
      path:"/smart",
      element:<SmartAca/>
    },
    {
      path:"/artical",
      element:<Articalinside/>
    },
    {
      path:"/about",
      element:<About/>
    },
     {
      path:"/footer",
      element:<Footer/>
    }
  ]
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
   {/* <RouterProvider  router={router}/> */}
   <App/>
  </StrictMode>,
)
