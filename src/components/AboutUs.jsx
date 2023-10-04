/* eslint-disable no-unused-vars */
import React from 'react'
import './AboutUs.css'
import john from '../assets/John.jpg';

export const AboutUs = () => {
  return (
    <div>
      <h1>About Us</h1>

      <div className='aboutContainer'>
        <div className='aboutImg'>
          <img src={john} alt="John" />
        </div>
        <div className='aboutFields'>
          <h2>John Doe</h2>
          <h4>john@email.com</h4>
          <h4>John Doe (masculine) and Jane Doe (feminine) are multiple-use placeholder names that are used in the United States and the United Kingdom when the true name of a person is unknown or is being intentionally concealed.</h4>
        </div>
      </div>

      
    </div>
  )
}
