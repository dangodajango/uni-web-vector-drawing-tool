import { updateDragFunctions } from '../canvas/canvas-configuration.js';
import { squareDragFunctions } from '../shape-drag-sizing/square-drag.js';
import { circleDragFunctions } from '../shape-drag-sizing/circle-drag.js';

// When a button for shape creation is pressed, it will load the corresponding shape dragging logic into the canvas where the dragging listeners are implemented.
export default function configureShapeButtons() {
  configureSquareButton();
  configureCircleButton();
}

function configureSquareButton() {
  const squareButton = document.getElementById('create-square-button');
  squareButton.addEventListener('click', () =>
    updateDragFunctions(squareDragFunctions)
  );
}

function configureCircleButton() {
  const circleButton = document.getElementById('create-circle-button');
  circleButton.addEventListener('click', () =>
    updateDragFunctions(circleDragFunctions)
  );
}
