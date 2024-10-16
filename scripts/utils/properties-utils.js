import { modifyPropertyOfShape } from '../shape-properties/shape-property-modifier.js';

export function createLabel(textContent, inputId) {
  const label = document.createElement('label');
  label.textContent = textContent;
  label.htmlFor = inputId;
  return label;
}

export function createInput(value, type, inputId) {
  const input = document.createElement('input');
  input.id = inputId;
  input.value = value;
  input.type = type;
  return input;
}

export function createEventListenerForInputElements(shapeId, input, property) {
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
