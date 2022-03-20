import Door from '@/components/Door'
import { doorConfig } from '@/data'
import { getRandomInt } from '@/utils'
import Canvas from '@/components/Canvas'
import Floor from '@/components/Floor'

const Scene = () => {
  return (
    <Canvas>
      <Floor />
      {/* <ambientLight intensity={1} /> */}

      <Floor receiveShadow color={0xffffff} />

      <Door color={0x00ff00} position={[0, 0, 0]} rotation={[0, 0, 0]} url={'/'} />
    </Canvas>
  )
}

export default Scene
