import calculateRandomValueInRange from './util/random-number-generator.js'

export default function appendSquaretoCanvas(canvas) {
  const width = 40;
  const x = calculateRandomValueInRange(
    width,
    canvas.getAttribute('width') - width
  );
  const y = calculateRandomValueInRange(
    width,
    canvas.getAttribute('height') - width
  );
  const squareSvgElement = createSquareSvgElement(x, y, width);
  canvas.appendChild(squareSvgElement);
}

function createSquareSvgElement(x, y, width) {
  const squareSvgElement = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'rect'
  );
  squareSvgElement.setAttribute('x', x);
  squareSvgElement.setAttribute('y', y);
  squareSvgElement.setAttribute('width', width);
  squareSvgElement.setAttribute('height', width);
  squareSvgElement.setAttribute('fill', 'white');
  squareSvgElement.setAttribute('stroke', 'black');
  squareSvgElement.addEventListener(
    'click',
    selectElement.bind(this, squareSvgElement)
  );
  return squareSvgElement;
}

function selectElement(svgElement) {
  console.log(svgElement);
}