import dynamic from "next/dynamic";
import { roomData, getRoomData } from "@/data";

const Room = dynamic(() => import("@/components/Room"), { ssr: false });

export default function RoomPage({ room }) {
  if (!room) return null;

  return <Room id={room.id} color={room.color} />;
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
  const room = getRoomData(Number(params.id));

  if (!room) {
    return { notFound: true };
  }

  return { props: { room } };
}
