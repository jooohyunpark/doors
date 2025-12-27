export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
};

export const shuffledArray = (min = -5, max = 5) => {
  if (min > max) return;

  const array = [];
  for (let i = 0; i < max - min + 1; i++) {
    array.push(min + i);
  }

  return array.sort((a, b) => 0.5 - Math.random());
};
