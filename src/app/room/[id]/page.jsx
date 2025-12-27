"use client";

import { doors, roomData, getRoomData } from "@/data";
import Room from "@/components/Three/Room";
import { useParams } from "next/navigation";

export default function Page() {
  const { id } = useParams();
  const numId = Number(id);

  const currentRoom = getRoomData(numId);

  if (!currentRoom) return null;

  return (
    <Room
      color={currentRoom.color}
      data={doors(roomData.filter((room) => room.id !== numId))}
    />
  );
}
