"use strict";
/*
 * Copyright (c) 2014-2022 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

function cov_1ou6p2n5r6() {
  var path = "/home/shubham/Desktop/juice-shop/build/app.js";
  var hash = "8553679c30e3b5cff4d26f5d7ffd3ae23208a909";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/shubham/Desktop/juice-shop/build/app.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 0
        },
        end: {
          line: 9,
          column: 3
        }
      },
      "1": {
        start: {
          line: 7,
          column: 19
        },
        end: {
          line: 7,
          column: 38
        }
      },
      "2": {
        start: {
          line: 8,
          column: 4
        },
        end: {
          line: 8,
          column: 19
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 6,
            column: 53
          },
          end: {
            line: 6,
            column: 54
          }
        },
        loc: {
          start: {
            line: 6,
            column: 59
          },
          end: {
            line: 9,
            column: 1
          }
        },
        line: 6
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0
    },
    b: {},
    inputSourceMap: {
      version: 3,
      file: "app.js",
      sourceRoot: "",
      sources: ["../app.ts"],
      names: [],
      mappings: ";AAAA;;;GAGG;AAEH,OAAO,CAAC,oCAAoC,CAAC,EAAE,CAAC,IAAI,CAAC,GAAG,EAAE;IACxD,MAAM,MAAM,GAAG,OAAO,CAAC,UAAU,CAAC,CAAA;IAClC,MAAM,CAAC,KAAK,EAAE,CAAA;AAChB,CAAC,CAAC,CAAA"
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "8553679c30e3b5cff4d26f5d7ffd3ae23208a909"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1ou6p2n5r6 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1ou6p2n5r6();
cov_1ou6p2n5r6().s[0]++;

require('./lib/startup/validateDependencies')().then(() => {
  cov_1ou6p2n5r6().f[0]++;
  const server = (cov_1ou6p2n5r6().s[1]++, require('./server'));
  cov_1ou6p2n5r6().s[2]++;
  server.start();
}); //# sourceMappingURL=app.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtBQSxPQUFPLENBQUMsb0NBQUQsQ0FBUCxHQUFnREMsSUFBaEQsQ0FBcUQsTUFBSztFQUFBO0VBQ3hELE1BQU1DLE1BQU0sNkJBQUdGLE9BQU8sQ0FBQyxVQUFELENBQVYsQ0FBWjtFQUR3RDtFQUV4REUsTUFBTSxDQUFDQyxLQUFQO0FBQ0QsQ0FIRCxFIiwibmFtZXMiOlsicmVxdWlyZSIsInRoZW4iLCJzZXJ2ZXIiLCJzdGFydCJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9hcHAudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=