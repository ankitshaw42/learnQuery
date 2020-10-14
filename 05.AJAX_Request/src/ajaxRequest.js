function ajaxReq(url, options) {
  'use strict';
  var xhr = new XMLHttpRequest();
  var context = options.context || null;

  xhr.onreadystatechange = function () {
    // request is finished
    if (xhr.readyState === 4) {
      var status = xhr.status;
      var responseText = xhr.responseText;

      // success
      if (xhr.status < 400) {
        var response = JSON.parse(responseText);
        options.success.bind(context)(response, status, xhr);
      } else {
        // failure
        options.failure.bind(context)(xhr, status, responseText);
      }

      options.complete.bind(context)(xhr, status);
    }
  };

  xhr.open(options.method || 'GET', url);
  xhr.send();
}
