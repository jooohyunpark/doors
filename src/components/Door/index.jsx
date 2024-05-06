import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

import { doorConfig } from "@/data";
import { GradientTexture } from "@react-three/drei";
import { hexToRGBA } from "@/utils";
import { useSpring, animated } from "@react-spring/three";

const Door = ({
  color = 0xffffff,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  id = 0,
}) => {
  const router = useRouter();

  const { width, height } = doorConfig;
  const offsetY = height * 0.5;

  const lightWidth = width;
  const lightHeight = height * 2;

  const mesh = useRef();
  const light = useRef();

  const [hovered, setHover] = useState(false);

  const { door_scale, light_scale, light_opacity } = useSpring({
    door_scale: hovered ? [1.3, 1, 1] : [1, 1, 1],
    light_scale: hovered ? [1.3, 1, 1] : [1, 1, 1],
    light_opacity: hovered ? 1 : 0.5,
    config: {
      duration: 200,
    },
  });

  return (
    <group position={position} rotation={rotation}>
      <animated.mesh
        ref={mesh}
        scale={door_scale}
        position={[0, offsetY, 0]}
        rotation={[0, Math.PI, 0]}
        onClick={() => {
          router.push(`/room/${id}`);
          // if (id === 0) router.push("/");
          // else router.push(`/room/${id}`);
        }}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        <planeGeometry args={[width, height]} />
        <meshBasicMaterial color={color} />
      </animated.mesh>

      <animated.mesh
        ref={light}
        scale={light_scale}
        position={[0, 0, lightHeight * -0.5]}
        rotation={[Math.PI * 0.5, Math.PI, 0]}
      >
        <planeGeometry args={[lightWidth, lightHeight]} />
        <animated.meshBasicMaterial transparent={true} opacity={light_opacity}>
          <GradientTexture
            stops={[0, 1]} // As many stops as you want
            colors={[hexToRGBA(color, 0.75), hexToRGBA(color, 0)]} // Colors need to match the number of stops
            size={1024} // Size is optional, default = 1024
          />
        </animated.meshBasicMaterial>
      </animated.mesh>
    </group>
  );
};

export default Door;
