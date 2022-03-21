import { useRef, useState, useEffect } from 'react'
import * as THREE from 'three'
import Router from 'next/router'
import { animateTo } from '@/utils'
import { doorConfig } from '@/data'
import { GradientTexture } from '@react-three/drei'
import { hexToRGBA } from '@/utils'

const Door = (props) => {
  const { color = 0xffffff, position, rotation, url } = props

  const width = doorConfig.width
  const height = doorConfig.height

  const scale = 1.2

  const intensity = {
    from: 1,
    to: 100,
  }

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
      // animateTo(light.current, {
      //   intensity: intensity.to,
      //   width: width * scale,
      //   height: height * scale,
      // })
      animateTo(mesh.current.scale, {
        x: scale,
        y: scale,
      })
    } else {
      // animateTo(light.current, {
      //   intensity: intensity.from,
      //   width: width,
      //   height: height,
      // })
      animateTo(mesh.current.scale, {
        x: 1,
        y: 1,
      })
    }
  }, [hovered])

  return (
    <group
      position={position ? [position[0], position[1], position[2]] : [0, 0, 0]}
      rotation={rotation ? [rotation[0], rotation[1], rotation[2]] : [0, 0, 0]}
    >
      <mesh
        ref={mesh}
        position={[0, height * 0.5, 0]}
        rotation={[0, Math.PI, 0]}
        onClick={() => {
          Router.push(url)
        }}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        <planeBufferGeometry args={[width, height]} />
        <meshBasicMaterial color={color} />
      </mesh>

      <mesh
        position={[0, 0, height * -1]}
        rotation={[Math.PI * 0.5, Math.PI, 0]}
      >
        <planeBufferGeometry args={[width, height * 2]} />
        {/* <meshBasicMaterial color={color} transparent={true} opacity={0.5} /> */}
        <meshBasicMaterial>
          <GradientTexture
            stops={[0, 1]} // As many stops as you want
            colors={[color, hexToRGBA(color, 0.2)]} // Colors need to match the number of stops
            size={1024} // Size is optional, default = 1024
          />
        </meshBasicMaterial>
      </mesh>

      {/* <rectAreaLight
        ref={light}
        width={width}
        height={height}
        color={color}
        intensity={intensity.from}
      /> */}
    </group>
  )
}

export default Door
