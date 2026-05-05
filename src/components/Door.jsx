import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSpring, animated } from "@react-spring/three";
import * as THREE from "three";

import { doorConfig } from "@/data";

const buildGradientTexture = (color) => {
  const size = 1024;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");

  const { r, g, b } = new THREE.Color(color);
  const r255 = Math.round(r * 255);
  const g255 = Math.round(g * 255);
  const b255 = Math.round(b * 255);

  const gradient = ctx.createLinearGradient(0, 0, 0, size);
  gradient.addColorStop(0, `rgba(${r255}, ${g255}, ${b255}, 1)`);
  gradient.addColorStop(1, `rgba(${r255}, ${g255}, ${b255}, 0)`);

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
};

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
  const lightHeight = height * 2;

  const [hovered, setHover] = useState(false);
  const [gradientTexture, setGradientTexture] = useState(null);

  useEffect(() => {
    const texture = buildGradientTexture(color);
    setGradientTexture(texture);
    return () => texture.dispose();
  }, [color]);

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

      {gradientTexture && (
        <animated.mesh
          scale={light_scale}
          position={[0, 0, lightHeight * -0.5]}
          rotation={[Math.PI * 0.5, Math.PI, 0]}
        >
          <planeGeometry args={[lightWidth, lightHeight]} />
          <animated.meshBasicMaterial
            transparent={true}
            opacity={light_opacity}
            map={gradientTexture}
          />
        </animated.mesh>
      )}
    </group>
  );
};

export default Door;
