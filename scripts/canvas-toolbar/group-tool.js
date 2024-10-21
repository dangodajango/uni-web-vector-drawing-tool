import { appendShapeToSvgGroup, createSvgGroup } from '../group-panel/group.js';
import {
  appendShapeToPanelForGroup,
  createPanelForGroup,
} from '../group-panel/group-panel.js';

let group;

export function createShapeGroup() {
  group = createSvgGroup();
  createPanelForGroup(group);
}

export function appendShapeToGroup(shape) {
  if (appendShapeToSvgGroup(shape, group)) {
    appendShapeToPanelForGroup(shape, group);
  }
}

export function updatedCurrentGroup(newGroup) {
  group = newGroup;
}

export function resetCurrentGroup() {
  group = null;
}
