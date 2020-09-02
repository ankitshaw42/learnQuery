function cssProp() {
  'use strict';

  // convert to array & remove extra arguments if any
  var args = Array.prototype.slice.call(arguments).slice(0, 3);

  var element = args[0];
  var prop = args[1];
  var value = args[2];

  // sets a single value
  if (args.length === 3) {
    element.style[prop] = value;
  }

  if (args.length === 2) {
    // get a value
    if (typeof prop === 'string') {
      return element.style[prop];
    }

    // set multiple properties using an object
    if (prop && typeof prop === 'object') {
      var styleMap = prop;
      for (var key in styleMap) {
        element.style[key] = styleMap[key];
      }
    }
  }
}
