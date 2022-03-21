import { Canvas } from 'react-three-fiber'
import * as THREE from 'three'
import Control from '@/components/Control'

const Canvas_ = ({ children = null }) => {
  return (
    <div className="scene">
      <Canvas
        orthographic
        colorManagement
        gl={{ antialias: true }}
        camera={{
          near: 0.1,
          far: 10000,
          position: [4, 1, -4],
          zoom: 3
        }}
        onCreated={({ gl, scene }) => {
          scene.background = new THREE.Color(0x5200ff)
          console.log(gl, scene)
        }}>
        <Control />

        {children}
      </Canvas>
    </div>
  )
}

export default Canvas_
