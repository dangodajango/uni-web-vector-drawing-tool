export function modifyPropertyOfShape(shapeId, property, updatedValue) {
  const shape = document.getElementById(shapeId);
  shape.setAttribute(property, updatedValue);
}

export function modifyRootAdvancedPropertyOfShape(shapeId, property, updatedValue) {
  console.log(shapeId, property, updatedValue);
}

export function modifyNestedAdvancedPropertyOfShape(shapeId, parentProperty, childProperty, updatedValue) {
  console.log(shapeId, parentProperty, childProperty, updatedValue);
  
}