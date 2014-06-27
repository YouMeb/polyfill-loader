'use strict';

module.exports = function (polyfills) {
  polyfills || (polyfills = {});
  return function (name) {
    var polyfill = polyfills[name];
    var m;

    if (polyfill.isGlobal && global[name]) {
      return global[name];
    }
    
    try {
      require(polyfill.module);
    } catch (e) {
      console.log();
      console.log(polyfill.error || e.message);
      console.log();
      process.exit(1);
    }

    return ;
  };
};
