"use strict";
/*
 * Copyright (c) 2014-2022 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

function cov_2qnfqadic4() {
  var path = "/home/shubham/Desktop/juice-shop/build/data/mongodb.js";
  var hash = "4ae123f800802a17f869b89d19832331584ee274";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/shubham/Desktop/juice-shop/build/data/mongodb.js",
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
          line: 8,
          column: 15
        },
        end: {
          line: 8,
          column: 32
        }
      },
      "2": {
        start: {
          line: 9,
          column: 16
        },
        end: {
          line: 9,
          column: 46
        }
      },
      "3": {
        start: {
          line: 10,
          column: 15
        },
        end: {
          line: 10,
          column: 46
        }
      },
      "4": {
        start: {
          line: 11,
          column: 11
        },
        end: {
          line: 14,
          column: 1
        }
      },
      "5": {
        start: {
          line: 15,
          column: 0
        },
        end: {
          line: 15,
          column: 20
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {},
    b: {},
    inputSourceMap: {
      version: 3,
      file: "mongodb.js",
      sourceRoot: "",
      sources: ["../../data/mongodb.ts"],
      names: [],
      mappings: ";AAAA;;;GAGG;;AAEH,mEAAmE;AACnE,iCAAiC;AAEjC,MAAM,OAAO,GAAG,IAAI,MAAM,CAAC,UAAU,CAAC,OAAO,CAAC,CAAA;AAC9C,MAAM,MAAM,GAAG,IAAI,MAAM,CAAC,UAAU,CAAC,QAAQ,CAAC,CAAA;AAE9C,MAAM,EAAE,GAAG;IACT,OAAO;IACP,MAAM;CACP,CAAA;AAED,MAAM,CAAC,OAAO,GAAG,EAAE,CAAA"
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "4ae123f800802a17f869b89d19832331584ee274"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2qnfqadic4 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2qnfqadic4();
cov_2qnfqadic4().s[0]++;
Object.defineProperty(exports, "__esModule", {
  value: true
}); // @ts-expect-error due to non-existing type definitions for MarsDB

const MarsDB = (cov_2qnfqadic4().s[1]++, require("marsdb"));
const reviews = (cov_2qnfqadic4().s[2]++, new MarsDB.Collection('posts'));
const orders = (cov_2qnfqadic4().s[3]++, new MarsDB.Collection('orders'));
const db = (cov_2qnfqadic4().s[4]++, {
  reviews,
  orders
});
cov_2qnfqadic4().s[5]++;
module.exports = db; //# sourceMappingURL=mongodb.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFLQTs7QUFDQTtBQUVBLE1BQU1BLE9BQU8sNkJBQUcsSUFBSUMsTUFBTSxDQUFDQyxVQUFYLENBQXNCLE9BQXRCLENBQUgsQ0FBYjtBQUNBLE1BQU1DLE1BQU0sNkJBQUcsSUFBSUYsTUFBTSxDQUFDQyxVQUFYLENBQXNCLFFBQXRCLENBQUgsQ0FBWjtBQUVBLE1BQU1FLEVBQUUsNkJBQUc7RUFDVEosT0FEUztFQUVURztBQUZTLENBQUgsQ0FBUjs7QUFLQUUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCRixFQUFqQixDIiwibmFtZXMiOlsicmV2aWV3cyIsIk1hcnNEQiIsIkNvbGxlY3Rpb24iLCJvcmRlcnMiLCJkYiIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vZGF0YS9tb25nb2RiLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19