"use client";

import { doors, roomData } from "@/data";
import Room from "@/components/Room";

export default function Home({ id = 1 }) {
  return (
    <Room
      color={roomData[id].color}
      data={doors(roomData.filter((room) => room.id !== id))}
    />
  );
}
