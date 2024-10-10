import {
  appendToExistingGroupDisplay,
  createGroupDisplay,
} from '../shape-groups/group-display.js';
import { canvas } from '../canvas/canvas-configuration.js';

let group;

export function createShapeGroup() {
  group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  group.id = Date.now();
  canvas.append(group);
  createGroupDisplay(group);
}

export function appendShapeToGroup(shape) {
  if (isShapePartOfAnyGroup(shape)) {
    return;
  }
  canvas.removeChild(shape);
  group.append(shape);
  appendToExistingGroupDisplay(group, shape);
}

function isShapePartOfAnyGroup(shape) {
  const groups = canvas.querySelectorAll('g');
  for (const group of groups) {
    if (group.querySelector(`#${shape.id}`)) {
      return true;
    }
  }
  return false;
}
