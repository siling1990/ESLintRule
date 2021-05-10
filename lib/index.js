/**
 * @fileoverview no anonymous array function
 * @author Stone
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

// var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
// module.exports.rules = requireIndex(__dirname + "/rules");
const allRules = {
    'no-anonymous-array-function': require("./rules/no-anonymous-array-function"),
    'no-console-function': require('./rules/no-console-function'),
    'no-component-use': require('./rules/no-component-use'),
    'function-annotation-check': require('./rules/function-annotation-check'),
  };
  
  function configureAsError(rules) {
    const result = {};
    for (const key in rules) {
      if (!rules.hasOwnProperty(key)) {
        continue;
      }
      result['react-performance-check/' + key] = 2;
    }
    return result;
  }
  
  const allRulesConfig = configureAsError(allRules);
  
  module.exports = {
    deprecatedRules: {},
    rules: allRules,
    rulesConfig: {
      'no-anonymous-array-function': 0,
      'no-console-function': 0,
      'no-component-use':0,
      'function-annotation-check':0
    },
    configs: {
      all: {
        plugins: [
          'react-performance-check',
        ],
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
        rules: allRulesConfig,
      },
    },
  };



