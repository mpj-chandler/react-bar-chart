'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./lib/react-hooks-bar-chart.min.js');
} else {
  module.exports = require('./lib/react-hooks-bar-chart.js');
}