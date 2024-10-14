export default function displayAdvancedProperties(shape) {
  const shapePropertiesDOM = document.getElementById('shape-properties');
  const advancedShapeProperties = getAdvancedShapeProperties(shape);
  const advancedPropertiesSection = document.createElement('section');
  createAdvancedPropertiesHTML(advancedPropertiesSection, advancedShapeProperties);
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
      parameters: {
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
      parameters: {
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
  advancedShapeProperties
) {
  for (const propertyKey in advancedShapeProperties) {
    const property = advancedShapeProperties[propertyKey];
    const div = document.createElement('div');
    if ('parameters' in property) {
      createNestedPropertiesHTML(div, property.parameters, property.displayName);
    } else {
      createPropertiesHTML(div, property);
    }
    advancedPropertiesSection.append(div);
  }
}

function createNestedPropertiesHTML(div, parameters, rootDisplayName) {
  const label = document.createElement('label');
  label.textContent = rootDisplayName;
  div.append(label);
  for (const parameter in parameters) {
    createPropertiesHTML(div, parameters[parameter]);
  }
}

function createPropertiesHTML(div, property) {
  const label = document.createElement('label');
  label.textContent = property.displayName;
  const input = document.createElement('input');
  input.value = property.value;
  input.type = property.type;
  div.append(label, input);
}
