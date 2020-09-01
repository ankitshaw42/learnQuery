var domSelector = function (selectors) {
  'use strict';

  var items = document.querySelectorAll(selectors);
  return Array.prototype.slice.call(items);
};
