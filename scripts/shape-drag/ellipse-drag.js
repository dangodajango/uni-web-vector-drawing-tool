import appendEllipseToCanvas from '../shape-factory/ellipse.js';

export const ellipseDragFunctions = {
  onMouseDown: createEllipse,
  onMouseMove: resizeEllipseWhileDragging,
  onMouseUp: resetDragState,
};

// Start X / Y - The initial coordinates of the mouse click.
let ellipse, startX, startY;

let isDragging = false;

// Handles the initial click on the canvas to start drawing an ellipse.
function createEllipse(event) {
  startX = event.offsetX;
  startY = event.offsetY;
  isDragging = true;
  ellipse = appendEllipseToCanvas(
    {
      x: startX,
      y: startY,
    },
    {
      x: 0,
      y: 0,
    }
  );
}

// Handles the dragging / moving of the mouse, it will be constantly called after the button is pressed.
function resizeEllipseWhileDragging(event) {
  if (!isDragging) {
    return;
  }

  const currentX = event.offsetX;
  const currentY = event.offsetY;

  // The radius of the ellipse is determined by how far the usr drags from the initial click point.
  const radiusX = Math.abs(currentX - startX) / 2;
  const radiusY = Math.abs(currentY - startY) / 2;

  // The center of the ellipse is determined by finding the midpoint between the initial mouse possition and the current mouse position.
  // The ellipse svg element grows from the center, this calculation ensures that the ellipse will grow in the correct direction.
  const centerX = (startX + currentX) / 2;
  const centerY = (startY + currentY) / 2;

  ellipse.setAttribute('cx', centerX);
  ellipse.setAttribute('cy', centerY);
  ellipse.setAttribute('rx', radiusX);
  ellipse.setAttribute('ry', radiusY);
}

// When the mouse button has been released - the user has finished drawing the ellipse, all the state for that specific ellipse needs to be cleared.
function resetDragState() {
  ellipse = null;
  startX = null;
  startY = null;
  isDragging = false;
}
