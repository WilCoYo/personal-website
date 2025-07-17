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
            <li>Guided learners to aid understanding and knowledge of technology and coding concepts</li>
            <li>Taught JavaScript, Python, and C+ fundamentals using Impact, Microsoft MakeCode, and Unity</li>
            <li>Customized and supplement curricular materials to ensure knowledge transfer and growth</li>
            <li>Leveraged educator background to inspire learners’ confidence in technology, math, and science</li>
          </ul>

          <h2>Apple</h2>
          <h4>Technical Expert</h4>
          <ul>
            <li>Interpreted customer concerns and delivered appropriate product diagnoses and solutions</li>
            <li>Flexibly rotated through multiple technical specialties and skill sets with ease and confidence</li>
            <li>Translated technical knowledge via Apple iOS hardware and software technician certification</li>
            <li>Troubleshot device issues with customers and communicated appropriate solutions</li>
          </ul>

          <h2>PICS iTech</h2>
          <h4>Client Account Manager</h4>
          <ul>
            <li>Managed CRM account data and quickly resolved service tickets queue for 60+ clients</li>
            <li>Collaborated with clients to understand their business objectives and technical requirements</li>
            <li>Liaised between clients and technical teams, facilitating communication and understanding</li>
            <li>Collaborated with internal and external partners to drive projects from onboarding through closure</li>
          </ul>

        </div>

    </div>
  )
}

export default Experience