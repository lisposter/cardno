# cardno
[![NPM version](https://img.shields.io/npm/v/cardno.svg?style=flat)](https://www.npmjs.org/package/cardno)

analyze creditcard number

------

## Installation

```bash
$ npm install cardno
```

or

```bash
$ bower install cardno
```

## Example

```js
var cardno = require('./');

var no = '4111111111111111';

no2 = '4111-1111-1111-1111';

console.log(cardno.validate(no));
// ==> true

console.log(cardno.is(no))
// ==> Visa

console.log(cardno.normalize(no2))
// ==> 4111111111111111
```

if you want to use this in browsers, you may need reference the lib to your html

```html
<script src="/path/to/cardno/index.js"></script>
```

## License

MIT © [Leigh Zhu](#)
