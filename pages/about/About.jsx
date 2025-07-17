import React from 'react'
import './About.css'

import Selfie from '../../src/assets/images/SelfiePNG.png'




function About() {
  return (
    <div className='about-section'>
        <div className='selfie'>
          <img src={Selfie} alt='Selfie Image' />
        </div>
        <div className='about'>
          <p>
            As a self-taught developer who recently completed Full-Stack and Front-End Engineering certifications through Codecademy, I bring a unique combination of technical skills and professional experience that align well with most companies needs. My journey into software engineering demonstrates my commitment to continuous learning, resilience in overcoming challenges without traditional mentorship, and determination to master new technologies—qualities that would serve me well in any fast-paced environment.
            <br></br>
            <br></br>
            During my time as a Code Instructor at Code Ninjas, I taught JavaScript, Python, and C++ fundamentals, which required me to clearly communicate complex technical concepts and adapt my teaching approach to ensure effective knowledge transfer. This experience strengthened my ability to collaborate with others and explain technical solutions—skills that would be valuable when working with team members in any environment.
            <br></br>
            <br></br>
            As a Technical Expert at Apple for nearly five years, I developed a deep appreciation for technical excellence and customer-focused solutions. This role instilled in me the satisfaction that comes with expertise and technical mastery—a driving force behind my pursuit of software engineering. I routinely diagnosed complex issues, recommended appropriate solutions, and trained new team members on troubleshooting methodologies, all while maintaining Apple's high standards for quality and service.
            <br></br>
            <br></br>
            I am comfortable working with JavaScript, HTML, CSS, React, Node.js, and Express.js, MongoDB, and I have knowledge of Python—making me well-prepared to contribute to any type of development efforts. Additionally, my experience in remote team coordination during my time with AmeriCorps has prepared me for success in any work environment, including remote-first.
          </p>
        </div>
    </div>
  )
}

export default About