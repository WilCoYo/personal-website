import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useEffect } from 'react'
import NET from 'vanta/src/vanta.net'

import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Experience from '../pages/experience/Experience'
import Projects from '../pages/projects/Projects'

import TopNavigation from '../components/top-navigation/TopNavigation'
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
      <TopNavigation />
      <BottomNavigation />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
      
    </Router>
  )
}

export default App
