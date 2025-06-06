import {updateDragFunctions} from '../canvas/canvas-configuration.js';
import {rectangleDragFunctions} from '../shape-factory/shape-drag/rectangle-drag.js';
import {ellipseDragFunctions} from '../shape-factory/shape-drag/ellipse-drag.js';

// When a button for shape creation is pressed, it will load the corresponding shape dragging logic into the canvas where the dragging listeners are implemented.
export default function configureDrawingButtons() {
  configureRectangleButton();
  configureEllipseButton();
  configureShape1Button();
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

function configureShape1Button() {
  const shape1Button = document.getElementById('extra-shape');
  shape1Button.addEventListener('click', () => {
    const canvas = document.getElementById('canvas');
    canvas.innerHTML = `<path
        id="shape1"
        d="M158 108m-50 0a50 50 0 10100 0 50 50 0 10-100 0M208 108 208 108M197 76 119 139M120 75 197 140"
        stroke="black"
        fill="none"
        stroke-width="2"/>`
  });
}
