/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import './Navbar.css';

/**
 * 
 * @param {title} string 
 * @returns 
 */
export const Navbar = ({ title, navs }) => {
  return (
    <div className="navbar--container">
      <div className="navbar--title">
        <h3>{title || 'Default'}</h3>
      </div>

      <div className="navbar--links">
        {navs.map((n, i) => (
          <div key={i} className="navbar--link">
            <a href={n.href}>{n.name}</a>
          </div>
        ))}
      </div>
    </div>
  );
};
