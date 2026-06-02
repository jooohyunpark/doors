import { notFound } from "next/navigation";
import { roomData, getRoomData } from "@/data";
import RoomCanvas from "@/components/RoomCanvas";

export const dynamicParams = false;

export function generateStaticParams() {
  return roomData.map((room) => ({ id: room.id.toString() }));
}

export default async function RoomPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const room = getRoomData(Number(id));

  if (!room) notFound();

  return <RoomCanvas id={room.id} color={room.color} />;
}
