export function configureCommonSvgAttributes(svgElement, fill, stroke) {
  svgElement.setAttribute('fill', fill);
  svgElement.setAttribute('stroke', stroke);
}

export function configureCommonEventListeners(svgElement) {
  svgElement.addEventListener('click', selectElement.bind(this, svgElement));
}

function selectElement(svgElement) {
  console.log(svgElement);
}
