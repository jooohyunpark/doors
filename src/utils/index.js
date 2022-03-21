import gsap from 'gsap'

export const animateTo = (target, to) => {
  gsap.to(target, {
    duration: 0.25,
    ease: 'power2.inOut',
    ...to,
  })
}

export const animateFromTo = (target, from, to) => {
  return gsap.fromTo(
    target,
    { ...from },
    {
      duration: 0.25,
      ease: 'power2.inOut',
      ...to,
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

export const hexToRGBA = (h, a = 1) => {
  let r = 0,
    g = 0,
    b = 0

  if (h.length == 5) {
    r = '0x' + h[1] + h[1]
    g = '0x' + h[2] + h[2]
    b = '0x' + h[3] + h[3]
    a = '0x' + h[4] + h[4]
  } else if (h.length == 9) {
    r = '0x' + h[1] + h[2]
    g = '0x' + h[3] + h[4]
    b = '0x' + h[5] + h[6]
    a = '0x' + h[7] + h[8]
  }
  a = +(a / 255).toFixed(3)

  return 'rgba(' + +r + ',' + +g + ',' + +b + ',' + a + ')'
}
