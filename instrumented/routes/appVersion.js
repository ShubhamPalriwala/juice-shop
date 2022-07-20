"use strict";
/*
 * Copyright (c) 2014-2022 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

function cov_m1bmilvyi() {
  var path = "/home/shubham/Desktop/juice-shop/build/routes/appVersion.js";
  var hash = "527c6d459786641a7334249e9deac66a5ab7d3cd";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/shubham/Desktop/juice-shop/build/routes/appVersion.js",
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
          column: 15
        },
        end: {
          line: 7,
          column: 32
        }
      },
      "2": {
        start: {
          line: 8,
          column: 14
        },
        end: {
          line: 8,
          column: 37
        }
      },
      "3": {
        start: {
          line: 9,
          column: 0
        },
        end: {
          line: 15,
          column: 2
        }
      },
      "4": {
        start: {
          line: 10,
          column: 4
        },
        end: {
          line: 14,
          column: 6
        }
      },
      "5": {
        start: {
          line: 11,
          column: 8
        },
        end: {
          line: 13,
          column: 11
        }
      }
    },
    fnMap: {
      "0": {
        name: "retrieveAppVersion",
        decl: {
          start: {
            line: 9,
            column: 26
          },
          end: {
            line: 9,
            column: 44
          }
        },
        loc: {
          start: {
            line: 9,
            column: 47
          },
          end: {
            line: 15,
            column: 1
          }
        },
        line: 9
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 10,
            column: 11
          },
          end: {
            line: 10,
            column: 12
          }
        },
        loc: {
          start: {
            line: 10,
            column: 26
          },
          end: {
            line: 14,
            column: 5
          }
        },
        line: 10
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 12,
            column: 21
          },
          end: {
            line: 12,
            column: 87
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 12,
            column: 67
          },
          end: {
            line: 12,
            column: 82
          }
        }, {
          start: {
            line: 12,
            column: 85
          },
          end: {
            line: 12,
            column: 87
          }
        }],
        line: 12
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0]
    },
    inputSourceMap: {
      version: 3,
      file: "appVersion.js",
      sourceRoot: "",
      sources: ["../../routes/appVersion.ts"],
      names: [],
      mappings: ";AAAA;;;GAGG;;AAEH,iCAAiC;AAGjC,MAAM,KAAK,GAAG,OAAO,CAAC,cAAc,CAAC,CAAA;AAErC,MAAM,CAAC,OAAO,GAAG,SAAS,kBAAkB;IAC1C,OAAO,CAAC,IAAa,EAAE,GAAa,EAAE,EAAE;QACtC,GAAG,CAAC,IAAI,CAAC;YACP,OAAO,EAAE,MAAM,CAAC,GAAG,CAAC,+BAA+B,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,OAAO,EAAE,CAAC,CAAC,CAAC,EAAE;SAC5E,CAAC,CAAA;IACJ,CAAC,CAAA;AACH,CAAC,CAAA"
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "527c6d459786641a7334249e9deac66a5ab7d3cd"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_m1bmilvyi = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_m1bmilvyi();
cov_m1bmilvyi().s[0]++;
Object.defineProperty(exports, "__esModule", {
  value: true
});
const config = (cov_m1bmilvyi().s[1]++, require("config"));
const utils = (cov_m1bmilvyi().s[2]++, require('../lib/utils'));
cov_m1bmilvyi().s[3]++;

module.exports = function retrieveAppVersion() {
  cov_m1bmilvyi().f[0]++;
  cov_m1bmilvyi().s[4]++;
  return (_req, res) => {
    cov_m1bmilvyi().f[1]++;
    cov_m1bmilvyi().s[5]++;
    res.json({
      version: config.get('application.showVersionNumber') ? (cov_m1bmilvyi().b[0][0]++, utils.version()) : (cov_m1bmilvyi().b[0][1]++, '')
    });
  };
}; //# sourceMappingURL=appVersion.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtBO0FBR0EsTUFBTUEsS0FBSyw0QkFBR0MsT0FBTyxDQUFDLGNBQUQsQ0FBVixDQUFYOzs7QUFFQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFNBQVNDLGtCQUFULEdBQTJCO0VBQUE7RUFBQTtFQUMxQyxPQUFPLENBQUNDLElBQUQsRUFBZ0JDLEdBQWhCLEtBQWlDO0lBQUE7SUFBQTtJQUN0Q0EsR0FBRyxDQUFDQyxJQUFKLENBQVM7TUFDUEMsT0FBTyxFQUFFQyxNQUFNLENBQUNDLEdBQVAsQ0FBVywrQkFBWCxnQ0FBOENWLEtBQUssQ0FBQ1EsT0FBTixFQUE5QyxnQ0FBZ0UsRUFBaEU7SUFERixDQUFUO0VBR0QsQ0FKRDtBQUtELENBTkQsQyIsIm5hbWVzIjpbInV0aWxzIiwicmVxdWlyZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZXRyaWV2ZUFwcFZlcnNpb24iLCJfcmVxIiwicmVzIiwianNvbiIsInZlcnNpb24iLCJjb25maWciLCJnZXQiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcm91dGVzL2FwcFZlcnNpb24udHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=