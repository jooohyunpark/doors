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
          position: [10, 1, -10],
          zoom: 3
        }}>
        <Control />

        {children}
      </Canvas>
    </div>
  )
}

export default Canvas_
