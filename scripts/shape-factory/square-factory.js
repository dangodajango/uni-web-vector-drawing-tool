import generateCoordinates from '../util/coordinates-genrator.js';
import { configureCommonSvgAttributes } from './generic-shape-cofiguration.js';
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

// In order to generate a unique ID for each circle, so we can further query each one individually, it will use the Date.now() function.
// Date.now() gives us the total milliseconds elapsed since January 1st 1970, and assuming that the user won't spam the buttons somehow, it should be a sufficient solution.
function createSquareElement(coordiantes) {
  const squareElement = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'rect'
  );
  squareElement.id = Date.now();
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
      x: {
        value: squareElement.getAttribute('x'),
        type: 'number',
        displayName: 'X',
      },
      y: {
        value: squareElement.getAttribute('y'),
        type: 'number',
        displayName: 'Y',
      },
      width: {
        value: squareElement.getAttribute('width'),
        type: 'number',
        displayName: 'Width',
      },
      height: {
        value: squareElement.getAttribute('height'),
        type: 'number',
        displayName: 'Height',
      },
      stroke: {
        value: squareElement.getAttribute('stroke'),
        type: 'color',
        displayName: 'Stroke',
      },
      'stroke-width': {
        value: squareElement.getAttribute('stroke-width') || 1,
        type: 'number',
        displayName: 'Stroke width',
      },
      fill: {
        value: squareElement.getAttribute('fill'),
        type: 'color',
        displayName: 'Fill color',
      },
    };
    visualiseShapeProperties(squareElement.id, squareProperties);
  });
}
