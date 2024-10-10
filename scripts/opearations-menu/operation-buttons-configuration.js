import { updateSelectingMode } from './select-shape.js';

export let opearation;

export function configureOperationButtons() {
  configureSelectShapeButton();
}

function configureSelectShapeButton() {
  let selectShapeButton = document.getElementById('select-shape');
  selectShapeButton.addEventListener('click', () => updateSelectingMode());
  opearation = 'SELECT';
}
