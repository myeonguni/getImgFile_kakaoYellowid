
# encodeuri-safe

Safely URI encode and decode strings, regardless of how many levels of encoding is present.


## Installation

```
$ npm install encodeuri-safe
```


## Example

```js
var encodeURISafe = require('encodeuri-safe');

encodeURISafe.encodeURIComponent('foo bar baz');           // "foo%20bar%20baz"
encodeURISafe.encodeURIComponent('foo%20bar%20baz');       // "foo%20bar%20baz"
encodeURISafe.encodeURIComponent('foo%2520bar%2520baz');   // "foo%20bar%20baz"

encodeURISafe.decodeURIComponent('foo bar baz');           // "foo bar baz"
encodeURISafe.decodeURIComponent('foo%20bar%20baz');       // "foo bar baz"
encodeURISafe.decodeURIComponent('foo%2520bar%2520baz');   // "foo bar baz"
```


## API

### encodeURIComponent(string)
  
Returns the `string` safely converted to one level of URI encoding.

### decodeURIComponent(string)
  
Returns the `string` safely decoded from all levels of URI encoding.


