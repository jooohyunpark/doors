import { useState, useEffect } from 'react'
import gsap from 'gsap'

export const breakpoints = {
  sm: 360,
  md: 768,
  lg: 1024,
  xl: 1440,
  max: 1920
}

export const animateTo = (target, to) => {
  gsap.to(target, {
    duration: 0.3,
    ease: 'power2.inOut',
    ...to
  })
}

export const animateFromTo = (target, from, to) => {
  return gsap.fromTo(
    target,
    { ...from },
    {
      duration: 0.3,
      ease: 'power2.inOut',
      ...to
    }
  )
}

export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => {
      setMatches(media.matches)
    }
    media.addListener(listener)
    return () => media.removeListener(listener)
  }, [matches, query])

  return matches
}

export const BELOW = (query) => {
  return useMediaQuery(`(max-width: ${breakpoints[query]}px)`)
}
export const ABOVE = (query) => {
  return useMediaQuery(`(min-width: ${breakpoints[query]}px)`)
}
