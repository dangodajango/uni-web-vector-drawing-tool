import { updateDragFunctions } from '../canvas/canvas-configuration.js';
import { squareDragFunctions } from '../shape-drag-sizing/square-drag.js';
import { ellipseDragFunctions } from '../shape-drag-sizing/ellipse-drag.js';

// When a button for shape creation is pressed, it will load the corresponding shape dragging logic into the canvas where the dragging listeners are implemented.
export default function configureShapeButtons() {
  configureSquareButton();
  configureEllipseButton();
}

function configureSquareButton() {
  const squareButton = document.getElementById('create-square-button');
  squareButton.addEventListener('click', () =>
    updateDragFunctions(squareDragFunctions)
  );
}

function configureEllipseButton() {
  const ellipseButton = document.getElementById('create-ellipse-button');
  ellipseButton.addEventListener('click', () =>
    updateDragFunctions(ellipseDragFunctions)
  );
}
