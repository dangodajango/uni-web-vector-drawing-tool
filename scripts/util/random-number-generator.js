export default function calculateRandomValueInRange(lowerBound, upperBound) {
  return Math.random() * (upperBound - lowerBound) + lowerBound;
}
