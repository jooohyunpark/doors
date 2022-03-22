import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import { doorConfig } from '@/data'

const Control = () => {
  return (
    <OrbitControls
      enablePan={false}
      enableDamping={true}
      dampingFactor={0.05}
      enableRotate={true}
      rotateSpeed={0.5}
      minPolarAngle={Math.PI * 0.5 * 0.75}
      maxPolarAngle={Math.PI * 0.5 * 0.75}
      enableZoom={false}
      minDistance={1000}
      maxDistance={1000}
      target={[0, doorConfig.height * 0.5, 0]}
    />
  )
}

const LCanvas = ({ children }) => {
  return (
    <Canvas
      orthographic
      colorManagement
      gl={{ antialias: true }}
      camera={{
        near: 0.1,
        far: 10000,
        position: [1, 1, -1],
        zoom: 3
      }}
      mode='concurrent'
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      }}
    >
      <Control />
      <Preload all />
      {children}
    </Canvas>
  )
}

export default LCanvas
