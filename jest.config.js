const lodash = require('lodash');
module.exports = {
  testRegex: 'resources/js/tests/.*.test.js',
  setupFilesAfterEnv: ['./test-setup.js'],
  globals: {
    _: lodash
  }
};
