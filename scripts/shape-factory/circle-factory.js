import generateCoordinates from '../util/coordinates-genrator.js';
import configureCommonSvgAttributes from './generic-shape-cofiguration.js';
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

// In order to generate a unique ID for each circle, so we can further query each one individually, it will use the Date.now() function.
// Date.now() gives us the total milliseconds elapsed since January 1st 1970, and assuming that the user won't spam the buttons somehow, it should be a sufficient solution.
function createCircleElement(coordinates) {
  const circleElement = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'circle'
  );
  circleElement.id = Date.now();
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
        type: 'color',
        displayName: 'Stroke',
      },
      'stroke-width': {
        value: circleElement.getAttribute('stroke-width') || 1,
        type: 'number',
        displayName: 'Stroke width',
      },
      fill: {
        value: circleElement.getAttribute('fill'),
        type: 'color',
        displayName: 'Fill color',
      },
    };
    visualiseShapeProperties(circleElement.id, shapeProperties);
  });
}
