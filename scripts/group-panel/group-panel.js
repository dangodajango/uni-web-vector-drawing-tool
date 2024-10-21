import displayAdvancedProperties from '../shape-properties/advanced-properties-display.js';
import { selectEllipse } from '../shape-factory/ellipse.js';
import { selectRectangle } from '../shape-factory/rectangle.js';

const groupPanels = document.getElementById('group-panels');

export function createPanelForGroup(group) {
  const panelForGroup = document.createElement('div');
  panelForGroup.id = `panel-for-${group.id}`;
  createPanelStructure(panelForGroup, group);
  groupPanels.append(panelForGroup);
  return panelForGroup;
}

function createPanelStructure(panelForGroup, group) {
  const panelTitle = document.createElement('h3');
  panelTitle.textContent = group.id;

  const groupProperties = document.createElement('section');
  groupProperties.id = `properties-of-${group.id}`;
  displayAdvancedProperties(group, groupProperties);

  const shapesInGroup = document.createElement('section');
  shapesInGroup.id = `shapes-in-${group.id}`;

  panelForGroup.append(panelTitle, groupProperties, shapesInGroup);
}

export function appendShapeToPanelForGroup(shape, group) {
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

  const shapeTitle = createShapeTitle(shape);
  const ejectShapeButton = createEjectButton(shapeStructure);
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

function createEjectButton() {
  const ejectButton = document.createElement('button');
  ejectButton.textContent = 'Eject';
  ejectButton.addEventListener('click', () => {
    console.log('Ejected');
  });
  return ejectButton;
}
