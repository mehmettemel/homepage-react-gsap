import React, { useEffect, useRef } from 'react'
import '../styles/Home.scss'
import images from '../images/homeImages'
import useWindowSize from '../hooks/useWindowSize'
function Home() {
  //hooks
  const size = useWindowSize()
  //REF
  const home = useRef()
  const scrollContainer = useRef()
  const skewConfigs = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  }

  useEffect(() => {
    requestAnimationFrame(() => skewScrolling())
  }, [])

  useEffect(() => {
    console.log(size.height)
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height
    }px`
  }, [size.height])

  const skewScrolling = () => {
    //Set Current to the scroll position amount
    skewConfigs.current = window.scrollY
    // Set Previous to the scroll previous position
    skewConfigs.previous +=
      (skewConfigs.current - skewConfigs.previous) * skewConfigs.ease
    // Set rounded to
    skewConfigs.rounded = Math.round(skewConfigs.previous * 100) / 100

    // Difference between
    const difference = skewConfigs.current - skewConfigs.rounded
    const acceleration = difference / size.width
    const velocity = +acceleration
    const skew = velocity * 11.5

    //Assign skew and smooth scrolling to the scroll container
    scrollContainer.current.style.transform = `translate3d(0, -${skewConfigs.rounded}px, 0) skewY(${skew}deg)`

    //loop vai raf
    requestAnimationFrame(() => skewScrolling())
  }
  return (
    <div ref={home} className='home'>
      <div ref={scrollContainer} className='scroll'>
        {images.map((image, index) => (
          <>
            <h2>
              Gallery <span className='outline'>Photos</span>
            </h2>
            <div key={index} className='img-container'>
              <img src={image} alt={`people ${index}`} />
            </div>
          </>
        ))}
      </div>
    </div>
  )
}

export default Home
