import { createInput, createLabel } from '../utils/common-utils.js';
import {
  modifyNestedAdvancedPropertyOfShape,
  modifyRootAdvancedPropertyOfShape,
} from './shape-property-modifier.js';

export default function displayAdvancedProperties(shape) {
  const shapePropertiesDOM = document.getElementById('shape-properties');
  const advancedShapeProperties = getAdvancedShapeProperties(shape);
  const advancedPropertiesSection = document.createElement('section');
  createAdvancedPropertiesHTML(
    advancedPropertiesSection,
    advancedShapeProperties,
    shape.id
  );
  shapePropertiesDOM.append(advancedPropertiesSection);
}

function getAdvancedShapeProperties(shape) {
  return {
    ...extractTranslateProperty(shape),
    ...extractRotateProperty(shape),
    ...extractScaleProperty(shape),
  };
}

function extractTranslateProperty(shape) {
  const translateProperties = extractTransformProperty(shape, 'translate');
  return {
    translate: {
      nastedProperties: {
        x: {
          value: translateProperties[0],
          type: 'number',
          displayName: 'X',
        },
        y: {
          value: translateProperties[1],
          type: 'number',
          displayName: 'Y',
        },
      },
      displayName: 'Translate',
    },
  };
}

function extractRotateProperty(shape) {
  const rotateProperties = extractTransformProperty(shape, 'rotate');
  return {
    rotate: {
      value: rotateProperties[0],
      type: 'number',
      displayName: 'Rotate',
    },
  };
}

function extractScaleProperty(shape) {
  const scaleProperties = extractTransformProperty(shape, 'scale');
  return {
    scale: {
      nastedProperties: {
        x: {
          value: scaleProperties[0],
          type: 'number',
          displayName: 'X',
        },
        y: {
          value: scaleProperties[1],
          type: 'number',
          displayName: 'Y',
        },
      },
      displayName: 'Scale',
    },
  };
}

function extractTransformProperty(shape, property) {
  const transform = shape.getAttribute('transform');
  const regex = new RegExp(`${property}\\(([^)]+)\\)`);
  const result = transform.match(regex)[1];
  return result.split(', ');
}

function createAdvancedPropertiesHTML(
  advancedPropertiesSection,
  advancedShapeProperties,
  shapeId
) {
  for (const propertyKey in advancedShapeProperties) {
    const property = advancedShapeProperties[propertyKey];
    const div = document.createElement('div');
    if ('nastedProperties' in property) {
      createNestedPropertiesHTML(div, property, shapeId);
    } else {
      createRootPropertyHTML(div, property, shapeId);
    }
    advancedPropertiesSection.append(div);
  }
}

function createNestedPropertiesHTML(div, property, shapeId) {
  const label = document.createElement('label');
  label.textContent = property.displayName;
  div.append(label);
  for (const nestedProperty in property.nastedProperties) {
    createNestedPropertyHTML(
      div,
      property,
      property.nastedProperties[nestedProperty],
      shapeId
    );
  }
}

function createNestedPropertyHTML(div, parentProperty, childProperty, shapeId) {
  const inputId = `advanced-${parentProperty.displayName}-${childProperty.displayName}-${shapeId}`;
  const label = createLabel(childProperty.displayName, inputId);
  const input = createInput(childProperty.value, childProperty.type, inputId);
  configureNestedPropertyInputEventListener(
    input,
    parentProperty,
    childProperty,
    shapeId
  );
  div.append(label, input);
}

function configureNestedPropertyInputEventListener(
  input,
  parentProperty,
  childProperty,
  shapeId
) {
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      modifyNestedAdvancedPropertyOfShape(
        shapeId,
        parentProperty,
        childProperty,
        event.target.value
      );
    }
  });
}

function createRootPropertyHTML(div, property, shapeId) {
  const inputId = `advanced-${property.displayName}-${shapeId}`;
  const label = createLabel(property.displayName, inputId);
  const input = createInput(property.value, property.type, inputId);
  configureRootPropertyInputEventListener(input, property, shapeId);
  div.append(label, input);
}

function configureRootPropertyInputEventListener(input, property, shapeId) {
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      modifyRootAdvancedPropertyOfShape(shapeId, property, event.target.value);
    }
  });
}
