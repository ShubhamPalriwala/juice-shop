"use strict";
/*
 * Copyright (c) 2014-2022 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

function cov_bjy09bpwd() {
  var path = "/home/shubham/Desktop/juice-shop/build/protractor.subfolder.conf.js";
  var hash = "ca4b1ffd2998c13fcfa51daeab25e9ab1911b8d2";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/shubham/Desktop/juice-shop/build/protractor.subfolder.conf.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 25
        },
        end: {
          line: 6,
          column: 63
        }
      },
      "1": {
        start: {
          line: 7,
          column: 0
        },
        end: {
          line: 7,
          column: 61
        }
      },
      "2": {
        start: {
          line: 8,
          column: 0
        },
        end: {
          line: 8,
          column: 34
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {},
    b: {},
    inputSourceMap: {
      version: 3,
      file: "protractor.subfolder.conf.js",
      sourceRoot: "",
      sources: ["../protractor.subfolder.conf.js"],
      names: [],
      mappings: ";AAAA;;;GAGG;AAEH,MAAM,gBAAgB,GAAG,OAAO,CAAC,sBAAsB,CAAC,CAAC,MAAM,CAAA;AAE/D,gBAAgB,CAAC,OAAO,GAAG,iCAAiC,CAAA;AAC5D,OAAO,CAAC,MAAM,GAAG,gBAAgB,CAAA"
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "ca4b1ffd2998c13fcfa51daeab25e9ab1911b8d2"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_bjy09bpwd = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_bjy09bpwd();
const protractorConfig = (cov_bjy09bpwd().s[0]++, require('./protractor.conf.js').config);
cov_bjy09bpwd().s[1]++;
protractorConfig.baseUrl = 'http://localhost:3001/subfolder';
cov_bjy09bpwd().s[2]++;
exports.config = protractorConfig; //# sourceMappingURL=protractor.subfolder.conf.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQSxNQUFNQSxnQkFBZ0IsNEJBQUdDLE9BQU8sQ0FBQyxzQkFBRCxDQUFQLENBQWdDQyxNQUFuQyxDQUF0Qjs7QUFFQUYsZ0JBQWdCLENBQUNHLE9BQWpCLEdBQTJCLGlDQUEzQjs7QUFDQUMsT0FBTyxDQUFDRixNQUFSLEdBQWlCRixnQkFBakIsQyIsIm5hbWVzIjpbInByb3RyYWN0b3JDb25maWciLCJyZXF1aXJlIiwiY29uZmlnIiwiYmFzZVVybCIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vcHJvdHJhY3Rvci5zdWJmb2xkZXIuY29uZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==