import {
  configureCommonSvgAttributes,
  getCommongShapeProperties,
} from './generic-shape-cofiguration.js';
import { canvas } from '../canvas/canvas-configuration.js';
import { selectShape } from '../opearations-menu/select-shape.js';
import { opearation } from '../opearations-menu/operation-buttons-configuration.js';

export default function appendEllipseToCanvas(coordinates, radius) {
  console.log(coordinates, canvas, radius);
  const ellipseElement = createEllipseElement(coordinates, radius);
  canvas.appendChild(ellipseElement);
  return ellipseElement;
}

// In order to generate a unique ID for each ellipse, so we can further query each one individually, it will use the Date.now() function.
// Date.now() gives us the total milliseconds elapsed since January 1st 1970, and assuming that the user won't spam the buttons somehow, it should be a sufficient solution.
function createEllipseElement(coordinates, radius) {
  const ellipseElement = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'ellipse'
  );
  ellipseElement.id = Date.now();
  ellipseElement.setAttribute('cx', coordinates.x);
  ellipseElement.setAttribute('cy', coordinates.y);
  ellipseElement.setAttribute('rx', radius.x);
  ellipseElement.setAttribute('ry', radius.y);
  configureCommonSvgAttributes(ellipseElement, 'white', 'black');
  configureOnClickEventListener(ellipseElement);
  return ellipseElement;
}

function configureOnClickEventListener(ellipseElement) {
  ellipseElement.addEventListener('click', () => {
    switch (opearation) {
      case 'SELECT':
        selectEllipse(ellipseElement);
        break;
    }
  });
}

function selectEllipse(ellipseElement) {
  const ellipseProperties = {
    cx: {
      value: ellipseElement.getAttribute('cx'),
      type: 'number',
      displayName: 'X',
    },
    cy: {
      value: ellipseElement.getAttribute('cy'),
      type: 'number',
      displayName: 'Y',
    },
    rx: {
      value: ellipseElement.getAttribute('rx'),
      type: 'number',
      displayName: 'Radius - X',
    },
    ry: {
      value: ellipseElement.getAttribute('ry'),
      type: 'number',
      displayName: 'Radius - Y',
    },
    ...getCommongShapeProperties(ellipseElement),
  };
  selectShape(ellipseElement, ellipseProperties);
}
