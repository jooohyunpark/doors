import Door from '@/components/Door'
import { doorConfig } from '@/data'
import { getRandomInt } from '@/utils'
import Canvas from '@/components/Canvas'
import Floor from '@/components/Floor'

const Scene = ({ color = 0xffffff }) => {
  return (
    <Canvas>
      <Floor color={color} />
      <ambientLight intensity={1} />

      <Door
        color={0xffffff}
        position={[
          getRandomInt(-5, 5) * doorConfig.width * 3,
          0,
          getRandomInt(-5, 5) * doorConfig.width * 3
        ]}
        rotation={[0, Math.PI * getRandomInt(-2, 2) * 0.5, 0]}
        url={'/'}
      />
    </Canvas>
  )
}

export default Scene
