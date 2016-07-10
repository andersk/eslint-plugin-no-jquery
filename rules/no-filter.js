'use strict';

const utils = require('./utils.js')

module.exports = function(context) {
  return {
    CallExpression: function(node) {
      if (node.callee.type !== 'MemberExpression') return
      if (node.callee.property.name !== 'filter') return

      if (utils.isjQuery(node)) {
        context.report({
          node: node,
          message: 'Prefer Array#filter to $.filter'
        })
      }
    }
  }
}

module.exports.schema = []
