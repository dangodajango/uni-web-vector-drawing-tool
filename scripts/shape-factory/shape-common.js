export function configureCommonSvgAttributes(svgElement, fill, stroke) {
  svgElement.setAttribute('fill', fill);
  svgElement.setAttribute('stroke', stroke);
  svgElement.setAttribute('transform', 'translate(0, 0) rotate(0) scale(1, 1)');
}

export function getCommonShapeProperties(shape) {
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

export function getAdvancedShapeProperties(shape) {
  return {
    translate: {
      parameters: {
        x: {
          type: 'number',
          displayName: 'X',
        },
        y: {
          type: 'number',
          displayName: 'X',
        },
      },
      displayName: 'Translate',
    },
    rotate: {
      type: 'number',
      displayName: 'Rotate',
    },
    scale: {
      parameters: {
        x: {
          type: 'number',
          displayName: 'X',
        },
        y: {
          type: 'number',
          displayName: 'X',
        },
      },
      displayName: 'Scale',
    },
  };
}
