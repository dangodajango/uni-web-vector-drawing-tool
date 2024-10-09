export function configureCommonSvgAttributes(svgElement, fill, stroke) {
  svgElement.setAttribute('fill', fill);
  svgElement.setAttribute('stroke', stroke);
}

export function getCommongShapeProperties(shape) {
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
