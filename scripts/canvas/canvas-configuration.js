import appendSquareToCanvas from '../shape-factory/square-factory.js';

const canvas = document.getElementById('canvas');

let createShapeFunction;

let shape, startX, startY;

let isDragging = false;

export default function configureCanvas() {
  const squareButton = document.getElementById('create-square-button');
  squareButton.addEventListener('click', () => {
    if (!createShapeFunction) {
      createShapeFunction = appendSquareToCanvas;
    } else {
      createShapeFunction = null;
    }
  });
  configureShapeDragging();
}

// When we want to create a shape it should be done by clicking on the corresponding shape button
// and then dragging the size of the shape on the canvas.
function configureShapeDragging() {
  configureMouseDownEventListener();
  configureMouseDragEventListener();
  configureMouseUpEventListener();
}

// Offset X/Y will return the mouse click cooridnates relative to the canvas, rather then the whole screen.
// When a createShapeFunction is present, the user has pressed a button to create a shape, then when he goes to the canvas
// and presses his mouse in order to start dragging, it will trigger this function.
function configureMouseDownEventListener() {
  canvas.addEventListener('mousedown', (event) => {
    if (!createShapeFunction) {
      return;
    }
    startX = event.offsetX;
    startY = event.offsetY;
    isDragging = true;
    shape = createShapeFunction.call(
      this,
      canvas,
      {
        x: event.offsetX,
        y: event.offsetY,
      },
      {
        width: 0,
        height: 0,
      }
    );
  });
}

// The X and Y attributes of an SVG element point to the top left corner, so if the user drags from the upper left corner to the bottom right one
// there will be no issue, the shape will be created as expected.
// If the user drags in any other direction, he will not get the desired outcome by default.
// In order to support dragging on all directions, the function will calculate whether the X and Y need to move to accomate the direction of the drag.
function configureMouseDragEventListener() {
  canvas.addEventListener('mousemove', (event) => {
    if (isDragging) {
      const currentX = event.offsetX;
      const currentY = event.offsetY;

      const width = Math.abs(currentX - startX);
      const height = Math.abs(currentY - startY);

      // If currentX < startX -> the drag is left, otherwise right.
      const shapeX = currentX < startX ? currentX : startX;
      // If currentY < startY -> the drag is up, otherwise down.
      const shapeY = currentY < startY ? currentY : startY;

      shape.setAttribute('width', width);
      shape.setAttribute('height', height);
      shape.setAttribute('x', shapeX);
      shape.setAttribute('y', shapeY);
    }
  });
}

// When the mouse button has been released, it means the user has finished drawing the shape
// therefor all the state for that specific shape is cleared.
function configureMouseUpEventListener() {
  canvas.addEventListener('mouseup', () => {
    shape = null;
    startX = null;
    startY = null;
    isDragging = false;
  });
}
