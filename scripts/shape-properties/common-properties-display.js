import { createLabel } from '../utils/common-utils.js';
import { modifyPropertyOfShape } from './shape-property-modifier.js';

const shapePropertiesDOM = document.getElementById('shape-properties');

export default function displayCommonProperties(shape) {
  const commonPropertiesSection = document.createElement('section');
  createCommonPropertiesHtml(shape, commonPropertiesSection);
  shapePropertiesDOM.append(commonPropertiesSection);
}

function createCommonPropertiesHtml(shape, commonPropertiesSection) {
  const commonProperties = getCommonShapeProperties(shape);
  for (const propertyKey in commonProperties) {
    const propertyDiv = document.createElement('div');
    const property = commonProperties[propertyKey];
    const input = createInput(
      property.value,
      property.type,
      `${property.displayName.toLowerCase()}-${shape.id}`
    );
    createEventListenerForInputElements(shape.id, input, propertyKey);
    const label = createLabel(property.displayName, input.id);
    propertyDiv.append(label, input);
    commonPropertiesSection.append(propertyDiv);
  }
}

function createInput(value, type, inputId) {
  const input = document.createElement('input');
  input.id = inputId;
  input.value = value;
  input.type = type;
  return input;
}

function createEventListenerForInputElements(shapeId, input, property) {
  if (input.type === 'color') {
    input.addEventListener('change', (event) => {
      modifyPropertyOfShape(shapeId, property, event.target.value);
    });
  } else {
    input.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        modifyPropertyOfShape(shapeId, property, event.target.value);
      }
    });
  }
}

function getCommonShapeProperties(shape) {
  return {
    stroke: {
      value: shape.getAttribute('stroke'),
      type: 'color',
      displayName: 'Stroke',
    },
    'stroke-width': {
      value: shape.getAttribute('stroke-width') || 1,
      type: 'number',
      displayName: 'Stroke width',
    },
    fill: {
      value: shape.getAttribute('fill'),
      type: 'color',
      displayName: 'Fill color',
    },
    opacity: {
      value: 1,
      type: 'number',
      displayName: 'Opacity',
    },
  };
}
