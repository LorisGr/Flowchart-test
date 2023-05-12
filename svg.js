/**
 * Utility functions for SVG manipulation.
 */

// Creates an SVG element with specified attributes
function createSVGElement(type, attributes) {
    var elem = document.createElementNS('http://www.w3.org/2000/svg', type);
    for (var key in attributes) {
      if (attributes.hasOwnProperty(key)) {
        elem.setAttribute(key, attributes[key]);
      }
    }
    return elem;
  }
  
  // Creates a path element between two points
  function createPath(x1, y1, x2, y2, classes) {
    var path = createSVGElement('path', {
      d: `M ${x1},${y1} L ${x2},${y2}`,
      class: classes
    });
    return path;
  }