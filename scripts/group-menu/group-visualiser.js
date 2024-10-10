const groupMenu = document.getElementById('shape-groups');

/**
 * <div id="group-...">
 *    <label>Group ID: ...</label
 *    <section></section>
 * </div>
 */
export function createGroupVisualisation(group) {
  const div = document.createElement('div');
  div.id = `group-${group.id}`;

  const groupIdLabel = document.createElement('label');
  groupIdLabel.textContent = group.id;
  div.append(groupIdLabel);

  const shapesSection = document.createElement('section');
  div.append(shapesSection);

  groupMenu.append(div);
}

export function appendToExistingGroupVisualisation(group, shape) {
  const visualisedGroup = groupMenu.querySelector(`#group-${group.id}`);
  if (visualisedGroup) {
    const shapeIdLabel = document.createElement('label');
    shapeIdLabel.textContent = `Shape ID: ${shape.id}`;
    const shapeSection = visualisedGroup.querySelector('section');
    shapeSection.append(shapeIdLabel);
  }
}
