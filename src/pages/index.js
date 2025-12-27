import Room from "@/components/Three/Room";
import { doors, roomData, getRoomData } from "@/data";

export default function Home({ room, doorsData }) {
  if (!room) return null;

  return <Room color={room.color} data={doorsData} />;
}

export async function getStaticProps() {
  const defaultRoomId = 1;
  const room = getRoomData(defaultRoomId);

  if (!room) {
    return { notFound: true };
  }

  return {
    props: {
      room,
      doorsData: doors(roomData.filter((entry) => entry.id !== defaultRoomId)),
    },
  };
}
