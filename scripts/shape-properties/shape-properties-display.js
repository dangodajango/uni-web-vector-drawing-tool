import {
  createEventListenerForInputElements,
  createInput,
  createLabel,
} from '../utils/properties-utils.js';

const shapePropertiesDOM = document.getElementById('shape-properties');

export default function displayShapeProperties(shapeId, shapeProperties) {
  clearPreviousSelection();
  const propertySection = document.createElement('section');
  displayShapeId(shapeId, propertySection);
  createShapePropertiesHtml(shapeProperties, propertySection, shapeId);
  shapePropertiesDOM.append(propertySection);
}

function createShapePropertiesHtml(shapeProperties, propertySection, shapeId) {
  for (const propertyKey in shapeProperties) {
    const div = document.createElement('div');
    const property = shapeProperties[propertyKey];
    const input = createInput(
      property.value,
      property.type,
      `${propertyKey}-${shapeId}`
    );
    createEventListenerForInputElements(shapeId, input, propertyKey);
    const label = createLabel(property.displayName, input.id);
    div.append(label, input);
    propertySection.append(div);
  }
}

function clearPreviousSelection() {
  shapePropertiesDOM.innerHTML = '';
}

function displayShapeId(shapeId, proeprtiesSection) {
  const h3 = document.createElement('h3');
  h3.textContent = `Shape ID: ${shapeId}`;
  proeprtiesSection.append(h3);
}
