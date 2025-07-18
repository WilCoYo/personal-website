import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'

import { useEffect } from 'react'
import NET from 'vanta/src/vanta.net'

import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Experience from '../pages/experience/Experience'
import Projects from '../pages/projects/Projects'
import Clients from '../pages/clients/Clients'


import BottomNavigation from '../components/bottom-navigation/BottomNavigation'




function App() {

 

  useEffect(()=>{
    NET({
      el: "#vanta",
      mouseControls: true,
      touchControls: true,
      gyroControls: true,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x899651,
      backgroundColor: 0x032222,
      showDots: false
    })
  }, [])
 
  return (
    <Router>
      <div id='vanta'></div>
      
      

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/clients' element={<Clients />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <BottomNavigation />
    </Router>
  )
}

export default App
