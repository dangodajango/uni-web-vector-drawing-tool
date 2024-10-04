import generateCoordinates from '../util/coordinates-genrator.js';
import { configureCommonSvgAttributes } from './generic-shape-cofiguration.js.js';
import visualiseShapeProperties from '../shape-property-menu/shape-properties-visualiser.js';

const DEFAULT_SQUARE_SIDE_SIZE = 40;

export default function appendSquareToCanvas(canvas) {
  const coordiantes = generateCoordinates(
    canvas.getAttribute('width'),
    canvas.getAttribute('height'),
    DEFAULT_SQUARE_SIDE_SIZE
  );
  const squareSvgElement = createSquareElement(coordiantes);
  canvas.appendChild(squareSvgElement);
}

function createSquareElement(coordiantes) {
  const squareElement = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'rect'
  );
  squareElement.setAttribute('x', coordiantes.x);
  squareElement.setAttribute('y', coordiantes.y);
  squareElement.setAttribute('width', DEFAULT_SQUARE_SIDE_SIZE);
  squareElement.setAttribute('height', DEFAULT_SQUARE_SIDE_SIZE);
  configureCommonSvgAttributes(squareElement, 'white', 'black');
  configureOnClickEventListener(squareElement);
  return squareElement;
}

function configureOnClickEventListener(squareElement) {
  squareElement.addEventListener('click', () => {
    const squareProperties = {
      stroke: { value: squareElement.getAttribute('stroke'), type: 'text' },
      'stroke-width': {
        value: squareElement.getAttribute('stroke-width') || 1,
        type: 'number',
      },
      fill: { value: squareElement.getAttribute('fill'), type: 'text' },
    };
    visualiseShapeProperties(squareProperties);
  });
}
