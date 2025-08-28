import React from 'react'
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="container">
            <div className="footer-wrapper">
                <div className="footer-logo">
                    <img src={logo} alt="" />
                </div>
                <div className="footer-aloqa">
                    <div>
                          <li>About</li>
                          <li>User</li>
                          <li>Connect</li>
                    </div>
                    <div>
                          <li>jisonbek@gmail.com</li>
                          <li>jisonbek_JS</li>
                    </div>
                    <div className='icon'>
                          <i class="fa-brands fa-telegram"></i>
                          <i class="fa-brands fa-twitter"></i>
                          <i class="fa-brands fa-instagram"></i>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer