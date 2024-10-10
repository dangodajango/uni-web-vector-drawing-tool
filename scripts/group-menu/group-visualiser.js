const groupMenu = document.getElementById('group-menu');

export default function visualiseGroup(group) {
  const visualisedGroup = groupMenu.querySelector(`#group-${group.id}`);
  if (visualisedGroup) {
    visualiseShapesInGroup(group, visualisedGroup);
  } else {
    createGroupVisualisation(group);
  }
}

function createGroupVisualisation(group) {
  const div = document.createElement('div');
  div.id = `group-${group.id}`;

  const groupIdLabel = document.createElement('label');
  groupIdLabel.textContent = group.id;
  div.append(groupIdLabel);

  visualiseShapesInGroup(group, div);

  groupMenu.append(div);
}

function visualiseShapesInGroup(group, div) {
  for (const shape of group.children) {
    console.log(shape);

    const shapeIdLabel = document.createElement('label');
    shapeIdLabel.textContent = `Shape ID: ${shape.id}`;
    div.append(shapeIdLabel);
  }
}
