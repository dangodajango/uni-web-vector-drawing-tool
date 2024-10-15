export function createLabel(textContent, inputId) {
  const label = document.createElement('label');
  label.textContent = textContent;
  label.htmlFor = inputId;
  return label;
}

export function createInput(value, type, inputId) {
  const input = document.createElement('input');
  input.id = inputId;
  input.value = value.split(',')[0];
  input.type = type;
  return input;
}
