import visualiseShapeProperties from '../shape-property-menu/shape-properties-visualiser.js';

let isSelecting = false;

export function updateSelectingMode() {
  if (isSelecting) {
    isSelecting = false;
  } else {
    isSelecting = true;
  }
}

export function selectShape(shape, shapeProperties) {
  if (!isSelecting) {
    return;
  }
  visualiseShapeProperties(shape.id, shapeProperties);
}
