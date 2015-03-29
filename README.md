# cardno
[![NPM version](https://img.shields.io/npm/v/cardno.svg?style=flat)](https://www.npmjs.org/package/cardno)

analyze creditcard number

------

## Installation

```bash
$ npm install cardno
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

## License

MIT © [Leigh Zhu](#)
