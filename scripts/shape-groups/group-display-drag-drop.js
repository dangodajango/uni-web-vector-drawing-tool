import { appendToExistingGroupDisplay } from './group-display.js';

export function configureGroupDisplayDrop(groupDisplayDiv) {
  groupDisplayDiv.addEventListener('dragover', (event) => {
    event.preventDefault();
  });

  groupDisplayDiv.addEventListener('drop', (event) => {
    const dragStartData = JSON.parse(
      event.dataTransfer.getData('application/json')
    );

    const groupId = groupDisplayDiv.id.match(/group-\d+/);
    if (groupId) {
      const shape = document.getElementById(dragStartData.shapeId);
      const previousGroup = document.getElementById(
        dragStartData.previousGroupId
      );
      const draggedOverGroup = document.getElementById(groupId);
      previousGroup.removeChild(shape);
      draggedOverGroup.append(shape);
      appendToExistingGroupDisplay(draggedOverGroup, shape);
    }
  });
}

export function configureGroupDisplayDrag(shapeInGroupDiv, shape) {
  shapeInGroupDiv.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData(
      'application/json',
      JSON.stringify({
        shapeId: shape.id,
        previousGroupId: `${shapeInGroupDiv.parentNode.id.match(/group-\d+/)}`,
        shapeInGroupId: shapeInGroupDiv.id,
      })
    );
  });
}
