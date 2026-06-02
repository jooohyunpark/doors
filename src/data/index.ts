import { getRandomInt, shuffledRange } from "@/utils";

export const doorConfig = {
  width: 10,
  height: 10 * 1.618,
  range: [-5, 5] as [number, number],
  offset: 4,
};

export interface RoomEntry {
  id: number;
  color: string;
}

export interface DoorData {
  position: [number, number, number];
  rotation: [number, number, number];
  color: string;
  id: number;
}

export const roomData: RoomEntry[] = [
  { id: 1, color: "#000000" },
  { id: 2, color: "#ff0000" },
  { id: 3, color: "#00ff00" },
  { id: 4, color: "#0000ff" },
  { id: 5, color: "#00ffff" },
  { id: 6, color: "#ff00ff" },
  { id: 7, color: "#ffff00" },
  { id: 8, color: "#ffffff" },
];

export const getRoomData = (id: number): RoomEntry | undefined =>
  roomData.find((d) => d.id === id);

export const doors = (data: RoomEntry[]): DoorData[] => {
  const { width, offset, range } = doorConfig;
  const step = width * offset;
  const xs = shuffledRange(range[0], range[1]);
  const zs = shuffledRange(range[0], range[1]);

  return data.map(({ color, id }) => ({
    position: [xs.pop()! * step, 0, zs.pop()! * step],
    rotation: [0, Math.PI * getRandomInt(-2, 2) * 0.5, 0],
    color,
    id,
  }));
};
