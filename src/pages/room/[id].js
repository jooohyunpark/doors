import Room from "@/components/Three/Room";
import { doors, roomData, getRoomData } from "@/data";

export default function RoomPage({ room, doorsData }) {
  if (!room) return null;

  return <Room color={room.color} data={doorsData} />;
}

export function getStaticPaths() {
  return {
    paths: roomData.map((room) => ({
      params: { id: room.id.toString() },
    })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const roomId = Number(params.id);
  const room = getRoomData(roomId);

  if (!room) {
    return { notFound: true };
  }

  return {
    props: {
      room,
      doorsData: doors(roomData.filter((entry) => entry.id !== roomId)),
    },
  };
}
