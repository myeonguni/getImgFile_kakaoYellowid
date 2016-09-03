'use strict';

/**
 * Returns a safely URI decoded string.
 *
 * @public
 * @param {String} str- text to decode
 * @returns {String}   - safely decoded version of input string
 */
exports.decodeURIComponent = function decode (str) {
  if (typeof str !== 'string') {
    str = '' + str;
  }

  var good = decodeURIComponent(str);
  while (str !== good) {
    str = decodeURIComponent(str);
    good = decodeURIComponent(good);
  }

  return good;
};

/**
 * Encodes an input string to one level of encoding.
 *
 * @public
 * @param {String} value - text to encode
 * @returns {String}     - safely encoded text
 */
exports.encodeURIComponent = function encode (value) {
  var decoded = exports.decodeURIComponent(value);
  return encodeURIComponent(decoded);
};

