import { Canvas } from 'react-three-fiber'
import Control from '@/components/Control'

const Canvas_ = ({ children = '' }) => {
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
        }}>
        <Control />

        {children}
      </Canvas>
    </div>
  )
}

export default Canvas_
