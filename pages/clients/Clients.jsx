import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router';
import HolyCannoli from '../../src/assets/images/hc-logo.png'
import YogaStudio from '../../src/assets/images/yoga-studio-logo.png'
import Shoest from '../../src/assets/images/Shoest.png'
import CloudHouse from '../../src/assets/images/CloudHouse.png'
import './Clients.css'

function Clients() {

  const navigate = useNavigate();

    const sendEmailButton = () => { 
    window.location.href = `mailto:william@wildev.co?subject='Contact Form'&body=Body`;
    
  }

  const handleNavigation = (route) => {
        navigate(route);
    }

  return (
    <div className='client-section'>

      <div className='client-text'>
        <h1>Looking for Website help?</h1>
        
        <h3>Easy and cost-effect Website Solutions</h3>
        
          
          <ul>
            <li>Website Design and Creation</li>
            <li>SEO and Website Optimization</li>
            <li>Social Media and Digital Consulation</li>
          </ul>
          
        <h2>Contact me for help today</h2>

        <div className='client-btns'>
          <button
          className='help-button'
          onClick={() => sendEmailButton()}
        >
          Send me an email
        </button>
          <button
          className='help-button'
          onClick={() => handleNavigation('/projects')}
        >
          See my work
        </button>
        </div>
        
        
        
       
      </div>

     
      
    

     
        
        
        
             
      

    </div>
  )
}

export default Clients