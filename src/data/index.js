import { getRandomInt, shuffledArray } from "@/utils";

export const doorConfig = {
  width: 10,
  height: 10 * 1.618,
  range: [-5, 5],
  offset: 4,
};

export const roomData = [
  { id: 1, color: "#000000" },
  // { id: 2, color: "#ff0000" },
  // { id: 3, color: "#00ff00" },
  // { id: 4, color: "#0000ff" },
  // { id: 5, color: "#00ffff" },
  // { id: 6, color: "#ff00ff" },
  // { id: 7, color: "#ffff00" },
  { id: 8, color: "#ffffff" },
];

export const getRoomData = (id) => roomData.find((d) => d.id === id);

export const doors = (data = [{ color: 0xffffff, id: 0 }]) => {
  const array = [];

  const { offset, range } = doorConfig;

  const xArray = shuffledArray(range[0], range[1]);
  const zArray = shuffledArray(range[0], range[1]);

  for (let i = 0; i < data.length; i++) {
    array.push({
      position: [
        xArray.pop() * doorConfig.width * offset,
        0,
        zArray.pop() * doorConfig.width * offset,
      ],
      rotation: [0, Math.PI * getRandomInt(-2, 2) * 0.5, 0],
      color: data[i].color,
      id: data[i].id,
    });
  }

  return array;
};
