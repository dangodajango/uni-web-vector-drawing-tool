import displayAdvancedProperties from '../shape-properties/advanced-properties-display.js';
import displayCommonProperties from '../shape-properties/common-properties-display.js';
import displayShapeProperties from '../shape-properties/shape-properties-display.js';

export function selectShape(shape, shapeProperties) {
  displayShapeProperties(shape.id, shapeProperties);
  displayCommonProperties(shape);
  displayAdvancedProperties(shape);
}
