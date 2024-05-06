import { doors, roomData, getRoomData } from "@/data";
import Room from "@/components/Three/Room";

export default function Page({ id = 1 }) {
  return (
    <Room
      color={getRoomData(id).color}
      data={doors(roomData.filter((room) => room.id !== id))}
    />
  );
}
