import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import useStore from '@/helpers/store'
import { doorConfig } from '@/data'

const Control = () => {
  return (
    <OrbitControls
      enablePan={false}
      enableDamping={true}
      dampingFactor={0.05}
      enableRotate={true}
      rotateSpeed={0.5}
      minPolarAngle={Math.PI * 0.5 * 0.8}
      maxPolarAngle={Math.PI * 0.5 * 0.8}
      enableZoom={false}
      minDistance={1000}
      maxDistance={1000}
      target={[0, doorConfig.height * 0.5, 0]}
    />
  )
}

const LCanvas = ({ children }) => {
  const dom = useStore((state) => state.dom)

  return (
    <Canvas
      orthographic
      colorManagement
      gl={{ antialias: true }}
      camera={{
        near: 0.1,
        far: 10000,
        position: [10, 1, -10],
        zoom: 3,
      }}
      mode='concurrent'
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
      onCreated={(state) => state.events.connect(dom.current)}
    >
      <Control />
      <Preload all />
      {children}
    </Canvas>
  )
}

export default LCanvas
