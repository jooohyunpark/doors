import { doorConfig } from '@/data'
const Floor = () => {
  const { width, height, range, offset } = doorConfig

  const size = width * offset * range[1]

  return (
    <mesh position={[0, -0.1, 0]} rotation={[-Math.PI * 0.5, 0, 0]}>
      <planeBufferGeometry args={[size * 2, size * 2]} />
      <meshBasicMaterial color={0x000000} />
    </mesh>
  )
}

export default Floor
