# fade-promise [![NPM version](https://badge.fury.io/js/fade-promise.svg)](https://npmjs.org/package/fade-promise) [![Build Status](https://travis-ci.org/Oliv/fade-promise.svg?branch=master)](https://travis-ci.org/Oliv/fade-promise)

Promisified fade in es6, using requestAnimationFrame

## Installation

```sh
$ npm install --save fade-promise
```

## Usage

```js
import fadePromise from 'fade-promise';

fadePromise(element, to[, duration]).then((element, to, duration) => {
  console.log('done !');
});
```

## API

The default `duration` is `300` ms.

### fade(el, opacity[, duration])

Returns a `Promise`.

## License

MIT © [Olivier Gasc](https://github.com/Oliv)
