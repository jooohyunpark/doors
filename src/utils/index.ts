export const getRandomInt = (min: number, max: number): number => {
  const lo = Math.ceil(min);
  const hi = Math.floor(max);
  return Math.floor(Math.random() * (hi - lo + 1) + lo);
};

export const shuffledRange = (min: number, max: number): number[] => {
  if (min > max) return [];

  const array = Array.from({ length: max - min + 1 }, (_, i) => min + i);

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};
