import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Hamburger.scss'
const Hamburger = () => {
  return (
    <div className='hamburger-menu'>
      <div className='menu-secondary-background-color'></div>
      <div className='menu-layer'>
        <div className='menu-city-background'></div>
        <div className='container'>
          <div className='wrapper'>
            <div className='menu-links'>
              <nav>
                <ul>
                  <li>
                    <Link to='/opportunities'>Opportunities</Link>
                  </li>
                  <li>
                    <Link to='/solutions'>Solutions</Link>
                  </li>
                  <li>
                    <Link to='/contact-us'>Contact Us</Link>
                  </li>
                </ul>
              </nav>
              <div className='info'>
                <h3>Our Promise</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
                  voluptas inventore ipsam aspernatur voluptatum tempora dolore
                  recusandae ullam repudiandae saepe doloribus expedita
                  molestias neque veritatis sapiente quaerat, ea, esse aliquid.
                </p>
              </div>
              <div className='locations'>
                locations:
                <span>Dallas</span>
                <span>Newyork</span>
                <span>Dallas</span>
                <span>Dallas</span>
                <span>Dallas</span>
                <span>Dallas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hamburger
