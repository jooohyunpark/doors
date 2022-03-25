import { useRef, useState, useEffect } from 'react'
import Router from 'next/router'
import { animateTo } from '@/utils'
import { doorConfig } from '@/data'
import { GradientTexture } from '@react-three/drei'
import { hexToRGBA } from '@/utils'

const Door = (props) => {
  const {
    color = 0xffffff,
    position = [0, 0, 0],
    rotation = [0, 0, 0],
    id = 0
  } = props

  const { width, height } = doorConfig
  const offsetY = height * 0.5

  const mesh = useRef()
  const light = useRef()

  const [hovered, setHover] = useState(false)

  useEffect(() => {
    return () => {}
  }, [])

  useEffect(() => {
    if (hovered) {
      animateTo([mesh.current.scale, light.current.scale], {
        x: 1.3
      })
    } else {
      animateTo([mesh.current.scale, light.current.scale], {
        x: 1
      })
    }
  }, [hovered])

  return (
    <group position={position} rotation={rotation}>
      <mesh
        ref={mesh}
        position={[0, offsetY, 0]}
        rotation={[0, Math.PI, 0]}
        onClick={() => {
          if (id === 0) Router.push('/')
          else Router.push('/room/[id]', `/room/${id}`)
        }}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        <planeBufferGeometry args={[width, height]} />
        <meshBasicMaterial color={color} />
      </mesh>

      <mesh
        ref={light}
        position={[0, 0, height * -1]}
        rotation={[Math.PI * 0.5, Math.PI, 0]}
      >
        <planeBufferGeometry args={[width, height * 2]} />
        <meshBasicMaterial transparent={true}>
          <GradientTexture
            stops={[0, 1]} // As many stops as you want
            colors={[hexToRGBA(color, 0.5), hexToRGBA(color, 0)]} // Colors need to match the number of stops
            size={1024} // Size is optional, default = 1024
          />
        </meshBasicMaterial>
      </mesh>
    </group>
  )
}

export default Door
