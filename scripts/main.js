const canvas = document.getElementById('canvas');

const clearCanvasButton = document.getElementById('clear-canvas');
clearCanvasButton.addEventListener('click', clearCanvas.bind(this, canvas));

const circleButton = document.getElementById('create-circle-button');
circleButton.addEventListener('click', createCircle.bind(this, canvas));

function clearCanvas(canvas) {
  canvas.innerHTML = '';
}

function createCircle(canvas) {
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
  circleSvgElement.setAttribute('fill', 'black');
  circleSvgElement.setAttribute('r', radius);
  circleSvgElement.setAttribute('cx', x);
  circleSvgElement.setAttribute('cy', y);
  circleSvgElement.addEventListener(
    'click',
    selectElement.bind(this, circleSvgElement)
  );
  return circleSvgElement;
}

function calculateRandomValueInRange(lowerBound, upperBound) {
  return Math.random() * (upperBound - lowerBound) + lowerBound;
}

function selectElement(svgElement) {
  console.log(svgElement);
}
