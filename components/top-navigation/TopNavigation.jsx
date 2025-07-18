import React from 'react'
import { useNavigate } from 'react-router'

import Resume from '../../src/assets/files/Resume.pdf'
import './TopNavigation.css'


function TopNavigation() {

const navigate = useNavigate();

const handleNavigation = (route) => {
    navigate(route);
}

  return (
    <div className='top-navigation'>
        <div className='top-nav-buttons'>
            <button className='top-btn'>
                <a 
                    href= {Resume}
                    target='_blank'
                    rel="noreferrer"
                    download
                >
                    <p>Resume</p>
                </a>
            </button>

            <button 
                className='top-btn'
                onClick={() => handleNavigation('/clients')}
            >
            <p>Clients</p>
            </button>
        </div>
        
    </div>
  )
}

export default TopNavigation