import modifyPropertyOfShape from './shape-property-modifier.js';

const shapePropertiesDOM = document.getElementById('shape-properties');

export default function displayShapeProperties(shapeId, shapeProperties) {
  clearPreviousSelection();
  displayShapeId(shapeId);
  for (const property in shapeProperties) {
    const div = document.createElement('div');
    const input = createInputElement(shapeId, shapeProperties, property);
    const label = createLabelElement(shapeProperties[property], input);
    div.append(label, input);
    shapePropertiesDOM.append(div);
  }
}

function clearPreviousSelection() {
  shapePropertiesDOM.innerHTML = '';
}

function displayShapeId(shapeId) {
  const div = document.createElement('div');
  const label = `Shape ID: ${shapeId}`;
  div.append(label);
  shapePropertiesDOM.append(div);
}

function createInputElement(shapeId, shapeProperties, property) {
  const input = document.createElement('input');
  input.id = `${property}`;
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
