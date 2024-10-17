import { selectEllipse } from '../shape-factory/ellipse.js';
import { selectRectangle } from '../shape-factory/rectangle.js';
import displayAdvancedProperties from '../shape-properties/advanced-properties-display.js';

const groupMenu = document.getElementById('shape-groups');

/**
 * <div id="group-...">
 *    <label>Group ID: ...</label
 *    <section></section>
 * </div>
 */
export function createGroupDisplay(group) {
  const div = document.createElement('div');
  div.id = `display-${group.id}`;
  displayGroupId(group, div);
  displayAdvancedProperties(group, div);
  createSectionForShapesInGroup(group, div);
  groupMenu.append(div);
}

function displayGroupId(group, div) {
  const groupIdLabel = document.createElement('h3');
  groupIdLabel.textContent = group.id;
  div.append(groupIdLabel);
}

function createSectionForShapesInGroup(group, div) {
  const shapesInGroupSection = document.createElement('section');
  shapesInGroupSection.id = `shapes-in-${group.id}`;
  div.append(shapesInGroupSection);
}

export function appendToExistingGroupDisplay(group, shape) {
  const visualisedGroup = groupMenu.querySelector(`#display-${group.id}`);
  if (visualisedGroup) {
    const shapeIdTitle = document.createElement('h4');
    shapeIdTitle.textContent = `Shape ID: ${shape.id}`;
    shapeIdTitle.addEventListener('click', () => {
      if (/^ellipse-\d+$/.test(shape.id)) {
        selectEllipse(shape);
      } else if (/^rectangle-\d+$/.test(shape.id)) {
        selectRectangle(shape);
      }
    });
    const shapeSection = visualisedGroup.querySelector(
      `#shapes-in-${group.id}`
    );
    shapeSection.append(shapeIdTitle);
  }
}
