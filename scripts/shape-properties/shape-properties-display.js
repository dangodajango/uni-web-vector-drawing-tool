import { modifyPropertyOfShape } from './shape-property-modifier.js';

const shapePropertiesDOM = document.getElementById('shape-properties');

export default function displayShapeProperties(shapeId, shapeProperties) {
  clearPreviousSelection();
  const proeprtiesSection = document.createElement('section');
  displayShapeId(shapeId, proeprtiesSection);
  for (const property in shapeProperties) {
    const div = document.createElement('div');
    const input = createInputElement(shapeId, shapeProperties, property);
    const label = createLabelElement(shapeProperties[property], input);
    div.append(label, input);
    proeprtiesSection.append(div);
  }
  shapePropertiesDOM.append(proeprtiesSection);
}

function clearPreviousSelection() {
  shapePropertiesDOM.innerHTML = '';
}

function displayShapeId(shapeId, proeprtiesSection) {
  const h3 = document.createElement('h3');
  h3.textContent = `Shape ID: ${shapeId}`;
  proeprtiesSection.append(h3);
}

function createInputElement(shapeId, shapeProperties, property) {
  const input = document.createElement('input');
  input.id = `${property}-${shapeId}`;
  input.value = shapeProperties[property].value;
  input.type = shapeProperties[property].type;
  createEventListenerForInputElements(shapeId, input, property);
  return input;
}

function createEventListenerForInputElements(shapeId, input, property) {
  if (input.type === 'color') {
    input.addEventListener('change', (event) => {
      modifyPropertyOfShape(shapeId, property, event.target.value);
    });
  } else {
    input.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        modifyPropertyOfShape(shapeId, property, event.target.value);
      }
    });
  }
}

function createLabelElement(property, inputElement) {
  const label = document.createElement('label');
  label.textContent = property.displayName;
  label.htmlFor = inputElement.id;
  return label;
}
