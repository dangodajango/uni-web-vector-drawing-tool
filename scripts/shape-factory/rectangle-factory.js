import {
  configureCommonSvgAttributes,
  getCommongShapeProperties,
} from './generic-shape-cofiguration.js';
import { canvas } from '../canvas/canvas-configuration.js';
import { operation } from '../operation-menu/operation-buttons-configuration.js';
import { selectShape } from '../operation-menu/select-shape.js';

export default function appendRectangleToCanvas(coordiantes, sidesLength) {
  console.log(coordiantes, canvas, sidesLength);
  const rectangleElement = createRectangleElement(coordiantes, sidesLength);
  canvas.appendChild(rectangleElement);
  return rectangleElement;
}

// In order to generate a unique ID for each rectangle, so we can further query each one individually, it will use the Date.now() function.
// Date.now() gives us the total milliseconds elapsed since January 1st 1970, and assuming that the user won't spam the buttons somehow, it should be a sufficient solution.
function createRectangleElement(coordiantes, sidesLength) {
  const rectangleElement = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'rect'
  );
  rectangleElement.id = Date.now();
  rectangleElement.setAttribute('x', coordiantes.x);
  rectangleElement.setAttribute('y', coordiantes.y);
  rectangleElement.setAttribute('width', sidesLength.width);
  rectangleElement.setAttribute('height', sidesLength.height);
  configureCommonSvgAttributes(rectangleElement, 'white', 'black');
  configureOnClickEventListener(rectangleElement);
  return rectangleElement;
}

function configureOnClickEventListener(rectangleElement) {
  rectangleElement.addEventListener('click', () => {
    switch (operation) {
      case 'SELECT':
        selectRectangle(rectangleElement);
        break;
    }
  });
}

function selectRectangle(rectangleElement) {
  const rectangleProperties = {
    x: {
      value: rectangleElement.getAttribute('x'),
      type: 'number',
      displayName: 'X',
    },
    y: {
      value: rectangleElement.getAttribute('y'),
      type: 'number',
      displayName: 'Y',
    },
    width: {
      value: rectangleElement.getAttribute('width'),
      type: 'number',
      displayName: 'Width',
    },
    height: {
      value: rectangleElement.getAttribute('height'),
      type: 'number',
      displayName: 'Height',
    },
    ...getCommongShapeProperties(rectangleElement),
  };
  selectShape(rectangleElement, rectangleProperties);
}
