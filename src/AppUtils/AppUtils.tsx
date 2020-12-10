export const getRandomInteger = (max: number, min: number) => {
  return Math.floor(Math.sqrt(Math.random()) * max) + min
}
