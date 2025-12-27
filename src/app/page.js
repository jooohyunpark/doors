import { doors, roomData, getRoomData } from "@/data";
import Room from "@/components/Three/Room";

export default function Page({ id = 1 }) {
  const room = getRoomData(id);
  if (!room) return null;

  return (
    <Room
      color={room.color}
      data={doors(roomData.filter((r) => r.id !== id))}
    />
  );
}
