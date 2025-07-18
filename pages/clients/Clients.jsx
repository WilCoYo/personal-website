import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';


import './Clients.css'

function Clients() {

    const sendEmailButton = () => { 
    window.location.href = `mailto:william@wildev.co?subject='Contact Form'&body=Body`;
    
  }

  return (
    <div className='client-section'>

      <div className='client-text box'>
        <h1>Easy and cost-effect Website Solutions</h1>
        <h3>Questions about your website?</h3>
        
           <h4>I can answer questions and offer solutions for:</h4>
          <ul>
            <li>Website Design and Creation</li>
            <li>SEO and Website Optimization</li>
            <li>Social Media and Digital Consulation</li>
          </ul>
        
       
      </div>

     
        <button
          className='help-button'
          onClick={() => sendEmailButton()}
        >
          Reach out to me here
        </button>
        
    

      <div className='local-work box'>
      
      </div>

    </div>
  )
}

export default Clients