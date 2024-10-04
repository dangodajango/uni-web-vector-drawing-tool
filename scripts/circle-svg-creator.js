import calculateRandomValueInRange from './util/random-number-generator.js'

export default function appendCircleToCanvas(canvas) {
  const radius = 20;
  const x = calculateRandomValueInRange(
    radius,
    canvas.getAttribute('width') - radius
  );
  const y = calculateRandomValueInRange(
    radius,
    canvas.getAttribute('height') - radius
  );
  const circleSvgElement = createCircleSvgElement(x, y, radius);
  canvas.appendChild(circleSvgElement);
}

function createCircleSvgElement(x, y, radius) {
  const circleSvgElement = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'circle'
  );
  circleSvgElement.setAttribute('cx', x);
  circleSvgElement.setAttribute('cy', y);
  circleSvgElement.setAttribute('r', radius);
  circleSvgElement.setAttribute('fill', 'white');
  circleSvgElement.setAttribute('stroke', 'black');
  circleSvgElement.addEventListener(
    'click',
    selectElement.bind(this, circleSvgElement)
  );
  return circleSvgElement;
}

function selectElement(svgElement) {
  console.log(svgElement);
}