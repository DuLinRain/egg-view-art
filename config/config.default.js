'use strict';

const path = require('path');

module.exports = appInfo => {
  return {
    /**
     * @member Config#ejs
     * @property {String} [root=${baseDir}/app/view] - the root directory of ejs files
     * @property {Boolean} [cache=true] - compiled functions are cached, only work using `ctx.render`
     * @property {Boolean} [debug=false] - output generated function body
     * @property {Boolean} [compileDebug=true] - when false no debug instrumentation is compiled
     * @property {String} [delimiter] - character to use with angle brackets for open/close
     * @property {Boolean} [strict=false] - when set to true, generated function is in strict mode
     */
    art: {
      root: path.join(appInfo.baseDir, 'app/view'),
      // whether to enable caching
      cache: true,
    },
  };
};
