import {
  configureCommonSvgAttributes,
  getCommonShapeProperties,
} from './shape-common.js';
import { canvas } from '../canvas/canvas-configuration.js';
import {
  GROUP_OPEARATION,
  operation,
  SELECT_OPEARATION,
} from '../canvas-toolbar/tools-configuration.js';
import { selectShape } from '../canvas-toolbar/select-tool.js';
import { appendShapeToGroup } from '../canvas-toolbar/group-tool.js';

export default function appendRectangleToCanvas(coordiantes, sidesLength) {
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
  rectangleElement.id = `rectangle-${Date.now()}`;
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
      case SELECT_OPEARATION:
        selectRectangle(rectangleElement);
        break;
      case GROUP_OPEARATION:
        appendShapeToGroup(rectangleElement);
        break;
    }
  });
}

export function selectRectangle(rectangleElement) {
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
  };
  selectShape(rectangleElement, rectangleProperties);
}
