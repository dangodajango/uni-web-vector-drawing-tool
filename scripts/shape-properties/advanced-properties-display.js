export default function displayAdvancedProperties(shape) {
  const shapePropertiesDOM = document.getElementById('shape-properties');
  const advancedShapeProperties = getAdvancedShapeProperties(shape);
  const advancedPropertiesSection = document.createElement('section');
  test(advancedPropertiesSection, advancedShapeProperties);
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

function test(advancedPropertiesSection, advancedShapeProperties) {
  for (const propertyKey in advancedShapeProperties) {
    const property = advancedShapeProperties[propertyKey];
    const div = document.createElement('div');
    if ('parameters' in property) {
      test2(div, property.parameters);
    } else {
      console.log(property.value);
      test3(div, property);
    }
    advancedPropertiesSection.append(div);
  }
}

function test2(div, parameters) {
  for (const parameter in parameters) {
    const label = document.createElement('label');
    label.textContent = parameters[parameter].displayName;
    const input = document.createElement('input');
    input.value = parameters[parameter].value;
    input.type = parameters[parameter].type;
    div.append(label, input);
  }
}

function test3(div, property) {
  const label = document.createElement('label');
  label.textContent = property.displayName;
  const input = document.createElement('input');
  input.value = property.value;
  input.type = property.type;
  div.append(label, input);
}
