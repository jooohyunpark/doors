import { OrbitControls } from '@react-three/drei'
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

export default Control
