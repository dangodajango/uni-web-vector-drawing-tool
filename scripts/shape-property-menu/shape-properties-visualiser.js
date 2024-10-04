const shapePropertiesMenu = document.getElementById('shape-properties-menu');

export default function visualiseShapeProperties(shapeProperties) {
  clearPreviousSelection();
  for (const property in shapeProperties) {
    const div = document.createElement('div');
    const input = createInputElement(shapeProperties, property);
    const label = createLabelElement(property, input);
    div.append(label, input);
    shapePropertiesMenu.append(div);
  }
}

function clearPreviousSelection() {
  shapePropertiesMenu.innerHTML = '';
}

function createInputElement(shapeProperties, property) {
  const input = document.createElement('input');
  input.id = `${property}`;
  input.value = shapeProperties[property].value;
  input.type = shapeProperties[property].type;
  return input;
}

function createLabelElement(property, inputElement) {
  const label = document.createElement('label');
  label.textContent = `${property}`;
  label.htmlFor = inputElement.id;
  return label;
}
