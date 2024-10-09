import { updateDragFunctions } from '../canvas/canvas-configuration.js';
import { rectangleDragFunctions } from '../shape-drag-sizing/rectangle-drag.js';
import { ellipseDragFunctions } from '../shape-drag-sizing/ellipse-drag.js';

// When a button for shape creation is pressed, it will load the corresponding shape dragging logic into the canvas where the dragging listeners are implemented.
export default function configureShapeButtons() {
  configureRectangleButton();
  configureEllipseButton();
}

function configureRectangleButton() {
  const rectangleButton = document.getElementById('create-rectangle-button');
  rectangleButton.addEventListener('click', () =>
    updateDragFunctions(rectangleDragFunctions)
  );
}

function configureEllipseButton() {
  const ellipseButton = document.getElementById('create-ellipse-button');
  ellipseButton.addEventListener('click', () =>
    updateDragFunctions(ellipseDragFunctions)
  );
}
