```javascript
var loader = require('polyfill-loader')({
  Promise: {
    module: 'bluebird',
    error: '  Your Node.js version is too old. Please install bluebird to support Promise.\n'
      + '  $ npm install --save bluebird'
  }
});
```
