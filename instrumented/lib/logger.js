"use strict";
/*
 * Copyright (c) 2014-2022 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

function cov_yh083nydp() {
  var path = "/home/shubham/Desktop/juice-shop/build/lib/logger.js";
  var hash = "6f2f1cd91c4f423958dc9dc00a51b6092ef1aad0";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/shubham/Desktop/juice-shop/build/lib/logger.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 0
        },
        end: {
          line: 6,
          column: 62
        }
      },
      "1": {
        start: {
          line: 7,
          column: 16
        },
        end: {
          line: 7,
          column: 34
        }
      },
      "2": {
        start: {
          line: 8,
          column: 0
        },
        end: {
          line: 13,
          column: 3
        }
      }
    },
    fnMap: {},
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 10,
            column: 48
          },
          end: {
            line: 10,
            column: 98
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 10,
            column: 82
          },
          end: {
            line: 10,
            column: 89
          }
        }, {
          start: {
            line: 10,
            column: 92
          },
          end: {
            line: 10,
            column: 98
          }
        }],
        line: 10
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {},
    b: {
      "0": [0, 0]
    },
    inputSourceMap: {
      version: 3,
      file: "logger.js",
      sourceRoot: "",
      sources: ["../../lib/logger.ts"],
      names: [],
      mappings: ";AAAA;;;GAGG;;AAEH,mCAAmC;AAEnC,MAAM,CAAC,OAAO,GAAG,OAAO,CAAC,YAAY,CAAC;IACpC,UAAU,EAAE;QACV,IAAI,OAAO,CAAC,UAAU,CAAC,OAAO,CAAC,EAAE,KAAK,EAAE,OAAO,CAAC,GAAG,CAAC,QAAQ,KAAK,MAAM,CAAC,CAAC,CAAC,OAAO,CAAC,CAAC,CAAC,MAAM,EAAE,CAAC;KAC9F;IACD,MAAM,EAAE,OAAO,CAAC,MAAM,CAAC,MAAM,EAAE;CAChC,CAAC,CAAA"
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "6f2f1cd91c4f423958dc9dc00a51b6092ef1aad0"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_yh083nydp = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_yh083nydp();
cov_yh083nydp().s[0]++;
Object.defineProperty(exports, "__esModule", {
  value: true
});
const winston = (cov_yh083nydp().s[1]++, require("winston"));
cov_yh083nydp().s[2]++;
module.exports = winston.createLogger({
  transports: [new winston.transports.Console({
    level: process.env.NODE_ENV === 'test' ? (cov_yh083nydp().b[0][0]++, 'error') : (cov_yh083nydp().b[0][1]++, 'info')
  })],
  format: winston.format.simple()
}); //# sourceMappingURL=logger.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0E7O0FBRUFBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkMsT0FBTyxDQUFDQyxZQUFSLENBQXFCO0VBQ3BDQyxVQUFVLEVBQUUsQ0FDVixJQUFJRixPQUFPLENBQUNFLFVBQVIsQ0FBbUJDLE9BQXZCLENBQStCO0lBQUVDLEtBQUssRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFFBQVosS0FBeUIsTUFBekIsK0JBQWtDLE9BQWxDLGdDQUE0QyxNQUE1QztFQUFULENBQS9CLENBRFUsQ0FEd0I7RUFJcENDLE1BQU0sRUFBRVIsT0FBTyxDQUFDUSxNQUFSLENBQWVDLE1BQWY7QUFKNEIsQ0FBckIsQ0FBakIsQyIsIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJ3aW5zdG9uIiwiY3JlYXRlTG9nZ2VyIiwidHJhbnNwb3J0cyIsIkNvbnNvbGUiLCJsZXZlbCIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsImZvcm1hdCIsInNpbXBsZSJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvbG9nZ2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19