import React from 'react'
import './Projects.css'

import anirate from '../../src/assets/images/AniRate.png'
import hifi from '../../src/assets/images/hi-fi-logo.png'
import scholarbase from '../../src/assets/images/scholarBaseImg.png'


function Projects() {
  



  return (
    
    <div className='projects-section'>
       <div className='projects-grid'>

          <div className='project anirate'>
            <a
              href='https://anime-rate.netlify.app/'
              target='_blank'
              rel='noreferrer'
            >
              <img src={anirate} alt='AniRate Website Thumbnail' />
            </a>
              <h3>Anime Watchlist and Rating Website</h3>
              <p>Has full login and credential functionality, including custom watchlists and profiles.</p>
              <p><strong>Dependencies & Tech Stack:</strong> <br></br><i>React, Firebase, Figma, Git & Github, Javascript, CSS, HTML</i></p>

          </div>

          <div className='project hifi'>
            <a
              href='https://hi-fi-wineandspirits.netlify.app/'
              target='_blank'
              rel='noreferrer'
            >
              <img src={hifi} alt='Hifi Wine and Spirits Website Thumbnail' />
            </a>
              <h3>An artisan Wine & Spirits company</h3>
              <p>Made completely with vanilla HTML, CSS, and JavaScript. There are no frameworks and dependencies used.</p>
              <p><strong>Dependencies & Tech Stack:</strong> <br></br><i>Figma, Git/Github, Javascript, CSS, HTML</i></p>

          </div>

          <div className='project scholarbase'>
            <a
              href='https://scholarbase-production.up.railway.app/'
              target='_blank'
              rel='noreferrer'
            >
              <img src={scholarbase} alt='ScholarBase Website Thumbnail' />
            </a>
              <h3>Scholarly article database for a more streamlined research experience.</h3>
              <p>Full MERN stack search engine. Database is hosted through MongoDB and hosted through railway.app</p>
              <p><strong>Dependencies & Tech Stack:</strong> <br></br><i>React, Javascript, CSS, HTML, Express.js, MongoDB, Railway, Git/Github</i></p>

          </div>

       </div>
    </div>
  )
}

export default Projects