import { useRef, useState, useEffect } from 'react'
import Router from 'next/router'
import { animateTo } from '@/utils'
import * as THREE from 'three'
import Roboto from '@/assets/font/roboto.json'

const intensity = {
  from: 1,
  to: 100
}
const width = 20
const height = 20 * 1.618

const font = new THREE.FontLoader().parse(Roboto)
const textConfig = {
  font,
  size: 3,
  height: 0
}

const Exit = (props) => {
  const { position, rotation, title = '' } = props
  const url = '/' + title.toLowerCase().replace(' ', '-')

  const mesh = useRef()
  const light = useRef()
  const text = useRef()

  const [hovered, setHover] = useState(false)

  useEffect(() => {
    text.current.geometry.center()
    return () => {
      console.log('destroy exit')
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
      animateTo(text.current.material, {
        opacity: 1,
        duration: 0.5
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
      animateTo(text.current.material, {
        opacity: 0,
        duration: 0.5
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
        <planeGeometry args={[width, height]} />
        <meshBasicMaterial color={props.color || '#ffffff'} />
      </mesh>

      <rectAreaLight
        ref={light}
        width={width}
        height={height}
        color={props.color || '#ffffff'}
        intensity={intensity.from}
      />

      <mesh ref={text} position={[0, height + 10, 0]} rotation={[-Math.PI, 0, Math.PI]}>
        <textGeometry args={[title, textConfig]} />
        <meshBasicMaterial transparent={true} color={'#fff'} opacity={0} />
      </mesh>
    </group>
  )
}

export default Exit
