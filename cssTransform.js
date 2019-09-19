'use strict'
const path = require('path')

module.exports = {
  process (src, filename, config, options) {
    console.log('Processing ', filename)
    return 'module.exports = ' + JSON.stringify(path.basename(filename)) + ';'
  },
  getCacheKey () {
    return 'cssTransform'
  }
}
