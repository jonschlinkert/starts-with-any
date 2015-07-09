/*!
 * starts-with-any <https://github.com/jonschlinkert/starts-with-any>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var startsWith = require('starts-with');

module.exports = function startsWithAny(target, values) {
  if (typeof target !== 'string' && !Array.isArray(target)) {
    throw new TypeError('startsWithAny expects the first argument to be a string or array.');
  }

  values = arrayify(values);
  var len = values.length;

  while (len--) {
    if (startsWith(target, values[len])) {
      return true;
    }
  }
  return false;
};

function arrayify(val) {
  return Array.isArray(val) ? val : [val];
}
