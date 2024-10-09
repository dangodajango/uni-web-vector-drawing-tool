import appendRectangleToCanvas from '../shape-factory/rectangle-factory.js';

export const rectangleDragFunctions = {
  onMouseDown: createRectangle,
  onMouseMove: resizeRectangleWhileDragging,
  onMouseUp: resetDragState,
};

// Start X / Y - The initial coordinates of the mouse click.
let rectangle, startX, startY;

let isDragging = false;

// Handles the initial click on the canvas to start drawing a rectangle.
function createRectangle(event) {
  startX = event.offsetX;
  startY = event.offsetY;
  isDragging = true;
  rectangle = appendRectangleToCanvas(
    {
      x: event.offsetX,
      y: event.offsetY,
    },
    {
      width: 0,
      height: 0,
    }
  );
}

// The X and Y attributes of the rectangle element point to the top left corner. 
// If the user drags from the upper left corner to the bottom right one, there will be no issue - the shape will be created as expected.
// If the user drags in any other direction, he will not get the desired outcome by default.
// In order to support dragging on all directions, the function will calculate whether the X and Y need to move to accomodate the direction of the drag.
function resizeRectangleWhileDragging(event) {
  if (!isDragging) {
    return;
  }

  const currentX = event.offsetX;
  const currentY = event.offsetY;

  const width = Math.abs(currentX - startX);
  const height = Math.abs(currentY - startY);

  // If currentX < startX -> the drag is left, otherwise right.
  const shapeX = currentX < startX ? currentX : startX;
  // If currentY < startY -> the drag is up, otherwise down.
  const shapeY = currentY < startY ? currentY : startY;

  rectangle.setAttribute('width', width);
  rectangle.setAttribute('height', height);
  rectangle.setAttribute('x', shapeX);
  rectangle.setAttribute('y', shapeY);
}

// When the mouse button has been released - the user has finished drawing the rectangle, all the state for that specific rectangle needs to be cleared.
function resetDragState() {
  rectangle = null;
  startX = null;
  startY = null;
  isDragging = false;
}
