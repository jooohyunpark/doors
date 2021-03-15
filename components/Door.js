import { useRef, useState, useEffect } from 'react'
import Router from 'next/router'
import { animateTo } from '@/utils'

const intensity = {
  from: 1,
  to: 100
}
const width = 20
const height = 20 * 1.618

const Door = (props) => {
  const { color, position, rotation, url } = props

  const mesh = useRef()
  const light = useRef()

  const [hovered, setHover] = useState(false)

  useEffect(() => {
    return () => {
      console.log('destory door')
    }
  }, [])

  useEffect(() => {
    const scale = 1.2

    if (hovered) {
      animateTo(light.current, {
        intensity: intensity.to,
        width: width * scale,
        height: height * scale
      })
      animateTo(mesh.current.scale, {
        x: scale,
        y: scale
      })
    } else {
      animateTo(light.current, {
        intensity: intensity.from,
        width: width,
        height: height
      })
      animateTo(mesh.current.scale, {
        x: 1,
        y: 1
      })
    }
  }, [hovered])

  return (
    <group
      position={position ? [position[0], position[1], position[2]] : [0, 0, 0]}
      rotation={rotation ? [rotation[0], rotation[1], rotation[2]] : [0, 0, 0]}>
      <mesh
        ref={mesh}
        position={[0, height * 0.5, 0]}
        rotation={[0, Math.PI, 0]}
        onClick={() => {
          console.log('pushed')
          Router.push(url)
        }}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}>
        <planeGeometry args={[width, height]} />
        <meshBasicMaterial color={color || '#ffffff'} />
      </mesh>

      <rectAreaLight
        ref={light}
        width={width}
        height={height}
        color={color || '#ffffff'}
        intensity={intensity.from}
      />
    </group>
  )
}

export default Door
