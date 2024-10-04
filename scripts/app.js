import appendCircleToCanvas from './shape-factory/circle-factory.js';
import appendSquareToCanvas from './shape-factory/square-svg-creator.js';

const canvas = document.getElementById('canvas');

const clearCanvasButton = document.getElementById('clear-canvas');
clearCanvasButton.addEventListener('click', clearCanvas.bind(this, canvas));

const circleButton = document.getElementById('create-circle-button');
circleButton.addEventListener('click', appendCircleToCanvas.bind(this, canvas));

const squareButton = document.getElementById('create-square-button');
squareButton.addEventListener('click', appendSquareToCanvas.bind(this, canvas));

function clearCanvas(canvas) {
  canvas.innerHTML = '';
}
