import { resetCurrentGroup } from '../canvas-toolbar/group-tool.js';
import { canvas } from '../canvas/canvas-configuration.js';

export function createSvgGroup() {
  const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  group.setAttribute('transform', 'translate(0,0) rotate(0) scale(1,1)');
  group.id = `g-${Date.now()}`;
  canvas.append(group);
  return group;
}

export function appendSvgElementToSvgGroup(svgElement, group) {
  if (group && !isSvgElementPartOfAnyGroup(svgElement)) {
    canvas.removeChild(svgElement);
    group.append(svgElement);
    return true;
  } else {
    return false;
  }
}

function isSvgElementPartOfAnyGroup(svgElement) {
  const groups = canvas.querySelectorAll('g');
  for (const group of groups) {
    if (group.querySelector(`#${svgElement.id}`)) {
      return true;
    }
  }
  return false;
}

export function ejectShapeFromSvgGroup(shape, group) {
  group.removeChild(shape);
  canvas.appendChild(shape);
}

export function removeSvgGroup(group) {
  Array.from(group.children).forEach((shape) => {
    ejectShapeFromSvgGroup(shape, group);
  });
  canvas.removeChild(group);
  resetCurrentGroup();
}
