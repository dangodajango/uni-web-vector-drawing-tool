import configureCanvas from './canvas/canvas-configuration.js';
import { configureToolButtons } from './canvas-toolbar/tools-configuration.js';
import configureShapeButtons from './drawing-tools/drawing-tools-configuration.js';

const canvas = document.getElementById('canvas');

const clearCanvasButton = document.getElementById('clear-canvas-button');
clearCanvasButton.addEventListener('click', clearCanvas.bind(this, canvas));

function clearCanvas(canvas) {
  const shapePropertiesSection = document.getElementById('shape-properties');
  const shapeGroupsSection = document.getElementById('shape-groups');
  canvas.innerHTML = '';
  shapePropertiesSection.innerHTML = '';
  shapeGroupsSection.innerHTML = '';
}

configureShapeButtons();
configureToolButtons(canvas);
configureCanvas();
