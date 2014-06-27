'use strict';

var getObject = function (name) {
  return global[name];
};

module.exports = function (name, mod, load, message) {
  var ret;

  load || (load = getObject);
  message || (message = ''
    + '  Your Node.js version is too old.'
    + ' Please install ' + name + ' to support '
    + mod + '.');

  if (ret = load(name)) {
    return ret;
  }
  
  try {
    ret = require(mod);
  } catch (e) {
    console.log();
    console.log(message);
    console.log();
    process.exit(1);
  }

  return ret;
};
