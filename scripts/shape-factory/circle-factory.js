import generateCoordinates from '../util/coordinates-genrator.js';
import {
  configureCommonSvgAttributes,
  configureCommonEventListeners,
} from './generic-shape-cofiguration.js.js';

const DEFAULT_RADIUS = 20;

export default function appendCircleToCanvas(canvas) {
  const coordinates = generateCoordinates(
    canvas.getAttribute('width'),
    canvas.getAttribute('height'),
    DEFAULT_RADIUS
  );
  const circleSvgElement = createCircleElement(coordinates);
  canvas.appendChild(circleSvgElement);
}

function createCircleElement(coordinates) {
  const circleSvgElement = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'circle'
  );
  circleSvgElement.setAttribute('cx', coordinates.x);
  circleSvgElement.setAttribute('cy', coordinates.y);
  circleSvgElement.setAttribute('r', DEFAULT_RADIUS);
  configureCommonSvgAttributes(circleSvgElement, 'white', 'black');
  configureCommonEventListeners(circleSvgElement);
  return circleSvgElement;
}
