export function createLabel(textContent) {
  const label = document.createElement('label');
  label.textContent = textContent;
  return label;
}

export function createInput(value, type) {
  const input = document.createElement('input');
  input.value = value;
  input.type = type;
  return input;
}