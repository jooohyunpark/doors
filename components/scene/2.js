import Door from '@/components/Door'
import { doorConfig } from '@/data'
import { getRandomInt } from '@/utils'
import Canvas from '@/components/Canvas'
import Floor from '@/components/Floor'

const Scene = () => {
  // const doors = (num = 10) => {
  //   const data = []

  //   for (let i = 0; i < num; i++) {
  //     data.push({
  //       position: [
  //         getRandomInt(-5, 5) * doorConfig.width * 3,
  //         0,
  //         getRandomInt(-5, 5) * doorConfig.width * 3
  //       ],
  //       rotation: [0, Math.PI * getRandomInt(-2, 2) * 0.5, 0]
  //     })
  //   }

  //   return data
  // }

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
