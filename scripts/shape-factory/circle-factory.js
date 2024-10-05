import generateCoordinates from '../util/coordinates-genrator.js';
import { configureCommonSvgAttributes } from './generic-shape-cofiguration.js';
import visualiseShapeProperties from '../shape-property-menu/shape-properties-visualiser.js';

const DEFAULT_RADIUS = 20;

export default function appendCircleToCanvas(canvas) {
  const coordinates = generateCoordinates(
    canvas.getAttribute('width'),
    canvas.getAttribute('height'),
    DEFAULT_RADIUS
  );
  const circleElement = createCircleElement(coordinates);
  canvas.appendChild(circleElement);
}

function createCircleElement(coordinates) {
  const circleElement = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'circle'
  );
  circleElement.setAttribute('cx', coordinates.x);
  circleElement.setAttribute('cy', coordinates.y);
  circleElement.setAttribute('r', DEFAULT_RADIUS);
  configureCommonSvgAttributes(circleElement, 'white', 'black');
  configureOnClickEventListener(circleElement);
  return circleElement;
}

function configureOnClickEventListener(circleElement) {
  circleElement.addEventListener('click', () => {
    const shapeProperties = {
      cx: {
        value: circleElement.getAttribute('cx'),
        type: 'number',
        displayName: 'X',
      },
      cy: {
        value: circleElement.getAttribute('cy'),
        type: 'number',
        displayName: 'Y',
      },
      r: {
        value: circleElement.getAttribute('r'),
        type: 'number',
        displayName: 'Radius',
      },
      stroke: {
        value: circleElement.getAttribute('stroke'),
        type: 'text',
        displayName: 'Stroke',
      },
      'stroke-width': {
        value: circleElement.getAttribute('stroke-width') || 1,
        type: 'number',
        displayName: 'Stroke width',
      },
      fill: {
        value: circleElement.getAttribute('fill'),
        type: 'text',
        displayName: 'Fill color',
      },
    };
    visualiseShapeProperties(shapeProperties);
  });
}
