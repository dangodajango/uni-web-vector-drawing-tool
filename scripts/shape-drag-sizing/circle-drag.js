import appendCircleToCanvas from '../shape-factory/circle-factory.js';

export const circleDragFunctions = {
  onMouseDown: createCircle,
  onMouseMove: resizeCircleWhileDragging,
  onMouseUp: resetDragState,
};

let circle, startX, startY;

let isDragging = false;

function createCircle(event) {
  startX = event.offsetX;
  startY = event.offsetY;
  isDragging = true;
  circle = appendCircleToCanvas(
    {
      x: startX,
      y: startY,
    },
    0
  );
}

function resizeCircleWhileDragging(event) {
  if (!isDragging) {
    return;
  }

  const currentX = event.offsetX;
  const currentY = event.offsetY;

  const radius = Math.sqrt(
    Math.pow(currentX - startX, 2) + Math.pow(currentY - startY, 2)
  );

  circle.setAttribute('r', radius);
}

function resetDragState() {
  circle = null;
  startX = null;
  startY = null;
  isDragging = false;
}
