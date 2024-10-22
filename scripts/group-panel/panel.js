import displayAdvancedProperties from '../shape-properties/advanced-properties-display.js';
import { selectEllipse } from '../shape-factory/ellipse.js';
import { selectRectangle } from '../shape-factory/rectangle.js';
import { ejectShapeFromSvgGroup, removeSvgGroup } from './group.js';
import { updatedCurrentGroup } from '../canvas-toolbar/group-tool.js';
import { configurePanelDrag, configurePanelDrop } from './panel-drag-drop.js';

const groupPanels = document.getElementById('group-panels');

export function createPanelForGroup(group) {
  const panelForGroup = document.createElement('div');
  panelForGroup.id = `panel-for-${group.id}`;
  createPanelStructure(panelForGroup, group);
  configurePanelDrop(panelForGroup);
  groupPanels.append(panelForGroup);
  return panelForGroup;
}

function createPanelStructure(panelForGroup, group) {
  const panelTitle = createPanelTitle(group);
  const deleteGroupButton = createDeleteGroupButton(group, panelForGroup);

  const groupProperties = document.createElement('section');
  groupProperties.id = `properties-of-${group.id}`;
  displayAdvancedProperties(group, groupProperties);

  const shapesInGroup = document.createElement('section');
  shapesInGroup.id = `shapes-in-${group.id}`;

  panelForGroup.append(
    panelTitle,
    deleteGroupButton,
    groupProperties,
    shapesInGroup
  );
}

function createPanelTitle(group) {
  const panelTitle = document.createElement('h3');
  panelTitle.textContent = group.id;
  panelTitle.addEventListener('click', () => updatedCurrentGroup(group));
  return panelTitle;
}

function createDeleteGroupButton(group, panelForGroup) {
  const deleteGroupButton = document.createElement('button');
  deleteGroupButton.textContent = 'Delete';
  deleteGroupButton.addEventListener('click', () => {
    groupPanels.removeChild(panelForGroup);
    removeSvgGroup(group);
  });
  return deleteGroupButton;
}

export function appendShapeToPanelForGroup(shape, group) {
  console.log(shape, group);

  const panelForGroup = findPanelForGroup(group);
  const shapesInGroup = panelForGroup.querySelector(`#shapes-in-${group.id}`);
  createShapeStructure(shapesInGroup, shape);
}

function findPanelForGroup(group) {
  const existingPanel = groupPanels.querySelector(`#panel-for-${group.id}`);
  if (existingPanel) {
    return existingPanel;
  } else {
    return createPanelForGroup(group);
  }
}

function createShapeStructure(shapesInGroup, shape) {
  const shapeStructure = document.createElement('div');
  configurePanelDrag(shapeStructure, shape);

  const shapeTitle = createShapeTitle(shape);
  const ejectShapeButton = createEjectButton(
    shape,
    shapesInGroup,
    shapeStructure
  );
  shapeStructure.append(shapeTitle, ejectShapeButton);

  shapesInGroup.append(shapeStructure);
}

function createShapeTitle(shape) {
  const shapeTitle = document.createElement('h4');
  shapeTitle.textContent = `Shape ID: ${shape.id}`;
  shapeTitle.addEventListener('click', () => {
    if (/^ellipse-\d+$/.test(shape.id)) {
      selectEllipse(shape);
    } else if (/^rectangle-\d+$/.test(shape.id)) {
      selectRectangle(shape);
    }
  });
  return shapeTitle;
}

function createEjectButton(shape, shapesInGroup, shapeStructure) {
  const ejectButton = document.createElement('button');
  ejectButton.textContent = 'Eject';
  ejectButton.addEventListener('click', () => {
    ejectShapeFromGroup(shape, shapesInGroup, shapeStructure);
  });
  return ejectButton;
}

export function ejectShapeFromGroup(shape, shapesInGroup, shapeStructure) {
  shapesInGroup.removeChild(shapeStructure);
  const groupId = shapesInGroup.id.match(/g-\d+/)[0];
  const group = document.getElementById(groupId);
  ejectShapeFromSvgGroup(shape, group);
}
