import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import HolyCannoli from '../../src/assets/images/hc-logo.png'
import YogaStudio from '../../src/assets/images/yoga-studio-logo.png'
import Shoest from '../../src/assets/images/Shoest.png'
import CloudHouse from '../../src/assets/images/CloudHouse.png'
import './Clients.css'

function Clients() {

    const sendEmailButton = () => { 
    window.location.href = `mailto:william@wildev.co?subject='Contact Form'&body=Body`;
    
  }

  return (
    <div className='client-section'>

      <div className='client-text box'>
        <h1>Web Development Solutions</h1>
        <h2>Easy and cost-effect Website Solutions</h2>
        <h3>Questions about your website?</h3>
        
           <h4>I can answer questions and offer solutions for:</h4>
          <ul>
            <li>Website Design and Creation</li>
            <li>SEO and Website Optimization</li>
            <li>Social Media and Digital Consulation</li>
          </ul>


        <button
          className='help-button'
          onClick={() => sendEmailButton()}
        >
          Send me an email to get started
        </button>
        
        
       
      </div>

     
      
    

      <div className='local-work box'>
        <h1>Past Clients and Websites</h1>
        


          <div className='local-work-imgs'>
            <a>
              <img src={HolyCannoli} alt='Holy Cannoli Logo' />
            </a>
            <a>
              <img src={YogaStudio} alt='Yoga Studio Website Thumbnail' />
            </a>
            <a>
              <img src={Shoest} alt='Shoest Website Thumnail' />
            </a>
            <a>
              <img src={CloudHouse} alt='Cloud|House Website Thumnail' />
            </a>
          </div>
        
        
        
             
      </div>

    </div>
  )
}

export default Clients