import { useState } from "react";
import { useRouter } from "next/router";
import { useSpring, animated } from "@react-spring/three";
import { GradientTexture } from "@react-three/drei";

import { doorConfig } from "@/data";

const Door = ({
  color = "#ffffff",
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  id = 0,
}) => {
  const router = useRouter();

  const { width, height } = doorConfig;
  const offsetY = height * 0.5;
  const lightWidth = width;
  const lightHeight = height * 2.5;

  const [hovered, setHover] = useState(false);

  const { door_scale, light_scale, light_opacity } = useSpring({
    door_scale: hovered ? [1.2, 1, 1] : [1, 1, 1],
    light_scale: hovered ? [1.2, 1, 1] : [1, 1, 1],
    light_opacity: hovered ? 1 : 0.5,
    config: { duration: 200 },
  });

  return (
    <group position={position} rotation={rotation}>
      <animated.mesh
        scale={door_scale}
        position={[0, offsetY, 0]}
        rotation={[0, Math.PI, 0]}
        onClick={() => router.push(`/room/${id}`)}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        <planeGeometry args={[width, height]} />
        <meshBasicMaterial color={color} />
      </animated.mesh>

      <animated.mesh
        scale={light_scale}
        position={[0, 0, lightHeight * -0.5]}
        rotation={[Math.PI * 0.5, Math.PI, 0]}
      >
        <planeGeometry args={[lightWidth, lightHeight]} />
        <animated.meshBasicMaterial
          color={color}
          transparent
          opacity={light_opacity}
        >
          {/* alphaMap, not map: drei's GradientTexture parses colors through THREE.Color, which strips alpha */}
          <GradientTexture
            attach="alphaMap"
            stops={[0, 1]}
            colors={["white", "black"]}
            size={1024}
          />
        </animated.meshBasicMaterial>
      </animated.mesh>
    </group>
  );
};

export default Door;
