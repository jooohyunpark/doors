"use client";

import { useMemo } from "react";
import Door from "@/components/Door";
import Scene from "@/components/Scene";
import { doors, roomData } from "@/data";

interface RoomProps {
  id: number;
  color?: string;
}

const Room = ({ id, color = "#000000" }: RoomProps) => {
  const data = useMemo(
    () => doors(roomData.filter((entry) => entry.id !== id)),
    [id],
  );

  return (
    <Scene>
      <color attach="background" args={[color]} />

      {data.map((door) => (
        <Door
          key={door.id}
          position={door.position}
          rotation={door.rotation}
          color={door.color}
          id={door.id}
        />
      ))}
    </Scene>
  );
};

export default Room;
