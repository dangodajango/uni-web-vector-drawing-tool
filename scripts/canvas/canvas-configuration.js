import {
  createSquare,
  resetDragState,
  resizeSquareWhileDragging,
} from '../shape-drag-sizing/square-drag.js';

const canvas = document.getElementById('canvas');

// Each shape implements differently the drag logic therefore we keep the functions for the 3 stages of the drag in this object.
let dragFunctions;

export default function configureCanvas() {
  configureShapeButtons();
  configureShapeDragging();
}

function configureShapeButtons() {
  const squareButton = document.getElementById('create-square-button');
  squareButton.addEventListener('click', () => {
    if (!dragFunctions) {
      dragFunctions = {
        onMouseDown: createSquare,
        onMouseMove: resizeSquareWhileDragging,
        onMouseUp: resetDragState,
      };
    } else {
      dragFunctions = null;
    }
  });
}

// When we want to create a shape it should be done by clicking on the corresponding shape button
// and then dragging the size of the shape on the canvas.
function configureShapeDragging() {
  configureMouseDownEventListener();
  configureMouseMoveEventListener();
  configureMouseUpEventListener();
}

function configureMouseDownEventListener() {
  canvas.addEventListener('mousedown', (event) => {
    if (dragFunctions) {
      dragFunctions.onMouseDown.call(this, event);
    }
  });
}

function configureMouseMoveEventListener() {
  canvas.addEventListener('mousemove', (event) => {
    if (dragFunctions) {
      dragFunctions.onMouseMove.call(this, event);
    }
  });
}

function configureMouseUpEventListener() {
  canvas.addEventListener('mouseup', () => {
    if (dragFunctions) {
      dragFunctions.onMouseUp.call(this);
    }
  });
}
