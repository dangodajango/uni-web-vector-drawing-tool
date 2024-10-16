import { createInput, createLabel } from '../utils/properties-utils.js';
import enrichProperty from './advanced-properties-enrichment.js';
import { modifyAdvancedPropertyOfShape } from './shape-property-modifier.js';

export default function displayAdvancedProperties(shape) {
  const shapePropertiesDOM = document.getElementById('shape-properties');
  const advancedPropertiesSection = document.createElement('section');
  createAdvancedPropertiesHtml(shape, advancedPropertiesSection);
  shapePropertiesDOM.append(advancedPropertiesSection);
}

function createAdvancedPropertiesHtml(shape, advancedPropertiesSection) {
  createTranslateHtml(shape, advancedPropertiesSection);
  createRotateHtml(shape, advancedPropertiesSection);
  createScaleHtml(shape, advancedPropertiesSection);
}

function createTranslateHtml(shape, advancedPropertiesSection) {
  const translateDiv = document.createElement('div');
  appendPropertyTitle(translateDiv, 'Translate');
  const translateProperties = {
    'translate-x': {
      value: extractPropertyValue('translate', shape)[0],
      type: 'number',
      displayName: 'X',
      eventListenerFunction: modifyTranslate,
    },
    'translate-y': {
      value: extractPropertyValue('translate', shape)[1],
      type: 'number',
      displayName: 'Y',
      eventListenerFunction: modifyTranslate,
    },
  };
  appendPropertyInputs(translateDiv, translateProperties, shape);
  advancedPropertiesSection.append(translateDiv);
}

function modifyTranslate(event, shape) {
  const inputId = event.target.id;
  const translateValues = extractPropertyValue('translate', shape);
  const newValue = event.target.value;
  if (inputId.includes('x')) {
    modifyAdvancedPropertyOfShape(shape, 'translate', [
      newValue,
      translateValues[1],
    ]);
  } else {
    modifyAdvancedPropertyOfShape(shape, 'translate', [
      translateValues[0],
      newValue,
    ]);
  }
}

function createRotateHtml(shape, advancedPropertiesSection) {
  const rotateDiv = document.createElement('div');
  appendPropertyTitle(rotateDiv, 'Rotate');
  const rotateProperties = {
    'rotate-angle': {
      value: extractPropertyValue('rotate', shape)[0],
      type: 'number',
      displayName: 'Degrees',
      eventListenerFunction: modifyRotate,
    },
  };
  appendPropertyInputs(rotateDiv, rotateProperties, shape);
  advancedPropertiesSection.append(rotateDiv);
}

function modifyRotate(event, shape) {
  const newValue = event.target.value;
  const enrichedPropertyValues = enrichProperty(shape, 'rotate');
  modifyAdvancedPropertyOfShape(shape, 'rotate', [
    newValue,
    ...enrichedPropertyValues,
  ]);
}

function createScaleHtml(shape, advancedPropertiesSection) {
  const scaleDiv = document.createElement('div');
  appendPropertyTitle(scaleDiv, 'Scale');
  const scaleProperties = {
    'scale-x': {
      value: extractPropertyValue('scale', shape)[0],
      type: 'number',
      displayName: 'X',
      eventListenerFunction: modifyScale,
    },
    'scale-y': {
      value: extractPropertyValue('scale', shape)[1],
      type: 'number',
      displayName: 'Y',
      eventListenerFunction: modifyScale,
    },
  };
  appendPropertyInputs(scaleDiv, scaleProperties, shape);
  advancedPropertiesSection.append(scaleDiv);
}

function modifyScale(event, shape) {
  const inputId = event.target.id;
  const scaleValues = extractPropertyValue('scale', shape);
  const newValue = event.target.value;
  if (inputId.includes('x')) {
    modifyAdvancedPropertyOfShape(shape, 'scale', [
      newValue,
      scaleValues[1],
    ]);
  } else {
    modifyAdvancedPropertyOfShape(shape, 'scale', [
      scaleValues[0],
      newValue,
    ]);
  }
}

function appendPropertyTitle(div, textContent) {
  const h3 = document.createElement('h3');
  h3.textContent = textContent;
  div.append(h3);
}

function appendPropertyInputs(div, advancedProperties, shape) {
  for (const propertyKey in advancedProperties) {
    const property = advancedProperties[propertyKey];
    const input = createInput(
      property.value.split(',')[0],
      property.type,
      `${propertyKey}-${shape.id}`
    );
    input.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        property.eventListenerFunction.call(this, event, shape);
      }
    });
    const label = createLabel(property.displayName, input.id);
    div.append(label, input);
  }
}

function extractPropertyValue(property, shape) {
  const transformAttribute = shape.getAttribute('transform');
  const extractPropertyRegex = new RegExp(`${property}\\(([^)]+)\\)`);
  const propertyMatch = transformAttribute.match(extractPropertyRegex);
  if (propertyMatch) {
    return propertyMatch[1].split(',');
  }
}
