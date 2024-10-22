import {
  appendSvgElementToSvgGroup,
  createSvgGroup,
} from '../group-panel/group.js';
import {
  appendShapeToPanelForGroup,
  createPanelForGroup,
} from '../group-panel/panel.js';

let group;

export function createShapeGroup() {
  group = createSvgGroup();
  createPanelForGroup(group);
}

export function appendShapeToGroup(shape) {
  if (appendSvgElementToSvgGroup(shape, group)) {
    appendShapeToPanelForGroup(shape, group);
  }
}

function appendGroupToGroup(toBeAppendedGroup) {
  if (appendSvgElementToSvgGroup(toBeAppendedGroup, group)) {
    console.log('testtrue');
  } else {
    console.log('testfalse');
  }
}

export function updatedCurrentGroup(newGroup) {
  group = newGroup;
}

export function resetCurrentGroup() {
  group = null;
}
