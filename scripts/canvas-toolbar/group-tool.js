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
  if (group.contains(shape)) {
    return;
  }
  canvas.removeChild(shape);
  group.append(shape);
  appendToExistingGroupDisplay(group, shape);
}

export function clearGroupState() {
  group = null;
}
