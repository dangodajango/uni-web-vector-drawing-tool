import { appendSvgElementToSvgGroup } from './group.js';
import { appendShapeToPanelForGroup, ejectShapeFromGroup } from './panel.js';

let currentlyDraggedElementData = null;

export function configurePanelDrag(draggableElement, underlyingSvgElement) {
  draggableElement.setAttribute('draggable', true);
  draggableElement.addEventListener('dragstart', () => {
    console.log('Started dragging');
    currentlyDraggedElementData = {
      currentlyDraggedElement: draggableElement,
      underlyingSvgElement: underlyingSvgElement,
    };
  });
}

export function configurePanelDrop(dropZoneElement) {
  dropZoneElement.addEventListener('dragover', (event) =>
    event.preventDefault()
  );

  dropZoneElement.addEventListener('drop', () => {
    const { currentlyDraggedElement, underlyingSvgElement } =
      currentlyDraggedElementData;
    const dropZoneGroup = document.getElementById(
      dropZoneElement.id.match(/g-\d+/)[0]
    );

    ejectShapeFromGroup(
      underlyingSvgElement,
      currentlyDraggedElement.parentNode,
      currentlyDraggedElement
    );
    appendShapeToPanelForGroup(
      underlyingSvgElement,
      dropZoneGroup
    );
    appendSvgElementToSvgGroup(
      underlyingSvgElement,
      dropZoneGroup
    );
  });

  dropZoneElement.addEventListener('dragend', () => {
    console.log('END');
    currentlyDraggedElementData = null;
  });
}
