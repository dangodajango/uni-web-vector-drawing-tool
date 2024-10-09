import { updateDragFunctions } from '../canvas/canvas-configuration.js';
import {
  createSquare,
  resetDragState,
  resizeSquareWhileDragging,
} from '../shape-drag-sizing/square-drag.js';

// When a button for shape creation is pressed, it will load the corresponding shape dragging logic into the canvas where the dragging listeners are implemented.
export default function configureShapeButtons() {
  configureSquareButton();
}

const squareDragFunctions = {
  onMouseDown: createSquare,
  onMouseMove: resizeSquareWhileDragging,
  onMouseUp: resetDragState,
};

function configureSquareButton() {
  const squareButton = document.getElementById('create-square-button');
  squareButton.addEventListener('click', () =>
    updateDragFunctions(squareDragFunctions)
  );
}
