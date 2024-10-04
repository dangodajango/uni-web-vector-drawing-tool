import calculateRandomValueInRange from './random-number-generator.js';

export default function generateCoordinates(
  coordinateSystemWidth,
  coordinateSystemHeight,
  offset
) {
  const x = calculateRandomValueInRange(offset, coordinateSystemWidth - offset);
  const y = calculateRandomValueInRange(
    offset,
    coordinateSystemHeight - offset
  );

  return {
    x: x,
    y: y,
  };
}
