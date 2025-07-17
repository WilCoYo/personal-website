import React from 'react'
import './Experience.css'

import codecademy from '../../src/assets/images/codecademy.png'
import cityyear from '../../src/assets/images/cityyear.png'
import nccc from '../../src/assets/images/nccc.png'

import BottomNavigation from '../../components/bottom-navigation/BottomNavigation'

function Experience() {
  return (
    <div className='experience-section'>
        <div className='certs-skills'>

          <div className='codecademy'>
            <img src={codecademy} alt='Codecademy Logo' className='codecademy-logo'/>
            <ul>
              <li>Full-Stack Engineer Professional Certification</li>
              <li>Front End Engineer Professional Certification</li>
            </ul>
          </div>

          <div className='americorps'>
            <div className='americorps-imgs'>
              <img src={cityyear} alt='City Year Logo' className='cityyear-logo'/>
              <img src={nccc} alt='Americorps NCCC Logo' className='nccc-logo'/>
            </div>
            
            <ul>
              <li>Full-Stack Engineer Professional Certification</li>
              <li>Front End Engineer Professional Certification</li>
            </ul>
          </div>

          <div className='skills'>
            <h2>Skills</h2>
            <p>
              <strong>Proficient:</strong> HTML, CSS, JavaScript, React, MongoDB, Node.js, Express.js, PostgreSQL,
              SQL, Git, GitHub, VSCode, PgAdmin 4, Postbird, Postman, Figma, Netlify, Canva, Wix
            </p>
            <p><strong>Knowledgeable:</strong> NoSQL, Railway.app, Docker. Python, C++, Unity</p>
          </div>

        </div>


        <div className='experience'>
          <h2>Code Ninjas</h2>
          <h4>Code Instructor</h4>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>

          <h2>Apple</h2>
          <h4>Technical Expert</h4>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>

          <h2>PICS iTech</h2>
          <h4>Client Account Manager</h4>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>

        </div>

    </div>
  )
}

export default Experience