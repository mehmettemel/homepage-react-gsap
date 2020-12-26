import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Hamburger.scss'
import gsap from 'gsap'
import {
  staggerReveal,
  fadeInUp,
  staggerText,
  handleItem,
  handleCityReturn,
} from '../animations/menuAnimations'
import golf from '../images/golf.jpg'
import golf2 from '../images/golf-2.jpg'
import golf3 from '../images/golf-3.jpg'
import golf4 from '../images/golf-4.jpg'
import golf5 from '../images/golf-5.jpg'

const menuItems = [
  { name: 'Tournaments', image: golf },
  { name: 'Membership', image: golf2 },
  { name: 'Juniors', image: golf3 },
  { name: 'Teachers&Fees', image: golf4 },
  { name: 'Club Fitting', image: golf5 },
]

const Hamburger = ({ state }) => {
  //variables for dom nodes
  let menu = useRef(null)
  let revealMenu = useRef(null)
  let revealMenuBackground = useRef(null)
  let menuBackground = useRef(null)
  let line1 = useRef(null)
  let line2 = useRef(null)
  let line3 = useRef(null)
  let info = useRef(null)

  useEffect(() => {
    if (state.clicked === false) {
      //close menu
      gsap.to([revealMenu, revealMenuBackground], {
        duration: 0.8,
        height: 0,
        ease: 'power3.inOut',
        stagger: {
          amount: 0.07,
        },
      })
      //give it 1 cuz wait for animation done
      gsap.to(menu, {
        duration: 1,
        css: { display: 'none' },
      })
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      gsap.to(menu, {
        duration: 0,
        css: { display: 'block' },
      })
      gsap.to([revealMenu, revealMenuBackground], {
        duration: 0,
        opacity: 1,
        height: '100%',
      })
      staggerReveal(revealMenuBackground, revealMenu)
      fadeInUp(info)
      staggerText(line1, line2, line3)
    }
  }, [state])

  const handleHover = (e) => {
    gsap.to(e.target, {
      duration: 0.3,
      y: 3,
      skewX: 4,
      ease: 'power3.inOut',
    })
  }
  const handleHoverExit = (e) => {
    gsap.to(e.target, {
      duration: 0.3,
      y: -3,
      skewX: 0,
      ease: 'power3.inOut',
    })
  }
  return (
    <div ref={(el) => (menu = el)} className='hamburger-menu'>
      <div
        ref={(el) => (revealMenuBackground = el)}
        className='menu-secondary-background-color'
      ></div>
      <div ref={(el) => (revealMenu = el)} className='menu-layer'>
        <div
          ref={(el) => (menuBackground = el)}
          className='menu-city-background'
        ></div>
        <div className='container'>
          <div className='wrapper'>
            <div className='menu-links'>
              <nav>
                <ul>
                  <li>
                    <Link
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                      ref={(el) => (line1 = el)}
                      to='/opportunities'
                    >
                      Course
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                      ref={(el) => (line2 = el)}
                      to='/solutions'
                    >
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                      ref={(el) => (line3 = el)}
                      to='/contact-us'
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </nav>
              <div ref={(el) => (info = el)} className='info'>
                <h3>Our Promise</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
                  voluptas inventore ipsam aspernatur voluptatum tempora dolore
                  recusandae ullam repudiandae saepe doloribus expedita
                  molestias neque veritatis sapiente quaerat, ea, esse aliquid.
                </p>
              </div>
              <div className='locations'>
                Services:
                {menuItems.map((item) => (
                  <span
                    key={item.name}
                    onMouseEnter={() => handleItem(item.image, menuBackground)}
                    onMouseOut={() => handleCityReturn(menuBackground)}
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hamburger
