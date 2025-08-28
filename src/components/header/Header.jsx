import React from 'react'
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <header className='header'>
        <div className='container'>
            <div className='header-wrapper'>
                  <div  className='header-img'>
                    <img src={logo} alt="" />
                  </div>
                  <div className='header-nav'>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Service</li>
                    </ul>
                  </div>
                  <div className='header-btn'>
                    <button>Sign in</button>
                  </div>
            </div>
        </div>
    </header>
  )
}

export default Header