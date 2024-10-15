import enrichProperty from './advanced-properties-enrichment.js';

export function modifyPropertyOfShape(shapeId, property, updatedValue) {
  const shape = document.getElementById(shapeId);
  shape.setAttribute(property, updatedValue);
}

export function modifyAdvancedPropertyOfShape(shape, property, newValues) {
  const transformAttribute = shape.getAttribute('transform');
  const regex = new RegExp(`${property}\\([^)]+\\)`);
  const updatedTranformAttribute = transformAttribute.replace(
    regex,
    `${property}(${newValues})`
  );
  shape.setAttribute('transform', updatedTranformAttribute);
}
