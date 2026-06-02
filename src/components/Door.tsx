"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSpring, animated } from "@react-spring/three";
import { GradientTexture } from "@react-three/drei";
import { doorConfig } from "@/data";

const { width, height } = doorConfig;
const lightHeight = height * 2.5;
const springConfig = { duration: 200 };

interface DoorProps {
  color?: string;
  position?: [number, number, number];
  rotation?: [number, number, number];
  id: number;
}

const Door = ({
  color = "#ffffff",
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  id,
}: DoorProps) => {
  const router = useRouter();
  const [hovered, setHover] = useState(false);

  const { scale, opacity } = useSpring({
    scale: hovered ? ([1.2, 1, 1] as [number, number, number]) : ([1, 1, 1] as [number, number, number]),
    opacity: hovered ? 1 : 0.5,
    config: springConfig,
  });

  return (
    <group position={position} rotation={rotation}>
      <animated.mesh
        scale={scale}
        position={[0, height * 0.5, 0]}
        rotation={[0, Math.PI, 0]}
        onClick={() => router.push(`/room/${id}`)}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        <planeGeometry args={[width, height]} />
        <meshBasicMaterial color={color} />
      </animated.mesh>

      <animated.mesh
        scale={scale}
        position={[0, 0, lightHeight * -0.5]}
        rotation={[Math.PI * 0.5, Math.PI, 0]}
        raycast={() => null}
      >
        <planeGeometry args={[width, lightHeight]} />
        <animated.meshBasicMaterial color={color} transparent opacity={opacity}>
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
