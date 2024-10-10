import { updateDragFunctions } from '../canvas/canvas-configuration.js';
import { rectangleDragFunctions } from '../shape-factory/shape-drag/rectangle-drag.js';
import { ellipseDragFunctions } from '../shape-factory/shape-drag/ellipse-drag.js';

// When a button for shape creation is pressed, it will load the corresponding shape dragging logic into the canvas where the dragging listeners are implemented.
export default function configureDrawingButtons() {
  configureRectangleButton();
  configureEllipseButton();
}

function configureRectangleButton() {
  const rectangleButton = document.getElementById('draw-rectangle-button');
  rectangleButton.addEventListener('click', () =>
    updateDragFunctions(rectangleDragFunctions)
  );
}

function configureEllipseButton() {
  const ellipseButton = document.getElementById('draw-ellipse-button');
  ellipseButton.addEventListener('click', () =>
    updateDragFunctions(ellipseDragFunctions)
  );
}
