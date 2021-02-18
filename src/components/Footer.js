import React from 'react';
import './Footer.css';

import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Me</h2>
            <Link to='/'>Learn More</Link>
            <Link to='/'></Link>
            <Link to='/'></Link>
            <Link to='/'></Link>
            <Link to='/'></Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact</h2>
            <Link to='/'>Let's Connect</Link>
            <Link to='/'></Link>
            <Link to='/'></Link>
            <Link to='/'></Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Skills</h2>
            <Link to='/'>More Details</Link>
            <Link to='/'></Link>
            <Link to='/'></Link>
            <Link to='/'></Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/linkedin'>LinkedIn</Link>
            <Link to='/github'>GitHub</Link>
            <Link to='/'></Link>
            <Link to='/'></Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Alexis Manduke
              <i class='' />
            </Link>
          </div>
          <small class='website-rights'>Alexis Manduke © 2020</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link twitter'
              to='/contactme'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
