import React from 'react'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
  return (
    <div className='footer'>
      <div className="footer__top">
        <div className="footer__logo">
          <div className="footer__img">
            <img src="https://pnghq.com/wp-content/uploads/onlyfans-logo-thumbnail-transparent-png-15878-400x286.png" alt="" />
          </div>
          <div className="footer__description">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...</p>
          </div>
        </div>
        <div className="footer__about">
          <h4>About</h4>
          <Link to="/about">
            <p>About us</p>
          </Link>
          <a href="">
            <p>Creator</p>
          </a>
          <Link to="/courses">
            <p>Courses</p>
          </Link>
          <Link to="/contacts">
            <p>Contact us</p>
          </Link>
        </div>
        <div className="footer__support">
          <h4>Support</h4>
          <Link to="/careers">
            <p>Careers</p>
          </Link>
          <Link to="/help">
            <p>Help & Support</p>
          </Link>
        </div>
        <div className="footer__navigate">
          <h4>Links</h4>
          <Link to="/">
            <p>Home</p>
          </Link>
        </div>
      </div>
      <div className="footer__bottom">
        <div>
          <Link to="/privacy-policy">
            <p>Privacy Policy</p>
          </Link>
        </div>
        <div>
          <p>Created by <a aria-label="github" target='_blank' href="https://github.com/artemelyashevich">@artemelyashevich</a></p>
        </div>
      </div>
    </div>
  )
}

export default Footer