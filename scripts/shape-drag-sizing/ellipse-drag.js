import appendEllipseToCanvas from '../shape-factory/ellipse-factory.js';

export const ellipseDragFunctions = {
  onMouseDown: createEllipse,
  onMouseMove: resizeEllipseWhileDragging,
  onMouseUp: resetDragState,
};

let ellipse, startX, startY;

let isDragging = false;

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

function resizeEllipseWhileDragging(event) {
  if (!isDragging) {
    return;
  }

  const currentX = event.offsetX;
  const currentY = event.offsetY;

  const radiusX = Math.abs(currentX - startX) / 2;
  const radiusY = Math.abs(currentY - startY) / 2;

  const centerX = (startX + currentX) / 2;
  const centerY = (startY + currentY) / 2;

  ellipse.setAttribute('cx', centerX);
  ellipse.setAttribute('cy', centerY);
  ellipse.setAttribute('rx', radiusX);
  ellipse.setAttribute('ry', radiusY);
}

function resetDragState() {
  ellipse = null;
  startX = null;
  startY = null;
  isDragging = false;
}
