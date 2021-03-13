import React, { useRef, useEffect } from 'react'
import { animateTo } from '@/utils'

const Floor = (props) => {
  const mesh = useRef()

  useEffect(() => {
    animateTo(mesh.current.material, {
      opacity: 1,
      duration: 1
    })
  }, [])

  return (
    <mesh {...props} ref={mesh} rotation={[-0.5 * Math.PI, 0, 0]}>
      <planeGeometry args={[10000, 10000]} />
      <meshStandardMaterial
        transparent={true}
        opacity={0}
        color={0x808080}
        roughness={0.9}
        metalness={0.1}
      />
    </mesh>
  )
}

export default Floor
