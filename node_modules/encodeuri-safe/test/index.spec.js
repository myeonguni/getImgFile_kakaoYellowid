'use strict';

var test = require('tape');
var encodeSafe = require('../');

var input = 'here is some test input';
var MAX_ROTATIONS = 200;

var _rotate = (function () {
  var map = {};
  return function _rotateMemoized (str, n) {
    if (map[n]) {
      return map[n];
    }
    for (var i = 0; i < n; i++) {
      str = encodeURIComponent(str);
    }
    map[i] = str;
    return str;
  };
})();

test('encodeURISafe', function (assert) {
  assert.ok(encodeSafe, 'Module was loaded');
  assert.ok(encodeSafe.encodeURIComponent, 'encodeURIComponent exported from module');
  assert.ok(encodeSafe.decodeURIComponent, 'decodeURIComponent exported from module');
  assert.equal(typeof encodeSafe.encodeURIComponent, 'function', 'encodeURIComponent is a function');
  assert.equal(typeof encodeSafe.decodeURIComponent, 'function', 'decodeURIComponent is a function');
  assert.end();
});

test('encodeURISafe.encodeURIComponent', function (assert) {
  assert.equal(encodeSafe.encodeURIComponent(), 'undefined', 'Handles undefined input');
  assert.equal(encodeSafe.encodeURIComponent(null), 'null', 'Handles null input');
  assert.equal(encodeSafe.encodeURIComponent({}), '%5Bobject%20Object%5D', 'Handles wrong type input');

  var expected = encodeURIComponent(input);
  for (var i = 0; i < MAX_ROTATIONS; i++) {
    var newInput = _rotate(input, i);
    var actual = encodeSafe.encodeURIComponent(newInput);
    assert.equal(actual, expected, 'Properly encodes a value that was previously encoded ' + i + ' times');
  }

  assert.end();
});

test('encodeURISafe.decodeURIComponent', function (assert) {
  assert.equal(encodeSafe.decodeURIComponent(), 'undefined', 'Handles undefined input');
  assert.equal(encodeSafe.decodeURIComponent(null), 'null', 'Handles null input');
  assert.equal(encodeSafe.decodeURIComponent({}), '[object Object]', 'Handles wrong type input');

  var actual = encodeSafe.decodeURIComponent(input);
  for (var i = 0; i < MAX_ROTATIONS; i++) {
    var newInput = _rotate(input, i);
    actual = encodeSafe.decodeURIComponent(newInput);
    assert.equal(actual, input, 'Properly decodes a value that was previously encoded ' + i + ' times');
  }

  assert.end();
});

