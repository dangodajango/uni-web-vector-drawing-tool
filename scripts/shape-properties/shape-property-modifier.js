// The properties of each shape are transformed to attributes of the corresponding SVG element.
// Shape property = SVG element attribute.
export default function modifyPropertyOfShape(shapeId, property, updatedValue) {
  const shape = document.getElementById(shapeId);
  shape.setAttribute(property, updatedValue);
}
