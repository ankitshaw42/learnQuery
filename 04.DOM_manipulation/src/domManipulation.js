var dom = (function () {
  // code goes here

  function remove(target) {
    if (target && target.remove) {
      target.remove();
    }
  }

  function append(parent, child) {
    if (parent && parent.append) {
      parent.append(child);
    }
  }

  function prepend(parent, child) {
    if (parent && parent.prepend) {
      parent.prepend(child);
    }
  }

  function after(element, sibling) {
    if (element && element.after) {
      element.after(sibling);
    }
  }

  function before(element, sibling) {
    if (element && element.before) {
      element.before(sibling);
    }
  }

  function val(element) {
    if (element) {
      return element.value;
    }
  }

  return {
    remove: remove,
    append: append,
    prepend: prepend,
    after: after,
    before: before,
    val: val,
  };
})();
