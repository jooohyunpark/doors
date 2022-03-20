import Door from '@/components/Door'
import { doorConfig } from '@/data'
import { getRandomInt } from '@/utils'
import Canvas from '@/components/Canvas'
import Floor from '@/components/Floor'

const Scene = () => {
  return (
    <Canvas>
      <Floor />
      {/* <ambientLight color={0x00ffff} intensity={1} /> */}

      {/* <color attach="background" args={0x00ffff} /> */}

      <Door color={0xffffff} position={[0, 0, 0]} rotation={[0, 0, 0]} url={'/'} />
    </Canvas>
  )
}

export default Scene
