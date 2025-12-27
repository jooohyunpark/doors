"use client";

import { useRef, useState, useMemo } from "react";
import { useRouter } from "next/navigation";

import { doorConfig } from "@/data";
import { useSpring, animated } from "@react-spring/three";
import * as THREE from "three";

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

  const mesh = useRef();
  const light = useRef();

  const [hovered, setHover] = useState(false);

  const { door_scale, light_scale, light_opacity } = useSpring({
    door_scale: hovered ? [1.2, 1, 1] : [1, 1, 1],
    light_scale: hovered ? [1.2, 1, 1] : [1, 1, 1],
    light_opacity: hovered ? 1 : 0.5,
    config: {
      duration: 200,
    },
  });

  // Create a gradient texture that properly handles alpha
  const gradientTexture = useMemo(() => {
    const size = 1024;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");

    // Parse hex color
    let hex = color.replace("#", "");
    if (hex.length === 3) {
      hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
    }
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    // Create gradient from color to transparent
    const gradient = ctx.createLinearGradient(0, 0, 0, size);
    gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, 1)`);
    gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }, [color]);

  return (
    <group position={position} rotation={rotation}>
      <animated.mesh
        ref={mesh}
        scale={door_scale}
        position={[0, offsetY, 0]}
        rotation={[0, Math.PI, 0]}
        onClick={() => {
          router.push(`/room/${id}`);
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
        <animated.meshBasicMaterial
          transparent={true}
          opacity={light_opacity}
          map={gradientTexture}
        />
      </animated.mesh>
    </group>
  );
};

export default Door;
