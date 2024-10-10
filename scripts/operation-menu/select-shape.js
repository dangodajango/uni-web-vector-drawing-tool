import visualiseShapeProperties from '../shape-menu/shape-properties-visualiser.js';

export function selectShape(shape, shapeProperties) {
  visualiseShapeProperties(shape.id, shapeProperties);
}
