import { useRef, useState, useEffect } from 'react'
import Router from 'next/router'
import { animateTo } from '@/utils'
import { doorConfig } from '@/data'

const intensity = {
  from: 1,
  to: 100
}
const width = doorConfig.width
const height = doorConfig.height

const scale = 1.2

const Door = (props) => {
  const { color = 0xffffff, position, rotation, url } = props

  const mesh = useRef()
  const light = useRef()

  const [hovered, setHover] = useState(false)

  useEffect(() => {
    return () => {
      console.log('destory door')
    }
  }, [])

  useEffect(() => {
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
          Router.push(url)
        }}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}>
        <planeBufferGeometry args={[width, height]} />
        <meshBasicMaterial color={color} />
      </mesh>

      <rectAreaLight
        ref={light}
        width={width}
        height={height}
        color={color}
        intensity={intensity.from}
      />
    </group>
  )
}

export default Door
