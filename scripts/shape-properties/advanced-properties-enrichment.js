export default function enrichProperty(shape, property) {
  switch (property) {
    case 'rotate':
      return enrichRotate(shape);
  }
}

function enrichRotate(shape) {
  const shapeId = shape.id;
  if (/^ellipse-\d+$/.test(shapeId)) {
    return [shape.getAttribute('cx'), shape.getAttribute('cy')];
  } else if (/^rectangle-\d+$/.test(shapeId)) {
    return calculateRotateAngleOfRectangle(shape);
  }
}

function calculateRotateAngleOfRectangle(shape) {
  const boundingBox = shape.getBBox();
  const cx = boundingBox.x + boundingBox.width / 2;
  const cy = boundingBox.y + boundingBox.height / 2;
  return [cx, cy];
}
