import gsap from 'gsap'
export const staggerReveal = (node1, node2) => {
  gsap.from([node1, node2], {
    duration: 0.8,
    height: 0,
    transformOrigin: 'right top',
    skewY: 2,
    ease: 'power3.inOut',
    stagger: {
      amount: 0.2,
    },
  })
}

export const fadeInUp = (node) => {
  gsap.from(node, {
    y: 160,
    duration: 1,
    delay: 0.2,
    opacity: 0,
    ease: 'power3.inOut',
  })
}

export const staggerText = (node1, node2, node3) => {
  gsap.from([node1, node2, node3], {
    duration: 0.8,
    y: 100,
    delay: 0.3,
    ease: 'power3.inOut',
    stagger: {
      amount: 0.5,
    },
  })
}

export const handleItem = (item, target) => {
  gsap.to(target, {
    duration: 0,
    background: `url(${item}) center center`,
  })
  gsap.to(target, {
    duration: 0.4,
    opacity: 1,
    ease: 'power3.inOut',
  })
  gsap.from(target, {
    duration: 0.4,
    skewY: 3,
    transformOrigin: 'right top',
  })
}

export const handleCityReturn = (target) => {
  gsap.to(target, {
    duration: 0.4,
    opacity: 0,
  })
}
