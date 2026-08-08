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

  // Each door takes one slot from each axis, so the range has to be wide enough
  // to give every entry a distinct one. Failing loudly beats handing three.js a
  // NaN position, which drops the door with no error.
  if (data.length > xs.length) {
    throw new Error(
      `doors(): ${data.length} doors requested but range [${range[0]}, ${range[1]}] only provides ${xs.length} slots`,
    );
  }

  return data.map(({ color, id }, i) => ({
    position: [xs[i] * step, 0, zs[i] * step],
    // 0..3 rather than -2..2: -2 and 2 are both a half turn, which would make
    // that one facing twice as likely as the other three.
    rotation: [0, Math.PI * getRandomInt(0, 3) * 0.5, 0],
    color,
    id,
  }));
};
