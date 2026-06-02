"use client";

import dynamic from "next/dynamic";

const Room = dynamic(() => import("@/components/Room"), { ssr: false });

export default function RoomCanvas({ id, color }: { id: number; color: string }) {
  return <Room id={id} color={color} />;
}
