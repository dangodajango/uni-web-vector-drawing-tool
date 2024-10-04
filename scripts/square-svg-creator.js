import generateCoordinates from './util/coordinates-genrator.js';
import {
  configureCommonSvgAttributes,
  configureCommonEventListeners,
} from './generic-svg-configurer.js';

const DEFAULT_SQUARE_SIDE_SIZE = 40;

export default function appendSquareToCanvas(canvas) {
  const coordiantes = generateCoordinates(
    canvas.getAttribute('width'),
    canvas.getAttribute('height'),
    DEFAULT_SQUARE_SIDE_SIZE
  );
  const squareSvgElement = createSquareSvgElement(coordiantes);
  canvas.appendChild(squareSvgElement);
}

function createSquareSvgElement(coordiantes) {
  const squareSvgElement = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'rect'
  );
  squareSvgElement.setAttribute('x', coordiantes.x);
  squareSvgElement.setAttribute('y', coordiantes.y);
  squareSvgElement.setAttribute('width', DEFAULT_SQUARE_SIDE_SIZE);
  squareSvgElement.setAttribute('height', DEFAULT_SQUARE_SIDE_SIZE);
  configureCommonSvgAttributes(squareSvgElement, 'white', 'black');
  configureCommonEventListeners(squareSvgElement);
  return squareSvgElement;
}
