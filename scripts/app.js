import appendCircleToCanvas from './circle-svg-creator.js';
import appendSquaretoCanvas from './square-svg-creator.js';

const canvas = document.getElementById('canvas');

const clearCanvasButton = document.getElementById('clear-canvas');
clearCanvasButton.addEventListener('click', clearCanvas.bind(this, canvas));

const circleButton = document.getElementById('create-circle-button');
circleButton.addEventListener('click', appendCircleToCanvas.bind(this, canvas));

const squareButton = document.getElementById('create-square-button');
squareButton.addEventListener('click', appendSquaretoCanvas.bind(this, canvas));

function clearCanvas(canvas) {
  canvas.innerHTML = '';
}
