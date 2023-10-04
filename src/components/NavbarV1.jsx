import React from 'react';
import './Navbar.css';

export const Navbar = () => {
  return (
    <div className='navbar--container'>
      <div className='navbar--title'>
        <h3>Title</h3>
      </div>

      <div className='navbar--links'>
        <div className='navbar--link'><a href="">Link1</a></div>
        <div className='navbar--link'><a href="">Link1</a></div>
      </div>
    </div>
  )
}
