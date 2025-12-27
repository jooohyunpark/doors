import { roomData } from "@/data";

export function generateStaticParams() {
  return roomData.map((room) => ({
    id: room.id.toString(),
  }));
}

export default function Layout({ children }) {
  return <>{children}</>;
}
