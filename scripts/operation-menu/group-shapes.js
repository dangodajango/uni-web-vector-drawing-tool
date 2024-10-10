import {
  appendToExistingGroupVisualisation,
  createGroupVisualisation,
} from '../group-menu/group-visualiser.js';
import { canvas } from '../canvas/canvas-configuration.js';

let group;

export function createShapeGroup() {
  group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  group.id = Date.now();
  canvas.append(group);
  createGroupVisualisation(group);
}

export function appendShapeToGroup(shape) {
  if (group.contains(shape)) {
    return;
  }
  canvas.removeChild(shape);
  group.append(shape);
  appendToExistingGroupVisualisation(group, shape);
}

export function clearGroupState() {
  group = null;
}
