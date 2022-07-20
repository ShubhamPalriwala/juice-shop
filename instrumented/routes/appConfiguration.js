"use strict";
/*
 * Copyright (c) 2014-2022 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

function cov_1v1z7rxsml() {
  var path = "/home/shubham/Desktop/juice-shop/build/routes/appConfiguration.js";
  var hash = "c3da29e14138d337fbe3b922aaf0c1b0f0991046";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/shubham/Desktop/juice-shop/build/routes/appConfiguration.js",
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
          column: 0
        },
        end: {
          line: 12,
          column: 2
        }
      },
      "3": {
        start: {
          line: 9,
          column: 4
        },
        end: {
          line: 11,
          column: 6
        }
      },
      "4": {
        start: {
          line: 10,
          column: 8
        },
        end: {
          line: 10,
          column: 29
        }
      }
    },
    fnMap: {
      "0": {
        name: "retrieveAppConfiguration",
        decl: {
          start: {
            line: 8,
            column: 26
          },
          end: {
            line: 8,
            column: 50
          }
        },
        loc: {
          start: {
            line: 8,
            column: 53
          },
          end: {
            line: 12,
            column: 1
          }
        },
        line: 8
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 9,
            column: 11
          },
          end: {
            line: 9,
            column: 12
          }
        },
        loc: {
          start: {
            line: 9,
            column: 26
          },
          end: {
            line: 11,
            column: 5
          }
        },
        line: 9
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    inputSourceMap: {
      version: 3,
      file: "appConfiguration.js",
      sourceRoot: "",
      sources: ["../../routes/appConfiguration.ts"],
      names: [],
      mappings: ";AAAA;;;GAGG;;AAEH,iCAAiC;AAGjC,MAAM,CAAC,OAAO,GAAG,SAAS,wBAAwB;IAChD,OAAO,CAAC,IAAa,EAAE,GAAa,EAAE,EAAE;QACtC,GAAG,CAAC,IAAI,CAAC,EAAE,MAAM,EAAE,CAAC,CAAA;IACtB,CAAC,CAAA;AACH,CAAC,CAAA"
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "c3da29e14138d337fbe3b922aaf0c1b0f0991046"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1v1z7rxsml = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1v1z7rxsml();
cov_1v1z7rxsml().s[0]++;
Object.defineProperty(exports, "__esModule", {
  value: true
});
const config = (cov_1v1z7rxsml().s[1]++, require("config"));
cov_1v1z7rxsml().s[2]++;

module.exports = function retrieveAppConfiguration() {
  cov_1v1z7rxsml().f[0]++;
  cov_1v1z7rxsml().s[3]++;
  return (_req, res) => {
    cov_1v1z7rxsml().f[1]++;
    cov_1v1z7rxsml().s[4]++;
    res.json({
      config
    });
  };
}; //# sourceMappingURL=appConfiguration.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQTs7O0FBR0FBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixTQUFTQyx3QkFBVCxHQUFpQztFQUFBO0VBQUE7RUFDaEQsT0FBTyxDQUFDQyxJQUFELEVBQWdCQyxHQUFoQixLQUFpQztJQUFBO0lBQUE7SUFDdENBLEdBQUcsQ0FBQ0MsSUFBSixDQUFTO01BQUVDO0lBQUYsQ0FBVDtFQUNELENBRkQ7QUFHRCxDQUpELEMiLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwicmV0cmlldmVBcHBDb25maWd1cmF0aW9uIiwiX3JlcSIsInJlcyIsImpzb24iLCJjb25maWciXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcm91dGVzL2FwcENvbmZpZ3VyYXRpb24udHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=