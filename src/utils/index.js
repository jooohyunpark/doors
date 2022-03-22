import gsap from 'gsap'

export const animateTo = (target, to) => {
  gsap.to(target, {
    duration: 0.25,
    ease: 'power2.inOut',
    ...to
  })
}

export const animateFromTo = (target, from, to) => {
  return gsap.fromTo(
    target,
    { ...from },
    {
      duration: 0.25,
      ease: 'power2.inOut',
      ...to
    }
  )
}

export const getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min) //The maximum is inclusive and the minimum is inclusive
}

export const shuffledArray = (min = -5, max = 5) => {
  if (min > max) return

  const array = []
  for (let i = 0; i < max - min + 1; i++) {
    array.push(min + i)
  }

  return array.sort((a, b) => 0.5 - Math.random())
}

export const hexToRGBA = (hexCode, opacity = 1) => {
  let hex = hexCode.replace('#', '')

  if (hex.length === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`
  }

  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)

  /* Backward compatibility for whole number based opacity values. */
  if (opacity > 1 && opacity <= 100) {
    opacity = opacity / 100
  }

  return `rgba(${r},${g},${b},${opacity})`
}
