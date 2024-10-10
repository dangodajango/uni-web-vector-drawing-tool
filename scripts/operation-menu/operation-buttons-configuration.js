import { clearGroupState, createShapeGroup } from './group-shapes.js';

export const SELECT_OPEARATION = 'SELECT';
export const GROUP_OPEARATION = 'GROUP';

export let operation;

export function configureOperationButtons(canvas) {
  configureSelectButton();
  configureGroupButton(canvas);
}

function configureSelectButton() {
  const selectShapeButton = document.getElementById('select-shape-button');
  selectShapeButton.addEventListener('click', () =>
    operation === SELECT_OPEARATION
      ? (operation = null)
      : (operation = SELECT_OPEARATION)
  );
}

function configureGroupButton(canvas) {
  const groupShapesButton = document.getElementById('group-shapes-button');
  groupShapesButton.addEventListener('click', () => {
    if (operation === GROUP_OPEARATION) {
      operation = null;
      clearGroupState();
    } else {
      createShapeGroup(canvas);
      operation = GROUP_OPEARATION;
    }
  });
}